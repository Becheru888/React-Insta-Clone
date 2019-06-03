import React from 'react';


const SearchBarContainer = () => {
    return (
        <div className="search-bar-container">
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
        </div>
    );
}

export default SearchBarContainer;