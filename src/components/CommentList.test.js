import React from 'react';
import { CommentList } from 'components/CommentList';
import { shallow } from 'enzyme';
import Root from 'Root';

let wrapped;
      // our mock commentList function to replace the one provided by mapDispatchToProps
      const mockCommentlistFn = jest.fn();
beforeEach(()=> {
           // pass the mock function as the login prop 
      wrapped = shallow(
      <Root>
         <CommentList comments={mockCommentlistFn} />
      </Root>
      ); 
});

// it('creates one Li per comment', () => {
//     console.log(wrapped.find('li').length).toEqual(2);
// })

it('it shows the text of each comme', () => {
    console.log(wrapped.props());
})