import React, { Component } from 'react'
import { Table,Select,Input} from 'antd'
import "./index.css"
const log=console.log.bind(console)
const Option=Select.Option
const Search=Input.Search

const express = [
    { title: '序号', dataIndex: 'number',  key: 'number',  render: text => <a href="javascript">{text}</a>, }, 
    { title: 'ID',  dataIndex: 'ID',  key: 'ID', }, 
    { title: '实名',  dataIndex: 'name',  key: 'name', }, 
    { title: '地址',   dataIndex: 'address',  key: 'address', },
    { title: '快递公司',  dataIndex: 'company',  key: 'company', }, 
    { title: '提交时间',   dataIndex: 'posttime',  key: 'posttime',},
    { title: '电话号码',  dataIndex: 'phone',  key: 'phone', },
    { title: '认证状态',  dataIndex: 'status',  key: 'status', },
    { title: '证件照',   dataIndex: 'pic',  key: 'pic', },
    { title: '备注',   dataIndex: 'remark',  key: 'remark', },
    { title: '操作', key: 'action',  render: (text, record) => (
      <span>
          <a href="javascrpt">通过认证</a>
          <a href="javascrpt">删除</a>
      </span>
    ),
  }]

class CertificationAudit extends Component {
     constructor(){
        super()
        this.state={
          data :[{
            key: '1',
            name: 'John Brown',
            age: 32,
            
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            
          }]
        }
    }
    renZheng(e){
      log(e)
    }
    render(){
        return (<div className="express">
          <div className="DetailList">快递员认证</div>
          <div className="shaxuan">
              <Select defaultValue="按完成状态" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="done">已完成认证</Option>
                    <Option value="die">未完成认证</Option>
              </Select>
              <Select defaultValue="注册时间" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="timemore">由近到远</Option>
                    <Option value="time">由远到近</Option>
              </Select>
              {/*<Select defaultValue="金额" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="timemore">由高到低</Option>
                    <Option value="time">由低到高</Option>
              </Select>
              <Select defaultValue="快递柜" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="timemore">00001</Option>
                    <Option value="time">0002</Option>
              </Select>*/}
              <Select defaultValue="快递公司" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="timemore">顺丰</Option>
                    <Option value="time">韵达</Option>
              </Select>
              {/*<Select defaultValue="快递员" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="timemore">张三</Option>
                    <Option value="time">李四</Option>
              </Select>*/}
              <Search placeholder="自定义搜索"  onSearch={value => console.log(value)}  style={{ width: 200 }} />
          </div>
          <Table columns={express} dataSource={this.state.data} />
          
        </div>)
    }
}
export default CertificationAudit