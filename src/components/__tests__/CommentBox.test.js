import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';

let wrapped;
beforeEach(()=> {
 wrapped = mount(<CommentBox />); 
});

afterEach(()=> {
    wrapped.unmount();
})

 it('has a text area and a button', () => {
    //creating new instances of the component u wana test. we use afterEach()
    //if u mount unmount it
    // console.log(wrapped.find("textarea").length);

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
 })