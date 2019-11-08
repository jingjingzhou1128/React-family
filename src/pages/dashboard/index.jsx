import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Row, Col, Table, Tag, List, Avatar, Descriptions, Switch} from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';
import PanelTitle from '@/components/PanelTitle';
import MyIcon from '@/components/MyIcon';
import ComChart from '@/components/ComChart';
import ComModal from '@/components/ComModal';
import {setDasSet} from '@/redux/actions/app';
import './index.scss';

function resizeWindow () {
  let myEvent = new Event('resize')
  window.dispatchEvent(myEvent)
}

const mapStateToProps = (state) => {
  return {
    dasSet: state.app.dasSet
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDasSet: (das) => {
      resizeWindow()
      dispatch(setDasSet(das))
    }
  }
}

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      /**
       * @author zhoujingjing
       * @description 面板设置弹出框数据
       */
      modalData: {
        visible: false,
        afterClose: () => {this.afterClose()}
      },
      /**
       * @author zhoujingjing
       * @description panel配置
       */
      panelSet: {
        expected: true,
        sales: true,
        technology: true,
        page: true,
        table: true,
        list: true
      },
      /**
       * @author zhoujingjing
       * @description 临时panel配置
       */
      tmpPanelSet: {},
      /**
       * @author zhoujingjing
       * @description 面包屑导航
       */
      breads: {
        separator: '/',
        data: [
          {
            title: window.generateMessage('reactFrame.route.dashboard')
            // link: '/home/dashboard'
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 统计数据
       */
      summaryData: {
        visits: 102400,
        messages: 81212,
        purchases: 9280,
        shop: 13600
      },
      /**
       * @author zhoujingjing
       * @description 折线图参数
       */
      lineChartOptions: {
        color: ['#f56c6c', '#2c91e4'],
        legend: {
          top: 0,
          data: ['expected', 'actual']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          extraCssText: 'text-align: left'
        },
        grid: {
          left: 0,
          right: 10,
          bottom: 0,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2c91e4'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2c91e4'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'expected',
            type: 'line',
            smooth: true,
            data: [100, 120, 161, 134, 105, 160, 165]
          },
          {
            name: 'actual',
            type: 'line',
            areaStyle: {
              color: 'rgba(44, 145, 228, 0.3)'
            },
            smooth: true,
            data: [120, 82, 91, 154, 162, 140, 145]
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 雷达图参数
       */
      radarChartOptions: {
        legend: {
          data: ['Allocated Budget', 'Actual Spending', 'Expected Spending'],
          bottom: 0
        },
        radar: {
          name: {
            textStyle: {
              color: '#999'
            }
          },
          center: ['50%', '40%'],
          radius: '65%',
          splitNumber: 10,
          axisLine: {
            lineStyle: {
              color: '#bbb'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['#cbc1cd', '#cbc1cd']
            }
          },
          indicator: [
            {name: 'sales', max: 6500},
            {name: 'Administration', max: 16000},
            {name: 'Information Techology', max: 30000},
            {name: 'Customer Support', max: 38000},
            {name: 'Development', max: 52000},
            {name: 'Marketing', max: 25000}
          ]
        },
        series: [
          {
            name: 'radar',
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 0
            },
            areaStyle: {
              opacity: 1,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 5
            },
            data: [
                {
                  name: 'Actual Spending',
                  value: [4800, 12000, 18000, 31000, 38000, 21000],
                  areaStyle: {
                    color: '#2da8cf'
                  },
                  emphasis: {
                    areaStyle: {
                      color: '#00BCD4'
                    }
                  }
                },
                {
                  name: 'Expected Spending',
                  value: [3000, 12000, 25000, 31000, 28000, 18000],
                  areaStyle: {
                    color: '#d85e5e'
                  },
                  emphasis: {
                    areaStyle: {
                      color: '#f56c6c'
                    }
                  }
                },
                {
                  name: 'Allocated Budget',
                  value: [5000, 13000, 20000, 31000, 30000, 16000],
                  areaStyle: {
                    color: '#2981ca'
                  },
                  emphasis: {
                    areaStyle: {
                      color: '#2c91e4'
                    }
                  }
                }
              ]
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 饼图参数
       */
      pieChartOptions: {
        color: ['#2c91e4', '#67c23a', '#f56c6c', '#e6a23c', '#00BCD4'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '40%'],
            roseType: 'area',
            data: [
              {value: 10, name: 'Industries'},
              {value: 5, name: 'Technology'},
              {value: 15, name: 'Forex'},
              {value: 25, name: 'Gold'},
              {value: 20, name: 'Forecasts'}
            ]
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 柱状图参数
       */
      barChartOptions: {
        color: ['#00BCD4', '#f56c6c', '#2c91e4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          extraCssText: 'text-align: left'
        },
        legend: {
          show: false,
          data: ['Industries', 'Technology', 'Forex']
        },
        grid: {
          top: 20,
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2c91e4'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2c91e4'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'Industries',
            type: 'bar',
            stack: 'bar1',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Technology',
            type: 'bar',
            stack: 'bar1',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Forex',
            type: 'bar',
            stack: 'bar1',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 表格项
       */
      tableColumns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (text, record, index) => {
            let type
            switch (text) {
              case 1:
                type = 'info'
                break
              case 2:
                type = 'primary'
                break
              case 3:
                type = 'warning'
                break
              case 4:
                type = 'danger'
                break
              case 5:
                type = 'success'
                break
              default:
                type = 'info'
                break
            }
            return (
              <Tag className={`tag tag-${type}`}>{type}</Tag>
            )
          }
        },
      ],
      /**
       * @author zhoujingjing
       * @description 表格数据
       */
      tableData: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          status: 1
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          status: 2
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 24,
          status: 3
        },
        {
          key: '4',
          name: 'Jim Black',
          age: 34,
          status: 4
        },
        {
          key: '5',
          name: 'Jim Brown',
          age: 28,
          status: 5
        }
      ],
      /**
       * @author zhoujingjing
       * @description 列表数据
       */
      listData: [
        {
          link: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'Laurent',
          desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
        },
        {
          link: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'Laurent',
          desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
        },
        {
          link: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'Laurent',
          desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
        },
        {
          link: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          title: 'Laurent',
          desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
        }
      ]
    }
  }
  /**
   * @author zhoujingjing
   * @description 关闭panel
   * @param name 被关闭的panel名
   */
  handleClosePanel (name) {
    let panelSet = {
      ...this.state.panelSet,
      [name]: false
    }
    this.setState({
      panelSet
    })
    let modifySet = Object.keys(panelSet).filter(item => panelSet[item])
    this.props.setDasSet(modifySet.join(','))
  }

  /**
   * @author zhoujingjing
   * @description 打开面板设置弹框
   */
  openSetDialog () {
    this.setState({
      modalData: {
        ...this.state.modalData,
        visible: true
      },
      tmpPanelSet: {
        ...this.state.panelSet
      }
    })
  }

  /**
   * @author zhoujingjing
   * @description 保存面板更改设置
   */
  saveSet () {
    this.setState({
      panelSet: {
        ...this.state.tmpPanelSet
      }
    })
    let modifySet = Object.keys(this.state.tmpPanelSet).filter(item => this.state.tmpPanelSet[item])
    this.props.setDasSet(modifySet.join(','))
    this.closeSetDialog()
  }

  /**
   * @author zhoujingjing
   * @description 关闭面板设置弹框
   */
  closeSetDialog () {
    this.setState({
      modalData: {
        ...this.state.modalData,
        visible: false
      }
    })
  }

  /**
   * @author zhoujingjing
   * @description 关闭面板回调函数
   */
  afterClose () {
    this.setState({
      tmpPanelSet: {}
    })
  }

  /**
   * @author zhoujingjing
   * @description switch更改时触发事件
   */
  handleSetChange (value, key) {
    this.setState({
      tmpPanelSet: {
        ...this.state.tmpPanelSet,
        [key]: value
      }
    })
  }

  /**
   * @author zhoujingjing
   * @description 初始化面板设置
   */
  initDasSet () {
    if (!this.props.dasSet) return
    let dasSet = this.props.dasSet.split(',')
    let panelSet = {
      ...this.state.panelSet
    }
    for (let key of Object.keys(panelSet)) {
      if (dasSet.includes(key)) {
        panelSet[key] = true
      } else {
        panelSet[key] = false
      }
    }
    this.setState({
      panelSet: panelSet
    })
  }

  componentDidMount () {
    this.initDasSet()
  }

  render () {
    return (
      <div className="main-wrapper">
        <MyBreadcrumb breads={this.state.breads}>
          <div className="btn-group">
            <Button type="primary" className="ant-btn-mini" onClick={() => {this.openSetDialog()}}>Setting</Button>
          </div>
        </MyBreadcrumb>
        <Row gutter={16} type="flex">
          <Col span={24}>
            <ul className="summary panel">
              <li>
                <p className="title">New Visits</p>
                <p className="numb">{window.toThousandFilter(this.state.summaryData.visits, 0)}</p>
              </li>
              <li>
                <p className="title">Messages</p>
                <p className="numb">{window.toThousandFilter(this.state.summaryData.messages, 0)}</p>
              </li>
              <li>
                <p className="title">Purchases</p>
                <p className="numb">{window.toThousandFilter(this.state.summaryData.purchases, 0)}</p>
              </li>
              <li>
                <p className="title">Shoppings</p>
                <p className="numb">{window.toThousandFilter(this.state.summaryData.shop, 0)}</p>
              </li>
            </ul>
          </Col>
          {
            this.state.panelSet['expected'] ? (
              <Col span={24}>
                <div className="panel">
                  <PanelTitle panelTitle={{title: 'Expected'}}>
                    <div className="btn-group">
                      <span className="btn btn-text" onClick={() => {this.handleClosePanel('expected')}}>
                        <MyIcon type="icon-guanbi"/>
                      </span>
                    </div>
                  </PanelTitle>
                  <div className="panel-body">
                    <ComChart chartOptions={this.state.lineChartOptions} chartId="lineChart"/>
                  </div>
                </div>
              </Col>
            ) : null
          }
          {
            this.state.panelSet['sales'] ? (
              <Col span={8}>
                <div className="panel">
                  <PanelTitle panelTitle={{title: 'Sales'}}>
                    <div className="btn-group">
                      <span className="btn btn-text" onClick={() => {this.handleClosePanel('sales')}}>
                        <MyIcon type="icon-guanbi"/>
                      </span>
                    </div>
                  </PanelTitle>
                  <div className="panel-body">
                    <ComChart chartOptions={this.state.radarChartOptions} chartId="radarChart"/>
                  </div>
                </div>
              </Col>
            ) : null
          }
          {
            this.state.panelSet['technology'] ? (
              <Col span={8}>
                <div className="panel">
                  <PanelTitle panelTitle={{title: 'Technology'}}>
                    <div className="btn-group">
                      <span className="btn btn-text" onClick={() => {this.handleClosePanel('technology')}}>
                        <MyIcon type="icon-guanbi"/>
                      </span>
                    </div>
                  </PanelTitle>
                  <div className="panel-body">
                    <ComChart chartOptions={this.state.pieChartOptions} chartId="pieChart"/>
                  </div>
                </div>
              </Col>
            ) : null
          }
          {
            this.state.panelSet['page'] ? (
              <Col span={8}>
                <div className="panel">
                  <PanelTitle panelTitle={{title: 'Page'}}>
                    <div className="btn-group">
                      <span className="btn btn-text" onClick={() => {this.handleClosePanel('page')}}>
                        <MyIcon type="icon-guanbi"/>
                      </span>
                    </div>
                  </PanelTitle>
                  <div className="panel-body">
                    <ComChart chartOptions={this.state.barChartOptions} chartId="barChart"/>
                  </div>
                </div>
              </Col>
            ) : null
          }
          {
            this.state.panelSet['table'] ? (
              <Col span={12}>
                <div className="panel">
                  <PanelTitle panelTitle={{title: 'Table'}}>
                    <div className="btn-group">
                      <span className="btn btn-text" onClick={() => {this.handleClosePanel('table')}}>
                        <MyIcon type="icon-guanbi"/>
                      </span>
                    </div>
                  </PanelTitle>
                  <div className="panel-body">
                    <Table columns={this.state.tableColumns} dataSource={this.state.tableData} pagination={false}/>
                  </div>
                </div>
              </Col>
            ) : null
          }
          {
            this.state.panelSet['list'] ? (
              <Col span={12}>
                <div className="panel">
                  <PanelTitle panelTitle={{title: 'List'}}>
                    <div className="btn-group">
                      <span className="btn btn-text" onClick={() => {this.handleClosePanel('list')}}>
                        <MyIcon type="icon-guanbi"/>
                      </span>
                    </div>
                  </PanelTitle>
                  <div className="panel-body">
                    <List itemLayout="horizontal" dataSource={this.state.listData} renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={item.link}/>}
                          title={item.title}
                          description={item.desc}
                        />
                      </List.Item>
                    )}></List>
                  </div>
                </div>
              </Col>
            ) : null
          }
        </Row>
        <ComModal modalData={this.state.modalData}>
          <Descriptions
            bordered
            column={1}>
            {Object.keys(this.state.tmpPanelSet).map(value => (
              <Descriptions.Item label={window.initToUpperCase(value)} key={value}>
                <Switch checked={this.state.tmpPanelSet[value]} onChange={(checked) => {this.handleSetChange(checked, value)}}/>
              </Descriptions.Item>
            ))}
          </Descriptions>
          <div className="modal-footer">
            <Button key="save" onClick={() => {this.saveSet()}} type="primary">Save</Button>
            <Button key="cancel" onClick={() => {this.closeSetDialog()}} type="info">Cancel</Button>
          </div>
        </ComModal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
