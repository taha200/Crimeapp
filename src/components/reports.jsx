import React, { Component } from 'react'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import Complain from './Complain'
import Crimereport from './Crimereport'
import Missing from './Missing'
export default class CardComponent extends Component {
    GotoComplain(e){
        e.preventDefault()
        this.props.history.push('/complain')
    }
    GotoMissing(e){
        e.preventDefault()
        this.props.history.push('/missing')
    }
    GotoCrimeReport(e){
        e.preventDefault()
        this.props.history.push('/crimereport')
    }
  render() {
    return (
        <div className="container">
        <div className="jumbotron">
        <div className="row">
        <div className="col-md-3 crd">
        <Card>
          <CardImage className="img-fluid crdimg" src='https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_960_720.jpg' />
          <CardBody>
            <CardTitle>ijfsdj</CardTitle>
            <CardText>ljdkl</CardText>
            <Button onClick={e=>this.GotoComplain(e)}>Login to Enroll</Button>
          </CardBody>
        </Card>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3 crd">
        <Card>
          <CardImage className="img-fluid crdimg" src='https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_960_720.jpg' />
          <CardBody>
            <CardTitle>ijfsdj</CardTitle>
            <CardText>ljdkl</CardText>
            <Button onClick={e=>this.GotoMissing(e)}>Login to Enroll</Button>
          </CardBody>
        </Card>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3 crd">
        <Card>
          <CardImage className="img-fluid crdimg" src='https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_960_720.jpg' />
          <CardBody>
            <CardTitle>ijfsdj</CardTitle>
            <CardText>ljdkl</CardText>
            <Button onClick={e=>this.GotoCrimeReport(e)}>Login to Enroll</Button>
          </CardBody>
        </Card>
        </div>
        </div>
        </div>
        </div>
            
    )
  }
}
