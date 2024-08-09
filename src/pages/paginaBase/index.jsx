import React from 'react';
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import { Outlet } from "react-router-dom";
import "./paginaBase.css"


function PaginaBase() {
    
    return (
        <div className="main-wrapper">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer className="footer" />
        </div>
    );
}

export default PaginaBase;