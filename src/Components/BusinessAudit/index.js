import React,{Component} from 'react'
import { Table,Input,Divider ,Icon,Modal,Button, Upload} from 'antd'
import "./index.css"
import axios from 'axios'
import {log} from '../../Comment'
import Qs from 'qs'
const { TextArea } = Input


class BusinessAudit extends Component {
     constructor(){
        super()
        this.state={
          data :[],
          visible:false,
          partner:{},
          contractUrl:'',
          show:true,
          passButton:0,
          unPassButton:0,
          remark:'',
          arr:['item','hide'],
          pic:false,
          pic1:false,
          pic2:false,
          pic3:false,
          pic4:false,
          pic5:false,
        }
        
        this.express=[
         
            { title: 'ID',  dataIndex: 'corpId', align:'center', key: 'corpId', }, 
            { title: '企业名称',   dataIndex: 'corpName',align:'center',  key: 'corpName', },
            { title: '登录手机号',  dataIndex: 'loginPhone',align:'center',  key: 'loginPhone', }, 
            { title: '申请状态',  dataIndex: 'statusMsg', align:'center', key: 'statusMsg', },
          { title: '审核通过时间',  dataIndex: 'passTime', align:'center', key: 'passTime', },
          { title: '操作', key: 'action',align:'center',  render: (text, record,index) =>{
            if(text.status===3){
              return (<span className="action">
                    <Button data-msg={index} onClick={this.pass.bind(this)}>通过</Button>
                    <Divider type="vertical" />
                    <Button data-msg={index} onClick={this.Unpass.bind(this)}>不通过</Button>
                  </span>)
            }else{
              return (<Button data-msg={index} onClick={this.detail.bind(this)}>详情</Button>)
            }
            
          }        
        }]
    }
    pass(e){
       let index=e.target.dataset.msg
       let data=this.state.data[index]
       this.setState({
        visible:true,
        partner:data,
        passButton:1
       })
    }
    Unpass(e){
      let index=e.target.dataset.msg
       let data=this.state.data[index]
       this.setState({
        visible:true,
        partner:data,
        unPassButton:1,
        arr:['item']
       },()=>{
        log(this.state.unPassButton)
       })
       
    }
    detail(e){
      let index=e.target.dataset.msg
       let data=this.state.data[index]
       log('详情',data)
       this.setState({
        visible:true,
        partner:data,
       })
    }
    componentWillMount(){
     let that=this
      axios.post(window.config.host+'/admin/corp/list', Qs.stringify({
        status:3})).then(function (res) {
            log(res.data.data)
            that.setState({
              data:res.data.data
            })
      })
    }
    handleCancel(){
      this.componentWillMount()
      this.setState({
        passButton:0,
        unPassButton:0,
        visible:false,
        arr:['item','hide']
      })
    }
    handleOk(){
      let that=this
      let postmsg={}
      if(this.state.unPassButton){
          postmsg={
            corpId:that.state.partner.corpId,
            status:5,
            remark:that.state.remark
          }
      }else if(this.state.passButton){
        postmsg={
          corpId:that.state.partner.corpId,
          status:4,
        }
      }
      axios.post(window.config.host+'/admin/corp/approve', Qs.stringify(postmsg),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
      }).then(res=>{
          if(res.data.code==200){
            that.componentWillMount() 
            this.setState({
              passButton:0,
              unPassButton:0,
              visible:false,
            })
          }else{
              alert(res.data.message)
          }
        
      })
      
     
    }
    renZheng(e){
      log(e)
    }
    remarkChange(e){
      log(e.target.value)
      this.setState({
        remark:e.target.value
      })
    }
    clickPic(e){
      log(e.target.dataset.id)
      if(e.target.dataset.id==0){
        this.setState({
          pic:!this.state.pic
        }) 
      }else if(e.target.dataset.id==1){
        this.setState({
          pic1:!this.state.pic1
        }) 
      }else if(e.target.dataset.id==2){
        this.setState({
          pic2:!this.state.pic2
        }) 
      }else if(e.target.dataset.id==3){
        this.setState({
          pic3:!this.state.pic3
        }) 
      }else if(e.target.dataset.id==4){
        this.setState({
          pic4:!this.state.pic4
        }) 
      }else if(e.target.dataset.id==5){
        this.setState({
          pic5:!this.state.pic5
        }) 
      }
      
       
    }
    render(){
        return (<div className="express">
          <div className="DetailList">企业审核</div>
          
          <Table  loading={false} columns={this.express} dataSource={this.state.data} />
          <Modal title="企业详情" visible={this.state.visible} okText="确认" cancelText="取消" onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
              <div className='parter-info'>
                <div className='item'>企业名称：{this.state.partner.corpName}</div>
                <div className='item'>登录电话：{this.state.partner.loginPhone}</div>
                <div className='item'>企业地址：{this.state.partner.corpAddress}</div>
                <div className='item'>审核状态：{this.state.partner.statusMessage}</div>
                <div className='item'>{this.state.partner.payWay==1?'联系人':'法人'}姓名：{this.state.partner.legalName}</div>
                <div className='item'>{this.state.partner.payWay==1?'联系人':'法人'}电话：{this.state.partner.legalPhone}</div>
                <div className='item'>结算方式：{this.state.partner.payWay==1?'日结':'月结'}</div>
                <div className='item' style={this.state.partner.payWay==2?{display:'block'}:{display:'none'}}>法人身份证正面：
                   <img alt='' className={this.state.pic?'upload-pic':''} data-id='0' onClick={this.clickPic.bind(this)} src={this.state.partner.idCardUp}/>
                </div>
                <div style={this.state.partner.payWay==2?{display:'block'}:{display:'none'}} className='item'>法人身份证反面：
                   <img alt='' className={this.state.pic1?'upload-pic':''} data-id='1' onClick={this.clickPic.bind(this)} src={this.state.partner.idCardDown}/>
                </div>
                <div className='item'>营业执照：
                   <img alt='' className={this.state.pic2?'upload-pic':''} data-id='2' onClick={this.clickPic.bind(this)} src={this.state.partner.businessLicense}/>
                </div> 
                <div style={this.state.partner.payWay==2?{display:'block'}:{display:'none'}} className='item'>协议图片：
                   <img alt='' className={this.state.pic5?'upload-pic':''} data-id='5' onClick={this.clickPic.bind(this)} src={this.state.partner.bankCardUp}/>
                </div> 
                
                <div className="item" style={this.state.unPassButton?{display:'block'}:{display:'none'}}>
                       不通过原因：<TextArea rows={4} onChange={this.remarkChange.bind(this)}/>
                </div>
                
                <div className="item" style={this.state.partner.status===5?{display:'block'}:{display:'none'}}>
                       不通过原因：{this.state.partner.remark}
                </div>

                
               
            </div>
          </Modal>
        </div>)
    }
}
export default BusinessAudit
