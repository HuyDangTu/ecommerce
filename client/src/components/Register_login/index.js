import React from 'react';
import Login from './login';
import './login.scss';
import Layout from '../../hoc/layout';

const RegisterLogin = () => {
    return (
        <Layout>
            <div className="login">
                <div className="login__container">
                    <div className="row no-gutters">
                        <div className="col-xl-4 col-lg-3 col-md-3 col-sm-1 col-1 no-gutters"></div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-10 col-10 no-gutters">
                            <div className="right">
                                <Login />
                            </div>  
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-3 col-sm-1 col-1 no-gutters"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterLogin;