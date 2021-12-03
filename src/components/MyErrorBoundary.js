import React from 'react';

class MyErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorMessage: ''
        }
    }

    static getDerivedStateFromError(error) {
        return{
            errorMessage: error.toString()
        }
    }

    componentDidCatch(error, info) {
        this.loginServiceFake(error.toString(), info.componentStack);
    }

    //fake service
    loginServiceFake = console.log

    render() {
        return (
            <>
            {this.state.errorMessage !== '' && <p><h1>Something went wrong.</h1></p>}
            {this.props.children}

            </>
        )
    }

}

export default MyErrorBoundary;