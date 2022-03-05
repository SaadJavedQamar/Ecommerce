import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';


function Login() {

    const navigate = useNavigate();

    const [Toggle, setToggle] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [login, setLogin] = useState('')
    const [status, setStatus] = useState(true)


  


    useEffect(() => {
        if (localStorage.getItem("SignIn"))
            navigate('/home')
    }, [])


    const LoginInValidation = () => {

        var LoginInItems = localStorage.getItem("LoginIn")
        var LoginInData = JSON.parse(LoginInItems);

        for (let i = 0; i <= LoginInData.length; i++) {

            if (email === LoginInData[i].email && password === LoginInData[i].password) {
                navigate('/home')
                localStorage.setItem("SignIn", true)
                setStatus(true)


                // setInterval(() => {
                // }, 2000);

                break;
            }
            else {
                // alert("error")
                setPassword("")
                setEmail("")
                setStatus(false)
                break;
            }
        }



    }

    const SignInValidation = () => {

        if (email === "") {
            return alert("Error")
        }
        const data = { email, password, name, phone };
        setLogin((preval) => {
            localStorage.setItem("LoginIn", JSON.stringify([...preval, data]))
            return [...preval, data]
        });
        setPassword("")
        setEmail("")
        setName("")
        setPhone("")
        setToggle(true)
        navigate('/home')

    }
    return (
        <>
            {Toggle ? <div className='container'>
                <div className='container-wrapper'>
                    <div className='container-inner-wrapper'>
                        <h1>LOGIN</h1>
                        <input className="form-control form-one w-100" type="email" placeholder="Enter Email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                            
                        <input className="form-control form-one  w-100" type="password" placeholder="Enter Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                            {
                            status ? "" : <Alert className='mt-3' severity='error' >Error Occured</Alert>
                        }
                        <button className="btn btn-primary btn-input" onClick={LoginInValidation}>Login Now</button>
                                                
                        <div className='div-toggle'>
                            <Link to="/Sign"><p className="w-100 d-inline ">Need an Account ?</p> <span className='span-toggle' onClick={() => setToggle(false)} >SIGN UP</span></Link>
                        </div>
                    </div>
                </div>
            </div>

                :


                <div className='container'>
                    <div className='container-wrapper'>
                        <div className='container-inner-wrapper'>
                            <h1>SIGN IN</h1>
                            <input className="form-control form-one w-100" type="name" placeholder="Enter Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                            <input className="form-control form-one  w-100" type="text" placeholder="Enter Cell Number"
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                            <input className="form-control form-one w-100" type="email" placeholder="Enter Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className="form-control form-one  w-100" type="password" placeholder="Enter Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Link to="/Login"><button className="btn btn-primary btn-input" onClick={SignInValidation}>Sign Up Now</button></Link>
                            {/* <Alert severity='error'>Saad</Alert> */}

                            <div className='div-toggle'>
                                <Link to="/Login"><p className="w-100 d-inline">Already a User ?</p> <span className='span-toggle' onClick={() => setToggle(true)} >LOGIN</span></Link>
                            </div>
                        </div>
                    </div>
                </div>}


            {/* <SimpleSnackbar clickMe={handleClick} /> */}


        </>
    )
}




export default Login