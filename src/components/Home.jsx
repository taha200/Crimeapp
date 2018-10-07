import React, { Component } from 'react';
import { connect } from "react-redux";
import './Home.css'
import { LogoutAction} from "../store/actions/actions";
import firebase from 'firebase'
class Home extends Component {
    constructor(props){
        super(props)
        this.handleHomeLink = this.handleHomeLink.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleLogin = this.handleLogin.bind(this)

    }
componentWillMount(){
     // Initialize Firebase
  if(!firebase.apps.length){
  var config = {
    apiKey: "AIzaSyCLYgIUDgdXhJjHKAUbDQuSdlUgZzfd3dc",
    authDomain: "crimepract.firebaseapp.com",
    databaseURL: "https://crimepract.firebaseio.com",
    projectId: "crimepract",
    storageBucket: "crimepract.appspot.com",
    messagingSenderId: "711920313008"
  };
  firebase.initializeApp(config);
  }
}
    handleLogout(e){
        e.preventDefault()
        this.props.Logout()
        this.props.history.push('/')
    }
    handleHomeLink(e){
        e.preventDefault()
    }
    handleLogin(e){
        e.preventDefault()
        this.props.history.push('/login')
    }
    googleSignIn()
    {
   const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result)=>{
           var token = result.credential.accessToken;
           var user = result.user;
           console.log(user)
           console.log(token)  
            // this.props.history.push('/cardComponent')
            window.location='http://localhost:3000/cardComponent'
        }).catch(function(error) {
           var errorCode = error.code;
           var errorMessage = error.message;
         console.log(error.code)
           console.log(error.message)
        });
    }
    render() {
        return(
            <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a onClick={this.handleHomeLink} className="navbar-brand"><h3 style={{display:'inline',fontSize:30}}>My APP</h3></a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  {(this.props.isLoggedIn) && <button onClick={this.handleLogout} className="btn btn-danger navbar-btn">LOG OUT</button>}
                  {(!this.props.isLoggedIn) && <button onClick={()=>{this.googleSignIn()}} className="btn btn-info navbar-btn">LOGIN</button>}
                </ul>
              </div>
            </nav>
            <br/><br/><br/>
            <h2>Hello from APP...</h2>
            </div>
        )
        // )
    }
}

function mapStateToProps(state){
    return({
        isLoggedIn:state.rootReducer.isLoggedIn,
        firstName:state.rootReducer.userName,
    })
}

function mapActionsToProps(dispatch){
    return({
        Logout:()=>{
            dispatch(LogoutAction())
        }
    })
}


export default connect(mapStateToProps,mapActionsToProps)(Home);
