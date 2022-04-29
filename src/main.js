import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from "./App";
import Reply from "./reply";


const main = () => {
    return (
        <>

            <Routes>
                <Route path="/reply" element={<Reply />} />
                <Route path="/" element={<App />} />

            </Routes>
        </>
    )
}

export default main