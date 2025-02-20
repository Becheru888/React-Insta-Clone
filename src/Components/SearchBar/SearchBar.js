import React from 'react';
import styled from 'styled-components'

class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }

  logout = () => {
    localStorage.removeItem('user')
    window.location.reload();
  }

    render(){
        return (
            <Header className="search-bar-container">
            <LogoHeader className="logos">
                <img className="camera-icon" src='https://i.postimg.cc/mZNxQnHQ/camera.png' alt="Camera icon"/>
                <div></div>
                <a href='https://www.instagram.com/'><img className="instagram-logo" src='https://i.postimg.cc/pXqgSnkr/inLogo.png' alt="Instagram Clone Logo"/></a>
            </LogoHeader>
            <SearchInput className="search-bar">
                <input placeholder="Search" type='text' onKeyDown={this.props.filterPost}/>
            </SearchInput>
            <LogoImage className="searc-bar-controls">
                <span><img className='icon' src="https://img.icons8.com/ios/50/000000/compass.png" alt='compass'/></span>
                <span><img className='icon' src="https://img.icons8.com/ios/50/000000/hearts.png" alt='heart'/></span>
                <span><img className='icon' src="https://i.postimg.cc/Y25mPvPY/logout.png" alt='user' onClick={this.logout}/></span> 
            </LogoImage>
        </Header>
        )
    }

}

export default SearchBar;



//// Styled - Component //////


const Header = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  height: 77px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 60px 0;

`

const SearchInput = styled.div`
  input {
  background: #fafafa;
  border: solid 1px #dbdbdb;
  text-align: center;
  border-radius: 3px;
  color: #999;
  font-size: 14px;
  padding: 7px;
}
`

const LogoHeader = styled.div`
  display: flex;
  align-items: start;

div {
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
}

.instagram-logo {
  width: 103px
}
`

const LogoImage = styled.div`
.icon {
  width: 30px;
  height: 30px;
  padding: 20px;
}

`