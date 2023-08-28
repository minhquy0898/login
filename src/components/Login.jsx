import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home'

const Login = () => {

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");


        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("Empty");
        } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }



    return (
        <div>

            {home ? (
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div className='form-group mg-b-14'>
                        <label className='mg-b-10'>Email</label>
                        <input
                            type="email"
                            className='form-control'
                            placeholder='Enter full email'
                            onChange={(event) => setEmaillog(event.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='mg-b-10'>Password</label>
                        <input
                            type="password"
                            className='form-control mg-b-14'
                            placeholder='Enter full password'
                            onChange={(event) => setPasswordlog(event.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>
                    {flag && (
                        <Alert color="primary" variant='danger' >
                            Please fill correct info
                        </Alert>
                    )}
                </form>
            ) : (

                <Home />
            )}
        </div>
    )
}

export default Login
