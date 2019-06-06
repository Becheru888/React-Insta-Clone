import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  height: 77px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 60px 0;
`

const SearchBarContainer = () => {
    return (
        <Header className="search-bar-container">
            <div className="logos">
                <img className="camera-icon" src='https://i.postimg.cc/mZNxQnHQ/camera.png' alt="Camera icon"/>
                <div></div>
                <img className="instagram-logo" src='https://i.postimg.cc/pXqgSnkr/inLogo.png' alt="Instagram Clone Logo"/>
            </div>
            <div className="search-bar">
                <input placeholder="Search"/>
            </div>
            <div className="searc-bar-controls">
                <span><img className='icon' src="https://img.icons8.com/ios/50/000000/compass.png"/></span>
                <span><img className='icon' src="https://img.icons8.com/ios/50/000000/hearts.png"/></span>
                <span><img className='icon' src="https://img.icons8.com/ios/50/000000/gender-neutral-user.png"/></span>
            </div>
        </Header>
    );
}

export default SearchBarContainer;