import React from 'react';
import _ from 'lodash/object';
import { postLogin } from '../utils/api/index';
import * as store from '../utils/store';
import Notification from '../components/Notification';

import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
      user: _.get(this.props.location.state, 'user'),
      pass: _.get(this.props.location.state, 'pass'),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { data, err } = await postLogin(this.username.value, this.password.value);
    this.setState({ errorMessage: '' });
    if (err) {
      console.warn(err);
      this.setState({
        errorMessage: err.message,
      });
    } else {
      store.set('token', _.get(data, 'token', ''));
      this.setState({ errorMessage: '' });
    }
  }

  render() {
    if (store.get('token')) {
      return <Redirect to='/' />;
    }

    return (
      <div className='Grid Grid--alignCenter'>
        <div className='Grid-cell u-md-size6of12'>
          <div className='Login'>
            <div className='LoginForm'>
              <div>
                <form className='Form' noValidate onSubmit={this.handleSubmit}>
                  <fieldset>
                    <div className='Form-group'>
                      <label htmlFor='username' className='Form-label'>
                        Nombre de usuario
                      </label>
                      <input
                        type='username'
                        name='username'
                        id='username'
                        className='Form-field'
                        autoComplete='on'
                        defaultValue={this.state.user}
                        ref={_username => {
                          this.username = _username;
                        }}
                      />
                    </div>
                    <div className='Form-group'>
                      <label htmlFor='password' className='Form-label'>
                        Contraseña
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        className='Form-field'
                        autoComplete='off'
                        defaultValue={this.state.pass}
                        ref={_password => {
                          this.password = _password;
                        }}
                      />
                    </div>
                    <button
                      type='submit'
                      name='button'
                      className='Button Button--primary Button--medium Button--block'
                    >
                      Entrar en tu cuenta
                    </button>
                  </fieldset>
                </form>
                <p className='u-center u-divider-top'>
                  <a className='Button Button--link' href='/users/sign_up'>
                    ¿Todavía no tienes cuenta? ¡Regístrate!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Notification message={this.state.errorMessage} />
      </div>
    );
  }
}
