import React, { Component } from 'react'
import {Button, Select, Input, } from 'antd'
import axios from 'axios'
import Qs from 'qs'
import './index.css'
const log=console.log.bind(console)
const Option = Select.Option
const host =window.config.host


class AddProperty extends Component {
   constructor(){
       super()
       this.state={
           phone:'',
           name:'',
           company:'',
           address:'',
           scompany:'',
       } 
   }
   componentDidMount(){
     
   }
   AddWuyi(e){
    this.setState({
        company:e.target.value
    })
   }
   addAddress(e){
    this.setState({
        address:e.target.value
    })
   }
   addName(e){
    this.setState({
        name:e.target.value
    })
   }
   addPhone(e){
       this.setState({
           phone:e.target.value
       })
   }
   AddSWuyi(e){
    this.setState({
        scompany:e.target.value
    })
   }
   
   save(){
     let that=this
     let msg={
         fullName:this.state.company,
         shortName:this.state.scompany,
         address:this.state.address,
         contactName:this.state.name,
         contactPhone:this.state.phone
     }
      axios.post(host+'/admin/property/add',Qs.stringify(msg)).then((res)=>{
          if(res.data.code==200){
              alert('添加成功')
              that.setState({
                phone:'',
                name:'',
                company:'',
                address:'',
                scompany:''
              })
              that.componentWillMount()
          }else{
              alert(res.data.message)
          }
      })
   }
   render(){
       return (<div className="content">
           <h4 className="toptitle">添加物业</h4>
           <div className="wrapmsg">
               <div className="item">
                     <div className="subitem">物业全称：<Input className="width140" onInput={this.AddWuyi.bind(this)} placeholder="输入物业全称" /></div> 
               </div>
               <div className="item">
                     <div className="subitem">物业简称：<Input className="width140" onInput={this.AddSWuyi.bind(this)} placeholder="输入物业简称" /></div> 
               </div>
               <div className="item">
                   <div className="subitem">物业地址：<Input className="width140" onInput={this.addAddress.bind(this)} placeholder="输入物业地址" /></div>         
               </div>

               <div className="item">
                   <div className="subitem">联系人：<Input className="width140" onInput={this.addName.bind(this)} placeholder="输入联系人" /></div>         
               </div>

               <div className="item">
                   <div className="subitem">联系人电话：<Input className="width140" onInput={this.addPhone.bind(this)} placeholder="输入手机号" /></div>         
               </div>

               

            </div>   
           <Button type="primary" onClick={this.save.bind(this)} className="save">保存</Button>
       </div>)
   }
}
export default AddProperty