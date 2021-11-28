import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapped;
beforeEach(()=> {
      wrapped = mount(
      <Root>
         <CommentBox />
      </Root>
      ); 
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

 describe('has the text area', () => {
     beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
     })
    it('has a textarea that user can type in', () => {
        //the value prop recieves the right prop
      //1. find the textarea
      //2. simulate(eventName, mock=  fake event object) the change event
      //3. Forcing component update = to not wait for rerender for react use update on a refrence to a component
      //4. write out ur assertion .prop() to retrive the value prop from the component's instance
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    });
   
    it('When form is submitted text area gets emptied', () =>{
       wrapped.find('form').simulate('submit')
       wrapped.update();
       expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
 })
