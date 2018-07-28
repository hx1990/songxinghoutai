import React,{Component} from 'react'
import { Table,Select} from 'antd'
import "./index.css"
import axios from 'axios'
import {log} from '../../Comment'
import Qs from 'qs'


const Option=Select.Option


class BusinessList extends Component {
     constructor(){
        super()
        this.state={
         
        }
        
        this.express=[
          { title: 'ID',  dataIndex: 'corpId', align:'center', key: 'corpId', }, 
          { title: '企业名称',   dataIndex: 'corpName',align:'center',  key: 'corpName', },
          { title: '登录手机号',  dataIndex: 'loginPhone',align:'center',  key: 'loginPhone', }, 
          { title: '申请状态',  dataIndex: 'statusMsg', align:'center', key: 'statusMsg', },
          
        ]
    }
    componentWillMount(){
     let that=this
      axios.post(window.config.host+'/admin/corp/list', Qs.stringify({
       })).then(function (res) {
            log(res.data.data)
            that.setState({
              data:res.data.data
            })
      })
    }
   
   
    renZheng(e){
      log(e)
      let that=this
      axios.post(window.config.host+'/admin/corp/list', Qs.stringify({status:Number(e)
       })).then(function (res) {
            log(res.data.data)
            that.setState({
              data:res.data.data
            })
      })
    }
    
    render(){
        return (<div className="express">
          <div className="DetailList">企业列表</div>
           <div className="shaxuan">
              <Select defaultValue="按审核状态" style={{ width: 120 }} onSelect={this.renZheng.bind(this)}>
                    <Option value="1">注册</Option>
                    <Option value="2">待提交月结协议</Option>
                    <Option value="3">待审核</Option>
                    <Option value="4">通过审核</Option>
              </Select>
              
          </div> 
          <Table  loading={false} columns={this.express} dataSource={this.state.data} />
        </div>)
    }
}
export default BusinessList
