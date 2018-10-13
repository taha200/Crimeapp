import React, { Component } from 'react'
import Navbar from './Navbar'
import { insertComplaint, insertMissingPerson } from "../store/actions/actions";
import { connect } from "react-redux";
import firebase from 'firebase';
class Missing extends Component {
  constructor(props){
    super(props)
    this.initialState={
      name:'',
      NIC:0,
      title:'',
      contact:'',
      address:'',
      city:'',
      missingpersonname:'',
      missingpersonheight:'',
      anyotherIdentification:'',
      relationwiththeperson:'',
      contactiffound:'',
      placeofmissing:''
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
  storageFirebase(e){
      const file = e.target.files[0]
 const storageRef=firebase.storage().ref('missing_persons/'+file.name);
 console.log(file.name)
 storageRef.put(file)
}
  handleSubmit(e){
    e.preventDefault()
    this.props.insertMissingPerson(this.state)
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
              <h2 className='text-center'>MISSING PERSON ENTRY</h2>
              <form className="form-horizontal" onSubmit={e => e.preventDefault()} method='post'>
              <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="title">Missing Title:</label>
                  <div className="col-sm-10">
                    <input onChange={this.handleChange} value={this.state.title} type="text" autoComplete='off' autoFocus={true} className="form-control" id="title" placeholder="Missing Title" name="title" />
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
                  <label className="control-label col-sm-2" htmlFor="missingpersonname">Missing Person Name</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.missingpersonname} autoComplete='off' className="form-control" id="name" placeholder="Missing Person Name" name="victim" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="contact">Contact Number</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.contact} autoComplete='off' className="form-control" id="name" placeholder="Contact#" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="missingpersonheight">Missing Person Height (in cm)</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.missingpersonheight} autoComplete='off' className="form-control" id="name" placeholder="Missing Person Height (in cm)" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="anyotherIdentification">Any Other Identification</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.anyotherIdentification} autoComplete='off' className="form-control" id="name" placeholder="Any Other Identification" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="relationwiththeperson">Relation with the person</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.relationwiththeperson} autoComplete='off' className="form-control" id="name" placeholder="Relation with the person" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="contactiffound">Contact If Found</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.contactiffound} autoComplete='off' className="form-control" id="name" placeholder="Contact If Found" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="placeofmissing">Place of missing</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={this.handleChange} value={this.state.placeofmissing} autoComplete='off' className="form-control" id="name" placeholder="Place of missing" name="contact" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                  <label htmlFor="Upload">Upload Pic Of missing person</label>
                  <input type="file" onChange={(e)=>this.storageFirebase(e)}
               accept="image/png, image/jpeg"/>
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
            {this.props.missingPersons.map((missPerson,index)=>{
              return  <div 
              key={index}>
                 <li
               className='list-group-item list-group-item-info'>
               <a href="#" onClick={e=>e.preventDefault()}>{missPerson.title}</a>
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
      missingPersons:state.rootReducer.missingPersons
  })
}

function mapActionsToProps(dispatch){
  return({
    insertMissingPerson:(missPerson)=>{
        dispatch(insertMissingPerson(missPerson))
      }
  })
}
export default connect(mapStateToProps,mapActionsToProps)(Missing)