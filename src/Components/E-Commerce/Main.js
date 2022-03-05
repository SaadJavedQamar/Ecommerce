import React from 'react'
import Section from '../E-Commerce/Section'
import CardSection from '../E-Commerce/CardSection'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Main() {

        const navigate = useNavigate();

        useEffect(() => {
                if (!localStorage.getItem("SignIn"))
                        navigate('/sign')
        },[])
        return (
                <>
                        <Section />
                        <CardSection />

                </>
        )
}

export default Main;