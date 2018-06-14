import React, { Component } from 'react'
import './index.css'
import ExpressDoorUrl from "../../images/company.png"
import { Table,Button} from 'antd'
// import { Select } from 'antd'
// import AddDoor from "../AddDoor"
import {NavLink} from 'react-router-dom'


// const { Column, ColumnGroup } = Table

const data=[{
    key: '1',
    rstName: 'John',
  
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }]

const columns = [{
    title: '机柜ID',
    dataIndex: 'name',
    sorter: true,
    
  }, {
    title: '代理商',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: '绑定快递员',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: '接口账户',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  }, 
  {
    title: '运行状态',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },{
    title: '',
    dataIndex: 'email',
  }]
class ExpressDoor extends Component{
    constructor(){
        super()
        this.state={

        }
    } 
    render(){
        return(<div className="expressdoor">
           <div className="topTitle">
             <img alt='img' src={ExpressDoorUrl}/>
             <span>快递柜管理</span>
           </div>
           <div className="body">
               {/* <div className="search"> */}
                  {/* <h5>查询条件</h5> */}
                  {/* <div> */}
                      {/* <ul>
                          <li>
                             <span>机柜ID:</span> 
                             <Input addonAfter={selectAfter}  defaultValue="不限" />
                          </li>
                          <li>
                             <span>代理商:</span> 
                             <input/>
                          </li>
                          <li>
                             <span>负责人:</span> 
                             <input/>
                          </li>
                          <li>
                             <span>接口账号:</span> 
                             <input/>
                          </li>
                          <li>
                             <span>运行状态:</span> 
                             <input/>
                          </li>
                      </ul> */}
                      {/* <div className="submit">
                            <input  type="button" value="查询"/>
                      </div> */}
                  {/* </div> */}
               {/* </div> */}
               <div className="resut">
                 <Table dataSource={data} columns={columns}></Table>
               </div>
               <NavLink to='/addDoor'>
                  <Button type="primary" value="添加">添加</Button>
               </NavLink>
           </div>
        </div>)
    }
}
export default ExpressDoor