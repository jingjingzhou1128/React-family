import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import MyIcon from '@/components/MyIcon';
import contentRouterMap from '@/router/config';
import {updateTags, setTags, addTag, deleteTag} from '@/redux/actions/tags';

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
    setTags: (tags) => {
      dispatch(setTags(tags))
    },
    deleteTag: (tag) => {
      dispatch(deleteTag(tag))
    }
  }
}

class MyTags extends Component {
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

  filterCurrentTags (routes) {
    let match = []
    routes.forEach(item => {
      if (item.meta && !item.meta.nonTag && (item.path === this.props.location.pathname)) {
        match.push({
          title: item.meta.title,
          path: item.path,
          isAffix: item.meta.affixTag
        })
      }
      if (item.children) {
        let tempMatch = this.filterCurrentTags(item.children)
        match = [...match, ...tempMatch]
      }
    })
    return match
  }

  initCurrentTags () {
    let matchTags = this.filterCurrentTags(contentRouterMap)
    if (matchTags.length < 1) return
    if (matchTags[0].isAffix) return
    this.props.addTag(matchTags[0])
  }

  deleteTag (tag) {
    this.props.deleteTag(tag)
    if (this.props.location.pathname !== tag.path || this.props.tags.length < 1) return
    let index = this.props.location.pathname === this.props.tags[this.props.tags.length - 1].path ?
      this.props.tags.length - 2 :
      this.props.tags.length - 1
    if (index < 0) return
    this.props.history.push(this.props.tags[index].path)
  }

  closeOtherTags (tag) {
    let filterTags = this.props.tags.filter(item => item.isAffix || item.path === tag.path)
    this.props.setTags(filterTags)
    this.props.history.push(tag.path)
  }

  refresh (tag) {
    this.props.history.push(tag.path)
  }

  closeAllTags () {
    let affixTags = this.props.tags.filter(item => item.isAffix)
    this.props.setTags(affixTags)
    if (affixTags.length < 1) return
    if (this.props.tags[0].path === this.props.location.pathname) return
    this.props.history.push(this.props.tags[0].path)
  }

  componentDidMount () {
    this.initAffixTags()
    this.initCurrentTags()
  }

  componentDidUpdate (oldProps) {
    // this.props.history.listen(()=>{
    //   console.log(2)
    // })
    if (this.props.location.pathname === oldProps.location.pathname) return
    if (this.props.location.state && !this.props.location.state.nonTag) {
      this.props.addTag({
        title: this.props.location.state.title,
        path: this.props.location.pathname,
        isAffix: !!this.props.location.state.affixTag
      })
    }
  }

  render () {
    return (
      <div className="tags">
        {
          this.props.tags.map(tag => {
            return (
              <Dropdown
                overlay={(
                  <Menu>
                    <Menu.Item key="tag-cont-refresh" onClick={() => {this.refresh(tag)}}>Refresh</Menu.Item>
                    <Menu.Item key="tag-cont-other" onClick={() => {this.closeOtherTags(tag)}}>Close Other</Menu.Item>
                    <Menu.Item key="tag-cont-all" onClick={() => {this.closeAllTags()}}>Close All</Menu.Item>
                  </Menu>
                )}
                trigger={['contextMenu']}
                key={tag.path}>
                <span className={['tag-item', this.props.location.pathname === tag.path ? 'active' : '']}>
                  <Link className="tag-link" to={tag.path}>{window.generateMessage(`reactFrame.route.${tag.title}`)}</Link>
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