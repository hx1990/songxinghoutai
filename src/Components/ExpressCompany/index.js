import React, { Component } from 'react'
import { Tabs,Table } from 'antd'
import "./index.css"
const TabPane = Tabs.TabPane;
const columns = [
    { title: '序号', dataIndex: 'number',  key: 'number', render: text => <a href="/home">{text}</a>, }, 
    { title: 'ID',  dataIndex: 'ID',  key: 'ID', }, 
    { title: '快递公司',  dataIndex: 'company',  key: 'company', }, 
    { title: '所属片区',  dataIndex: 'area',  key: 'area', }, 
    { title: '法人',  dataIndex: 'corporation',  key: 'corporation', }, 
    { title: '联系人',  dataIndex: 'concat',  key: 'concat', },
    { title: '手机',  dataIndex: 'phone',  key: 'phone', },
    { title: '固话',   dataIndex: 'gphone',  key: 'gphone', },
    { title: '快递接口账号',  dataIndex: 'apinumber',  key: 'apinumber', },
    { title: '接口密码',  dataIndex: 'passward',  key: 'passward', },
    { title: '购买单号数量',  dataIndex: 'paynumber',  key: 'paymumber', },
    { title: '剩余单号数量',  dataIndex: 'surplus',  key: 'surplus', },
    { title: '合同图片',  dataIndex: 'pic',  key: 'pic', },
    { title: '备注',  dataIndex: 'remark',  key: 'remark', },
    { title: '操作', key: 'action',  render: (text, record) => (
      <span>
          <a href="javaScript">编辑</a>
          <a href="javaScript">删除</a>
      </span>
    ),
  }];
  
  const data = [{
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
  }];
  
  
function callback(key) {
  console.log(key);
}

class ExpressCompany extends Component{
    constructor(){
        super()
        this.state={
          
        }
    }
    render(){
       return (
        <div className="expressCompany">
        <div>快递公司管理</div>
      <Tabs className="tablist" defaultActiveKey="1" onChange={callback}>
             <TabPane tab="按快递公司" key="1"><Table columns={columns} dataSource={data} /></TabPane>
             <TabPane tab="片区" key="2"><Table columns={columns} dataSource={data} /></TabPane>
             <TabPane tab="自定义搜索" key="6"><Table columns={columns} dataSource={data} /></TabPane>
        </Tabs>
    </div> 
       )
    }
}

export default ExpressCompany