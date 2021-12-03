import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import MyErrorBoudnary from './MyErrorBoundary';


const App = () => {

    return(
        <div>
            <MyErrorBoudnary>
                <CommentBox />
                <CommentList />
            </MyErrorBoudnary>
        </div>
    )
}

export default App;

