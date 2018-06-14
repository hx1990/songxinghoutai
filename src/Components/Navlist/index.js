import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
import createHistory from 'history/createHashHistory'

import "./index.css"

//引入icon图片
import userUrl from "../../images/user.png"
import ExpressUrl from "../../images/express.png"
import ExpressDoorUrl from "../../images/company.png"
import companyUrl from "../../images/company.png"
import mailUrl from "../../images/mail.png"
import agentUrl from "../../images/agent.png"
import accountUrl from "../../images/account.png"
import authorityUrl from "../../images/authority.png"
import SetingUrl from "../../images/set.png"

//引入组件
import Account from "../Account"
import AccountSet from "../AccountSet"
import Agent from "../Agent"
import Authority from "../Authority"
import Express from "../Express"
import ExpressCompany from "../ExpressCompany"
import ExpressDoor from "../EXpressDoor"
import Mail from "../Mail"
import UserInfo from "../UserInfo"
import UserDetail from "../UserDetail"
import AddDoor from "../AddDoor"
import CertificationAudit from "../CertificationAudit"
// import Home from "../Home"
import GovernmentSystem from '../GovernmentSystem'
import ExpressCost from '../ExpressCost'
import RunningWater from '../RunningWater'
import IncomeList from '../IncomeList'
import WithdrawalList from '../WithdrawalList'
import DivideInto from '../DivideInto'
import DistributionWithMoeny from '../DistributionWithMoeny'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const history = createHistory()
// const location='localhost:3000/'
class Navlist extends Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return(<div className="nav">
            <Router history={history}> 
                <div className="routerWrap" > 
                    <ul className="linkList"> 
                        <li>
                            <NavLink activeClassName="activeRoute" to="/userInfo">
                              <img alt='img' src={userUrl}/>
                              <span>用户管理</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeRoute" to="/express">
                              <img alt='img' src={ExpressUrl}/>
                              <span>快递管理</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeRoute" to="/expressDoor">
                               <img alt='img' src={ExpressDoorUrl}/>
                               <span >快递柜管理</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="activeRoute" to="/company">
                               <img alt='img' src={companyUrl}/>
                               <span>快递公司管理</span>
                            </NavLink>
                        </li>
                        <li>
                            <Menu onClick={this.handleClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" >
                                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>审核认证</span></span>}>
                                    <NavLink activeClassName="activeRoute" to="/certificationAudit">
                                    <Menu.Item key="5" className="subtitle">快递员审核</Menu.Item>
                                    </NavLink>
                                    {/*<NavLink activeClassName="activeRoute" to="/certificationAudit">*/}
                                    <Menu.Item key="6" className="subtitle">代理商审核</Menu.Item>
                                    {/*</NavLink>*/}
                                </SubMenu>
                            </Menu>
                        </li>
                        <li>
                            <NavLink activeClassName="activeRoute" to="/expressCost">
                               <img alt='img' src={companyUrl}/>
                               <span>快递资费管理</span>
                            </NavLink>
                        </li>
                        <li>
                            {/*<NavLink activeClassName="activeRoute" to="/account">
                                <img alt='img' src={accountUrl}/>
                                <span>资费结算</span>
                            </NavLink>*/}
                            <Menu onClick={this.handleClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" >
                                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>资费结算</span></span>}>
                                    <NavLink activeClassName="activeRoute" to="/runningWater">
                                    <Menu.Item key="5" className="subtitle">流水表</Menu.Item>
                                    </NavLink>
                                    {/*<NavLink activeClassName="activeRoute" to="/certificationAudit">*/}
                                       {/*<Menu.Item key="6" className="subtitle">结算人</Menu.Item>*/}
                                       <SubMenu key="sub3" title="结算人">
                                           
                                            <Menu.Item className="subtitle" key="7">
                                                <NavLink activeClassName="activeRoute" to="/incomeList">收入清单</NavLink>
                                            </Menu.Item>
                                           
                                            <Menu.Item className="subtitle" key="8">
                                                <NavLink activeClassName="activeRoute" to="/withdrawalList">提现清单</NavLink>
                                            </Menu.Item>
                                        </SubMenu>
                                    {/*</NavLink>*/}
                                    {/*<NavLink activeClassName="activeRoute" to="/certificationAudit">*/}
                                       {/*<Menu.Item key="6" className="subtitle">代理商</Menu.Item>*/}
                                       <SubMenu key="sub4" title="代理商">
                                            <Menu.Item className="subtitle" key="9">
                                                <NavLink activeClassName="activeRoute" to="/divideInto">流水分成</NavLink>
                                            </Menu.Item>
                                            <Menu.Item className="subtitle" key="1">
                                                <NavLink activeClassName="activeRoute" to="/withdrawalList">提现清单</NavLink>
                                            </Menu.Item>
                                            {/*<Menu.Item className="subtitle" key="1">提现清单</Menu.Item>*/}
                                        </SubMenu>
                                    {/*</NavLink>*/}
                                    <NavLink activeClassName="activeRoute" to="/distributionWithMoeny">
                                       <Menu.Item key="6" className="subtitle">资费清分表</Menu.Item>
                                    </NavLink>
                                    {/*<NavLink activeClassName="activeRoute" to="/certificationAudit">*/}
                                       <Menu.Item key="4" className="subtitle">报价单</Menu.Item>
                                    {/*</NavLink>*/}
                                </SubMenu>
                            </Menu>
                        </li> 
                        <li>
                            <NavLink activeClassName="activeRoute" to="/governmentSystem">
                                <img alt='img' src={agentUrl}/>
                                <span>政务系统</span>
                            </NavLink>
                        </li> 
                        <li>
                            <NavLink activeClassName="activeRoute" to="/agent">
                                <img alt='img' src={agentUrl}/>
                                <span>代理商管理</span>
                            </NavLink>
                        </li> 
                        <li>
                            <NavLink activeClassName="activeRoute" to="/mail">
                                <img alt='img' src={mailUrl}/>
                                <span>邮件管理</span>
                            </NavLink>
                        </li> 
                        
                        <li>
                            <NavLink activeClassName="activeRoute" to="/authority">
                                <img alt='img' src={authorityUrl}/>
                                <span>权限管理</span>
                            </NavLink>
                        </li> 
                        <li>
                            <NavLink activeClassName="activeRoute" to="/accountSet">
                                <img alt='img' src={SetingUrl}/>
                                <span>账户设置</span>
                            </NavLink>
                        </li> 
                    </ul> 
                    <Route path="/" exact component={UserInfo}/>
                    <Route path="/userInfo" component={UserInfo}/> 
                    <Route path="/account" component={Account}/> 
                    <Route path="/authority" component={Authority}/>
                    <Route path="/agent" component={Agent}/>
                    <Route path="/mail" component={Mail}/>
                    <Route path="/express" component={Express}/>
                    <Route path="/expressDoor" component={ExpressDoor}/>
                    <Route path="/accountSet" component={AccountSet}/>
                    <Route path="/company" component={ExpressCompany}/>
                    <Route path="/userDetail" component={UserDetail}/>
                    <Route path="/addDoor/" component={AddDoor}/>
                    <Route path='/certificationAudit' component={CertificationAudit} />
                    {/*<Route   path="/addDoor/" component={AddDoor}/>*/}
                    <Route path="/governmentSystem" component={GovernmentSystem}/>
                    <Route path="/expressCost" component={ExpressCost}/>
                    <Route path="/runningWater" component={RunningWater}/>
                    <Route path="/incomeList" component={IncomeList}/>
                    <Route path="/withdrawalList" component={WithdrawalList}/>
                    <Route path="/distributionWithMoeny" component={DistributionWithMoeny}/>
                    <Route path="/divideInto" component={DivideInto}/>
                </div>
            </Router>
        </div>)
    }
}

export default Navlist