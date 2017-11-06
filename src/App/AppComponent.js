import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from 'react-router-dom';
import Auth from '../Auth/Login/LoginComponent';
import User from '../User/UserComponent';
import './styles.css';

export default class AppComponent extends Component {
    static propTypes = {
        load: PropTypes.func,
        user: PropTypes.object,
        loading: PropTypes.bool
    };

    componentDidMount () {
        console.log('this.props', this.props);
    }

    render () {
        const {user, loading} = this.props;
        return (
            <div className="container-fluid">
                {
                    loading
                        ? <h1>loading</h1>
                        : <Switch>
                            <Route exact path="/" render={() => <Redirect to={user ? "/user" : "/auth"}/>}/>
                            <Route path="/user" render={() => <User user={user} />}/>
                            <Route path="/auth" component={Auth}/>
                          </Switch>
                }
            </div>
        );
    }
}
