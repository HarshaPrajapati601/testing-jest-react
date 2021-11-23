import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

it('shows a comment box', () => {
    render(<App />);
    const commentBox = screen.getByText(/Comment Box/);
    console.log(commentBox)
    expect(commentBox).toBeInTheDocument();

});

// import ReactDom from 'react-dom';
// import React from 'react';
// import App from '../App';
// import CommentBox from '../CommentBox';

// it('shows a comment box', () => {
//     const div = document.createElement('div');
//     ReactDom.render(<App />, div);
//     expect(div.innerHTML).toContain('Comment Box');
//     ReactDom.unmountComponentAtNode(div);

// })


