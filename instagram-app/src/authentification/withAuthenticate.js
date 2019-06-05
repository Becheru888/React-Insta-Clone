import React from 'react';

const withAuthenticate = AnotherComponent =>
    class extends React.Component {
        render(){
            return <AnotherComponent/>
        }
    }

    export default withAuthenticate