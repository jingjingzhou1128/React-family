import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import MyIcon from '@/components/MyIcon';
import contentRouterMap from '@/router/config';
import {updateTags, clearTags, addTag, deleteTag} from '@/redux/actions/tags';

const mapStateToProps = (state) => {
  return {
    tags: state.tags.tags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTags: (tags) => {
      dispatch(updateTags(tags))
    },
    addTag: (tag) => {
      dispatch(addTag(tag))
    },
    clearTags: () => {
      dispatch(clearTags())
    },
    deleteTag: (tag) => {
      dispatch(deleteTag(tag))
    }
  }
}

class MyTags extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     activeTag: ''
  //   }
  // }
  
  filterAffixTags (routes) {
    let affix = []
    routes.forEach(item => {
      if (item.meta && item.meta.affixTag && !item.meta.nonTag) {
        affix.push({
          title: item.meta.title,
          path: item.path,
          isAffix: true
        })
      }
      if (item.children) {
        let tempAffix = this.filterAffixTags(item.children)
        affix = [...affix, ...tempAffix]
      }
    })
    return affix
  }
  
  initAffixTags () {
    let tags = this.filterAffixTags(contentRouterMap)
    this.props.updateTags(tags)
  }

  // getActiveTag () {
  //   this.setState({
  //     activeTag: this.props.location.pathname
  //   })
  // }

  deleteTag (tag) {
    this.props.deleteTag(tag)
    if (this.props.location.pathname !== tag.path || this.props.tags.length < 1) return
    let index = this.props.location.pathname === this.props.tags[this.props.tags.length - 1].path ?
      this.props.tags.length - 2 :
      this.props.tags.length - 1
    if (index < 0) return
    this.props.history.push(this.props.tags[index].path)
  }

  clearTags () {
    this.props.clearTags()
    let affixTags = this.props.tags.filter(item => item.isAffix)
    if (affixTags.length < 1) return
    if (this.props.tags[0].path === this.props.location.pathname) return
    this.props.history.push(this.props.tags[0].path)
  }

  componentDidMount () {
    console.log('mount')
    this.initAffixTags()
    // this.getActiveTag()
  }

  componentDidUpdate (oldProps) {
    // this.props.history.listen(()=>{
    //   console.log(2)
    // })
    // console.log(this.props.tags)
    console.log('update')
    if (this.props.location.pathname === oldProps.location.pathname) return
    if (this.props.location.state && !this.props.location.state.nonTag) {
      this.props.addTag({
        title: this.props.location.state.title,
        path: this.props.location.pathname,
        isAffix: !!this.props.location.state.affixTag
      })
    }
    // this.getActiveTag()
  }

  render () {
    const contextMenu = (
      <Menu>
        <Menu.Item key="tag-cont-refresh">Refresh</Menu.Item>
        <Menu.Item key="tag-cont-other">Close Other</Menu.Item>
        <Menu.Item key="tag-cont-all" onClick={() => {this.clearTags()}}>Close All</Menu.Item>
      </Menu>
    )
    return (
      <div className="tags">
        {
          this.props.tags.map(tag => {
            return (
              <Dropdown
                overlay={contextMenu}
                trigger={['contextMenu']}
                key={tag.path}>
                <span className={['tag-item', this.props.location.pathname === tag.path ? 'active' : '']}>
                  <Link className="tag-link" to={tag.path}>{tag.title}</Link>
                  {tag.isAffix ? null : (
                    <MyIcon type="icon-close" onClick={() => {this.deleteTag(tag)}}/>
                  )}
                </span>
              </Dropdown>
            )
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyTags))