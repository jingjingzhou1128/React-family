import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

import MyIcon from '@/components/MyIcon';
import './index.scss';

class MyBreadcrumb extends Component {
  render () {
    /**
     * breads: {
        separator: '/',
        data: [
          {
            title: '',
            icon: '',
            link: ''
          }
        ]
      }
     */
    return (
      <div className="bread-wrapper">
        <Breadcrumb separator={this.props.breads.separator}>
          {
            this.props.breads.data.map((item, index) => {
              return (
                <Breadcrumb.Item key={index}>
                  {
                    item.link ? (
                      <Link to={item.link} className="bread-item is-link">
                        {item.icon && <MyIcon type={item.icon}/>}
                        <span>{item.title}</span>
                      </Link>
                    ) : (
                      <span className="bread-item">
                        {item.icon && <MyIcon type={item.icon}/>}
                        <span>{item.title}</span>
                      </span>
                    )
                  }
                  
                </Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
        {this.props.children}
      </div>
    )
  }
}

export default MyBreadcrumb;