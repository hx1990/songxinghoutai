import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
import {host,log} from '../../Comment'
import axios from 'axios'

import { Select,Input,Table } from 'antd'
import userUrl from "../../images/user.png"

const Option=Select.Option
const Search=Input.Search

const columns = [
    { title: '序号', dataIndex: 'number',  key: 'number', render: text => <a href="javascript">{text}</a>, }, 
    { title: 'ID',  dataIndex: 'ID',  key: 'ID', }, 
    { title: '注册日期',  dataIndex: 'date',  key: 'date', }, 
     
    { title: '微信名',  dataIndex: 'wxname',  key: 'wxname', }, 
    { title: '用户名',  dataIndex: 'name',  key: 'name', },
    { title: '手机号',  dataIndex: 'phone',  key: 'phone', },
    { title: '地址',   dataIndex: 'address',  key: 'address', },
    { title: '认证',  dataIndex: 'bsure',  key: 'bsure', },
    { title: '收件人',  dataIndex: 'sendnumber',  key: 'sendnumber', },
    { title: '余额',  dataIndex: 'account',  key: 'account', },
    { title: '消费金额',  dataIndex: 'shop',  key: 'shop', },
    { title: '积分',  dataIndex: 'core',  key: 'core', },
    { title: '红包',  dataIndex: 'yhq',  key: 'yhq', },
    { title: '详情', key: '详情',  render: (text, record) => ( 
      <span>
          <NavLink activeClassName="activeRoute" to="/userDetail">查看详情</NavLink>
      </span>
     ),
    }
]
  

class UserInfo extends Component {
    constructor(){
        super()
        this.state={
        data:[{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
          }]
        }
    }
    componentWillMount(){
      axios.get(`/admin/get/user/list`, {
        headers: { 'Access-Control-Allow-Origin': `${host}/*`},
      }).then(res=>{
        log('测试接口',res)
        log(res.data.data)
        let userinfo=res.data.data
        let arr=[]
        userinfo.forEach((key,index)=>{
             let json={}
             json.ID=key.id
             json.date=key.registerDate
             arr.push(json)
        });
        log(arr)
        this.setState({
          data:arr
        })
      }).catch(err=>{
        log('失败',err)
      });
    }
    renZheng(e){
      log('aaa',e)
    }
    render(){
        return (<div className="userInfo">
            <div className="usertitle">
              <img alt='img' src={userUrl}/>
              <span>用户信息管理</span>
            </div>
            <div>
              {/* 条件筛选 */}
              <Select defaultValue="按认证" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                <Option value="done">完成认证</Option>
                <Option value="die">未完成认证</Option>
              </Select>
              <Select defaultValue="快递量" style={{ width: 120 }} >
                <Option value="expressmore">快递量由高到低</Option>
                <Option value="less">快递量由低到高</Option>
              </Select>
              <Select defaultValue="金额" style={{ width: 120 }} >
                <Option value="pricemore">金额由高到低</Option>
                <Option value="price">金额由低到高</Option>
              </Select>
              <Select defaultValue="积分" style={{ width: 120 }} >
                <Option value="scoremore">积分由高到低</Option>
                <Option value="score">积分由低到高</Option>
              </Select>
              <Select defaultValue="按红包" style={{ width: 120 }} >
                <Option value="yhqmore">红包由高到低</Option>
                <Option value="yhq">红包由低到高</Option>
              </Select>
              <Search placeholder="自定义搜索"  onSearch={value => console.log(value)}  style={{ width: 200 }} />
            </div> 
            {/* 展示数据 */}
            <Table columns={columns} dataSource={this.state.data} />
           <userDetail/>
        </div>)
    }
}

export default UserInfo