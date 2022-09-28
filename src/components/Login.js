import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import svg from '../asset/login.svg'
import firebase from 'firebase/app'
import { auth } from '../firebase'

function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <div className='flex'>
          <img className='svg' src={svg} alt='svg' />
          <div className='button'>
            <h2 className='title'>
              Welcome to KA<span>USAP</span>
            </h2>
            <div
              className='login-button google'
              onClick={() =>
                auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
              }
            >
              <GoogleOutlined /> Sign In with Google
            </div>
            <br />
            <div
              className='login-button facebook'
              onClick={() =>
                auth.signInWithRedirect(
                  new firebase.auth.FacebookAuthProvider()
                )
              }
            >
              <FacebookOutlined /> Sign In with Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
