import React from "react"
import NavBar from '../Navbar/Navbar';
import Router from "../../routes/switch";
import Footer from '../Footer/Footer';

function Main() {
    return (
        <React.Fragment>
            <NavBar />
            <Router />
            <Footer />
        </React.Fragment>
    )
}

export default Main;
