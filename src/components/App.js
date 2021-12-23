import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import MyErrorBoudnary from './MyErrorBoundary';


const App = () => {

    return(
        <div>
            <MyErrorBoudnary>
            <BrowserRouter>
                <Routes>
                <Route path="/" exact element={<CommentList />} />
                <Route path="/post" element={<CommentBox />} />
                </ Routes>
              </BrowserRouter>
            </MyErrorBoudnary>
            
        </div>
    )
}

export default App;

