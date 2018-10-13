import React, { Component } from 'react'
import Navbar from './Navbar'
import { insertComplaint } from "../store/actions/actions";
import { connect } from "react-redux";
class Complain extends Component {
  constructor(props){
    super(props)
    this.initialState={
      name:'',
      NIC:0,
      contact:'',
      address:'',
      city:'',
      victim:'',
      description:'',
      typeOfCrime:'default',
      title:'',
      status:'pending'
    }
    this.state={
      ...this.initialState
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.insertComplaint(this.state)
    this.setState({
      ...this.initialState
    })
  
    
  }
  handleRemove(e){
    e.preventDefault()
    console.log(e.target.id)
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history} /><br /><br /><br /><br />
        <div className='container' style={{ marginTop: 15 }}>
          <div className="row">
            <div className="col-md-6 card" style={{ padding: 20 }}>
              <h2 className='text-center'>COMPLAIN</h2>
              <form className="form-horizontal" onSubmit={e => e.preventDefault()} method='post'>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="title">Complain Title:</label>
                  <div className="col-sm-10">
                    <input onChange={this.handleChange} value={this.state.title} type="text" autoComplete='off' autoFocus={true} className="form-control" id="title" placeholder="Complain Title" name="title" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="name">YOUR NAME:</label>
                  <div className="col-sm-10">
                    <input onChange={this.handleChange} value={this.state.name} type="text" autoComplete='off' className="form-control" id="name" placeholder="Your Name" name="name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="NIC">NIC#</label>
                  <div className="col-sm-10">
                    <input onChange={this.handleChange} value={this.state.NIC} type="number" minLength={13} min='1000000000000' max={9999999999999} maxLength={13} className="form-control" id="pwd" placeholder="Enter Your NIC#" name="NIC" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="address">Address</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.address} autoComplete='off' className="form-control" id="name" placeholder="Enter Address" name="address" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="city">City</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.city} autoComplete='off' className="form-control" id="name" placeholder="Enter City" name="city" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="victim">Victim Name</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.victim} autoComplete='off' className="form-control" id="name" placeholder="Enter Victim Name" name="victim" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="contact">Contact Number</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.contact} autoComplete='off' className="form-control" id="name" placeholder="Contact#" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="typeOfCrime">Type Of Crime</label>
                  <div className="col-sm-10">
                    <select onChange={this.handleChange} name='typeOfCrime' className='form-control'>
                      <option value="default">** Select Complain Type **</option>
                      <option value="Road Rage">Road Rage</option>
                      <option value="Mentally torute">Mentally torute</option>
                      <option value="Physically torute">Physically torute</option>
                      <option value="Blackguardism">Blackguardism</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="description">Description</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" rows="5" value={this.state.description} onChange={this.handleChange} style={{ resize: 'none' }} name='description' placeholder='Description of Complain'></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit</button>
                  </div>
                </div>
              
              </form>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
            <ul className="list-group">
            {this.props.Complains.map((complain,index)=>{
              return  <div 
              key={index}>
                 <li
               className='list-group-item list-group-item-info'>
               <a href="#" onClick={e=>e.preventDefault()}>{complain.title}</a>
               <span className='pull-right'>
               <button id={index} onClick={this.handleRemove} className='btn btn-xs btn-danger'> Delete</button>
               </span>
               </li><br/>
              </div>
            })}
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return({
      isLoggedIn:state.rootReducer.isLoggedIn,
      Complains:state.rootReducer.complains
  })
}

function mapActionsToProps(dispatch){
  return({
    insertComplaint:(comp)=>{
        dispatch(insertComplaint(comp))
      }
  })
}
export default connect(mapStateToProps,mapActionsToProps)(Complain)