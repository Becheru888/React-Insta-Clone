import React from 'react';

const withAuthentication = PostsPage => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loggedIn: false,
            };
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({ loggedIn: true });
            } else {
                alert("Please Login with any username and password!")
                this.setState({ loggedIn: false });
            }
        }

        render(){
            if (this.state.loggedIn) return <PostsPage />;
            return <Login />;
        }

    }
 
    export default withAuthentication;