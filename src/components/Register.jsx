import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from './Login';
const Register = ({ onRegister }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email))
            localStorage.setItem("Password", JSON.stringify(password))

            console.log("Save in local Storage")
            setLogin(!login);

        }
    }

    function handleClick() {
        setLogin(!login);
    }

    const handleRegister = () => {
        if (!email.includes('@')) {
            setError('Email không hợp lệ');
        } else if (localStorage.getItem(email)) {
            setError('Email đã tồn tại');
        } else if (password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự');
        } else {
            localStorage.setItem(email, password);
            onRegister();
        }
    }


    return (
        <div className='p-4'>

            {login ? (
                <form onSubmit={handleSubmit}>
                    <h1 className='register_title'>Register</h1>
                    <div className='form-group mg-b-14 '>
                        <label className='mg-b-10 '>Name</label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Enter full name'
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className='form-group mg-b-14 '>
                        <label className='mg-b-10 '>Email</label>
                        <input
                            type="email"
                            className='form-control'
                            placeholder='Enter full email'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className='form-group mg-b-14 '>
                        <label className='mg-b-10 '>Password</label>
                        <input
                            type="password"
                            className='form-control'
                            placeholder='Enter full password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-dark btn-lg btn-block'>Register</button>

                    <p className='forgot-password text-right' onClick={handleClick}>Already Regiter {" "} login in ?</p>


                    {flag && (
                        <Alert color="primary" variant='danger' >
                            Please fill every fiel
                        </Alert>
                    )}
                </form>

            ) : (
                <Login />
            )}
        </div>
    )
}

export default Register
