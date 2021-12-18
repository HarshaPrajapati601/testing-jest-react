import React from 'react';
import CommentList  from 'components/CommentList';
import {mount} from 'enzyme';
import Root from 'Root';

let wrapped;
beforeEach(()=> {
      const initialState = {
            comments: ['Comment 1', 'Comment 2']
      };
      wrapped = mount(
            <Root initialState={initialState}>
               <CommentList  />
            </Root>
            ); 
});

it('creates one Li per comment', () => {
 expect(wrapped.find('li').length).toEqual(2);
});

it('it shows the text of each comme', () => {
      console.log(wrapped.render().text())
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
})