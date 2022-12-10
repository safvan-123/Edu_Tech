import {  Suspense, useEffect } from 'react';

/// Components
import Index from "./jsx";
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
// action
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { myRoutes } from './routes';


function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
    }, [dispatch, props.history]);

    const isAuthenticated = localStorage.getItem("access") ? true : false

    if (isAuthenticated) {
        return (
            <>
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Index />
                </Suspense>
            </>
        );

    } else {
        return (
            <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Switch>
                        {myRoutes?.map((route, key) => (
                            <Route path={route?.path} component={route?.component} />))}


                        {isAuthenticated === false && <Redirect
                            to={{ pathname: "/login", state: { from: props.location } }}
                        />}
                    </Switch>



                </Suspense>
            </div>
        );
    }
};

export default withRouter((App));

