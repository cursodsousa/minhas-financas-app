import React from 'react'
import Navbar from '../components/navbar'

export default ({children, autenticado}) => {
    return (
        <>
            <Navbar autenticado={autenticado} />
            <div className="container">
                {children}
            </div>
        </>
    )
}