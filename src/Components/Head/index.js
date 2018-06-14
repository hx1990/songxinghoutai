import React, { Component } from 'react';
import "./index.css"
import logoUrl from '../../images/logo.png'
import loginUrl from '../../images/login.png'
import logoutUrl from '../../images/logout.png'
class Head extends Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(<div className="head">
           <div className="left">
             <img alt='img' src={logoUrl}/>
             <span className="ltitle1">宋信系统管理</span>
             <span className="rtitle">Songxin information management system</span>
           </div> 
           <div className="right">
               <a href="" className="login">
                  <img alt='img' src={loginUrl} />
                  <span>欢迎登陆系统</span>
               </a>
               <a href="" className="logout">
                  <img alt='img' src={logoutUrl} />
                  <span>退出登录</span>
               </a>
           </div>
        </div>)
    }
}
export default Head