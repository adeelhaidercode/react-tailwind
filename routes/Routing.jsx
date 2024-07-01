import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Cookies from 'js-cookie'
import GlobalContext from '../context/GlobalContext'
// import { Api } from '../api'
// import jwtDecode from 'jwt-decode'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout';
function Routing() {
    const token = Cookies.get('token')
    const { setUserInfo, userInfo } = useContext(GlobalContext)
    const [debugMessage, setDebugMessage] = useState('')
    // const getLoggedInUserDetails = async () => {
    //     await Api.profile(token)
    //         .then((response) => {
    //             setUserInfo(response.data.data)
    //         })
    //         .catch((error) => { })
    // }

    // useEffect(() => {
    //     if (token) {
    //         getLoggedInUserDetails()
    //     }
    // }, [])
    // useEffect(() => {
    //     if (token) {
    //         const decoded = jwtDecode(token)
    //         const expDate = new Date(decoded.exp * 1000)
    //         const currentTime = new Date()
    //         if (currentTime > expDate) {
    //             Cookies.remove('token')
    //             Cookies.remove('refresh')
    //         }
    //     }
    // }, [])

    return (
        <>
            {/* <Routes>
                {token && (
                    <>
                        <Route
                            path='/'
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                    </>
                )}
                {!token && (
                    <>
                        <Route path="/" element={<Navbar />} />
                    </>
                )
                }
            </Routes> */}
            <Router>
                <Routes>
                    {token ? (
                        <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
                    ) : (
                        <Route path="/" element={<Home />} />
                    )}
                </Routes>
            </Router>
        </>
    )
}

export default Routing