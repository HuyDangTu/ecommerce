import React, { Component } from 'react';
import Header from '../components/Header_Footer/Header';
import Footer from '../components/Header_Footer/Footer';
import './layout.scss';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
            <Header/>
                <div className="page_container">
                    {this.props.children}
                </div>
            <Footer/>
            </div>
        );
    }
}

export default Layout;