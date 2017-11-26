import React from 'react';
import { postUser } from '../utils/api/index';
import Notification from '../components/Notification';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      user: null,
      pass: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ message: '' });
    if (this.password.value === this.password_copy.value) {
      const { data, err } = await postUser(this.username.value, this.password.value);
      if (err) {
        console.error(err);
        this.setState({ message: err.message });
      } else {
        this.setState({
          message: data.message,
          user: this.username.value,
          pass: this.password.value,
        });
      }
    } else {
      this.setState({ message: 'Las contraseñas deben ser iguales' });
    }
  }
  render() {
    if (this.state.message === 'ok') {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { user: this.state.user, pass: this.password.value },
          }}
        />
      );
    }

    return (
      <div className='Panel'>
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
                          ref={_password => {
                            this.password = _password;
                          }}
                        />
                      </div>
                      <div className='Form-group'>
                        <label htmlFor='password' className='Form-label'>
                          Repetir Contraseña
                        </label>
                        <input
                          type='password'
                          name='password'
                          id='password'
                          className='Form-field'
                          autoComplete='off'
                          ref={_password => {
                            this.password_copy = _password;
                          }}
                        />
                      </div>
                      <button
                        type='submit'
                        name='button'
                        className='Button Button--primary Button--medium Button--block'
                      >
                        Enviar
                      </button>
                    </fieldset>
                  </form>
                  <p className='u-center u-divider-top'>
                    <a className='Button Button--link' href='/login'>
                      ¿Ya tienes cuenta? Entra
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Notification message={this.state.message !== 'ok' ? this.state.message : ''} />
        </div>
      </div>
    );
  }
}
