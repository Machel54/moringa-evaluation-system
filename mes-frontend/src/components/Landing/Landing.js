import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Login from '../auth/Login';


class Landing extends Component {

    render() {
        return (
<div>
      <section className="login-block">
    <div className="container">
	<div className="row">
		<div className="col-md-4 login-sec">
		    <h2 className="text-center">Login</h2>
		    <form className="login-form">
  <div className="form-group origins">
    <label for="exampleInputEmail1" className="text-uppercase">Email</label>
    <input type="text" className="form-control" placeholder="example@gmail.com"/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1" className="text-uppercase">Password</label>
    <input type="password" className="form-control" placeholder="......"/>
  </div>
  
  
    <div className="form-check">
    <label className="form-check-label">
      <input type="checkbox" className="form-check-input"/>
      <small>Remember Me</small>
    </label>
    <button type="submit" className="btn btn-login float-right" style={{background: '#ff8900',color: '#fff', fontSize: '13px'}}>Login</button>
  </div>
  
</form>
<div className="copy-text">Created with <i className="fa fa-heart"></i>by Origins</div>
		</div>
		 <div className="col-md-8 banner-sec">
	</div> 
</div>
</div>
      </section>
      </div>
         );
    }
}

export default Landing;

