import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import MyErrorBoudnary from './MyErrorBoundary';
import * as actions from 'actions'

const styles = ({
    header: {
        
    }
})
class App extends React.Component {

    renderButton = () => {
       const {auth, changeAuth} = this.props;
       if(auth) {
           return(
               <button onClick={() => {changeAuth(false)}}>Sign Out</button>
           )
       } 
       return <button onClick={() => {changeAuth(true)}}>Sign In</button>
    }

    renderHeader = () => {
        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    render(){
        return(
            <div>
                <MyErrorBoudnary>
                <BrowserRouter>
                <header>
                    {this.renderHeader()}
                    </header>
                    <Routes>
                    <Route path="/" exact element={<CommentList />} />
                    <Route path="/post" element={<CommentBox />} />
                    </ Routes>
                </BrowserRouter>
                </MyErrorBoudnary>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions) (App);

