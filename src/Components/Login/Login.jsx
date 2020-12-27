import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"

function Login() {

    const signin = () => {
        console.log("yep we are here now")
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt="fblogo"/>
                <img src="https://www.freeiconspng.com/uploads/facebook-text-transparent-logo-23.png" alt="fbtext"/>
            </div>
            <Button type="submit" onClick={signin} >Sign In</Button>
        </div>
    )
}

export default Login
