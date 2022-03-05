import React from 'react'
import { useState } from 'react';
import data from '../E-Commerce/Data'
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

function Header() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("SignIn"))
            navigate('/')
    }, [])

    const [checkdata] = useState(data);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);

    const [cart, setCart] = useState(0);


    const validate = () => {
        const final = search
        const result = final.charAt(0).toUpperCase() + final.slice(1).toLowerCase();

        try {

            for (let i = 0; i <= checkdata.length; i++) {
                if (checkdata[i].title === result) {
                    console.log("data", checkdata[i])
                    let searchSetList = localStorage.setItem('Items', JSON.stringify(checkdata[i]))
                    console.log("searchSetList", JSON.stringify(searchSetList))
                    setShow(false)
                    navigate('/Cart')
                    break;
                }

            }
            setSearch('')


        }
        catch (error) {
            if (!localStorage.getItem("SignIn")) {
                navigate('/login')
            }

            else {
                localStorage.removeItem("items") && navigate('/login')

                setShow(true)
            }
            setSearch('')
        }
    }

    const Submit = () => {
        validate();
    }

    const signOut = () => {
        localStorage.removeItem("SignIn");
    }

    // const  cc = localStorage.getItem("CartSelect")
    // const dd = parseInt(cc);
    // console.log(dd)
    // setCart(dd)
    // console.log("saad",dd+1)
    // const dd = 

//     if(dd < 1){
//         dd+1;
// }


    return (
        <>
            <div className='Header'>
                <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="a">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mt-3  mb-lg-0">
                                <li className="nav-item me-3">
                                    <Link to='/Home'><p className="nav-link " aria-current="page" >Home</p></Link>
                                </li>

                            </ul>

                            <input className="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                            <button className="btn btn-primary" onClick={Submit}><i className="fa fa-search" aria-hidden="true"></i></button>

                            {show ?
                                <Alert className='ms-2' severity='error' >Please Search the Correct Item</Alert>
                                : ""}
                            {
                                localStorage.getItem("SignIn") ?
                                    <Link to='/Sign'><i onClick={signOut} className="fa fa-sign-out fs-3 p-3 " aria-hidden="true"></i></Link>
                                    :
                                    <Link to='/Sign'><i className="fa fa-sign-in fs-3 p-3" aria-hidden="true"></i></Link>
                            }
                                    <i className="fa fa-cart-plus fs-4 cart " aria-hidden="true"></i>
                                    <p className='cart-sign'>{cart}</p>
                        </div>
                    </div>
                </nav>
            </div>


        </>
    )
}

export default Header