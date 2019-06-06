import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  margin:100px auto;
  display: flex;
  flex-direction:column;
  align-items: center;
  width:25%;
  height:400px;
  padding-top:40px;

  img{
    margin:0 0 40px 0;
    width:250px;
    height:70px;
  }
  input, button {
    margin:2px 0;
    width:90%;
    height:35px;
    border-radius: 2px;
    border: 1px solid #efefef;
    padding: 8px;
    

    ::placeholder {
     color: gray;
     
}
  }

  form {
    display: flex;
    align-items: center;
    width:100%;
    flex-direction:column;
  }

  button {
    background-color:#C4E0FA;
    border:0;
    border-radius:2px;
    color:white;
  }

`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = () => {
    const user = this.state.username;
    localStorage.setItem('user',user);
    window.location.reload();
  };



  render() {
    // const [shouldBeSelected, setShouldBeSelected] = useState(false);

    return (
      <Wrapper className='login-wrapper'>
        <img src='https://i.postimg.cc/pXqgSnkr/inLogo.png'/>
        <form>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </form>
        <form>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <button className='login' onClick={this.handleLoginSubmit}>
            Log In
          </button>
        </form>
      </Wrapper>
    );
  }
}

export default Login;