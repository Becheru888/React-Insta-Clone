import React from 'react';
import styled from 'styled-components';


export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = e => {
        this.setState({ username: e.target.value });
      };

      handleInputChangeP = e => {
        this.setState({ password: e.target.value });
      };
    
      handleLoginSubmit = () => {
        localStorage.setItem('user',this.state.username);
        window.location.reload();
      };

    render(){
        return (
            <Wrapper className='login-wrapper'>
            <img src='https://i.postimg.cc/pXqgSnkr/inLogo.png' alt='instagram-logo'/>
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
                onChange={this.handleInputChangeP}
              />
              <br />
              <button className='login' onClick={this.handleLoginSubmit}>
                Log In
              </button>
            </form>
          </Wrapper>
         
        )
    }
}


//// Styled - Component //////


const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  margin:100px auto;
  display: flex;
  flex-direction:column;
  align-items: center;
  width:30%;
  height:400px;
  padding-top:40px;
  background-color:white;

  img{
    margin:0 0 40px 0;
    width:250px;
    height:70px;
  }
  
  input {
    background-color:#FAFAFA;
  }

  input, button {
    margin:5px 10px;
    width:80%;
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
    :hover {
      background-color:#3897F0;
    }
  }

`