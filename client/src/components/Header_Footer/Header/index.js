import React, { Component } from 'react';
import './header.scss'
import Layout from '../../../hoc/layout';
import { Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../../actions/user_action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faCartPlus from '@fortawesome/fontawesome-free-solid/faCartPlus';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt';
import faLeaf from '@fortawesome/fontawesome-free-solid/faLeaf';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import Search from '../../Search/index';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import { normalizeUnits } from 'moment';

class Header extends Component {
    state = {
        toggle: false,
        page:[
            {
                name:'Home',
                linkTo:'/',
                public: true
            },
            {
                name: 'Shop',
                linkTo: '/shop',
                public: true
            },
            {
                name: 'About',
                linkTo: '/about',
                public: true
            },
            {
                name: 'Contact',
                linkTo: '/contact',
                public: true
            },
        ],
        user:[
            {
                name: 'My Cart',
                linkTo: '/users/cart',
                public: false
            },
            {
                name:'My Account',
                linkTo: '/users/transaction',
                public: false
            },
            {
                name: 'Log in',
                linkTo: '/register_login',
                public: true
            },
            {
                name: 'Log out',
                linkTo: '/users/logout',
                public: false
            }
        ]
    }

    logoutHandler = () =>{
        this.props.dispatch(logoutUser())
        .then(response => {
            if(response.payload.success){
                this.props.history.push('/')
            }
        })
    }

    defaultLink = (item,i) =>{
        if(item.name === 'Log out'){
            return(
                <div>
                    <Link className="logout_btn" to={item.linkTo} key={i}
                    onClick={() => this.logoutHandler()}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> 
                        <p>{item.name}</p>
                    </Link>
                </div>)
        } else if (item.name === 'My Account'){
            return (
                <div>
                    <Link to={item.linkTo} key={i}>
                        <FontAwesomeIcon icon={faUser} /> 
                        <p className="label">My Account</p>
                    </Link>
                </div>)
        } if (item.name === 'Log in'){
            return (
                <div>
                    <Link className="login_btn" to={item.linkTo} key={i}>
                        <FontAwesomeIcon icon={faSignInAlt} /> 
                        <p>{item.name}</p>
                    </Link>
                </div>
            )
        }else{
            return <Link to={item.linkTo} key={i}>{item.name}</Link>
        }
    }

    cartLink = (item,i) =>{
        const  user = this.props.user.userData
        return (
            <div className="cart" key={i}>
                <Link to={item.linkTo} key={i}>
                    <FontAwesomeIcon icon={faCartPlus} /><p className="label" >My Cart</p>
                </Link>
                <div className="cart_number"><div className="number">{user.cart ? user.cart.length : 0}</div></div>
            </div>
        )
    }

    showLinks = (type) =>{
        let list = [];

        if(this.props.user.userData){
            type.forEach((item)=>{
                if(!this.props.user.userData.isAuth){
                    if(item.public === true){
                        list.push(item)
                    } 
                }else{
                    if(item.name!=='Log in'){
                        list.push(item)
                    }
                }
            })
        }

        return list.map((item,i) => {
            if(item.name !== 'My Cart'){
                return this.defaultLink(item,i)
            }else{
                return this.cartLink(item, i)
            }
        })
    }

    render() {
        return (
            <header className="header">    
                <div className="header__container container-fluid"> 
                    <div className="row no-gutters">
                        <div className="col-xl-2 col-lg-2 col-md-2 no-gutters">
                            <div to="/" className="header__logo" >
                                <div className="toggleBtn" onClick={() => { this.setState({ toggle: true }) }}><FontAwesomeIcon size="2x" icon={faBars} /></div>
                                <Link className="logo" to={'/'}><FontAwesomeIcon icon={faLeaf} />Plant</Link>
                                <div className="cartBtn"><Link to={'/users/cart'}><FontAwesomeIcon size="2x" icon={faCartPlus} /></Link></div>
                               
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8  no-gutters">
                            <Search/>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2  no-gutters">
                            <div className="cartButton"><Link to={'/users/cart'}><FontAwesomeIcon icon={faCartPlus}/></Link></div>
                        </div>
                    </div>
                    <div className="header_row2">
                        <div className="row no-gutters">
                            <div className="col-xl-4  col-lg-4 col-md-3  no-gutters"></div>
                            <div className="col-xl-4  col-lg-4 col-md-6  no-gutters">
                                <div className="header__nav-page">
                                    {this.showLinks(this.state.page)}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-3 no-gutters">
                                <div className="header__nav-user">
                                    {this.showLinks(this.state.user)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`menu d-lg-none d-xl-none ${this.state.toggle ? "toggle_active" : "toggle_disable"}`}>
                    <div className="close_button">
                        <div className="button_wrapper" onClick={()=>{this.setState({toggle: false})}}>close</div>
                    </div>
                    <div className="menu_user">
                        {this.showLinks(this.state.user)}
                    </div>
                    <div className="menu_page">
                        {this.showLinks(this.state.page)}
                    </div>
                </div>
            </header>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps)(withRouter(Header));