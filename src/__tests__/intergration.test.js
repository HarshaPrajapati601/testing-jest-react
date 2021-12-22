import React from 'react';
import { mount } from 'enzyme';
import moxios  from 'moxios';
import Root from 'Root';
import App  from 'components/App';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {name: 'Fetched #1'},
            {name: 'Fetched #2'},
            {name: 'Fetched #3'}
        ]
    })
});

afterEach(() => {
    moxios.uninstall();
})
//test to see if we can reach the json api and fetch a list of comments
it('Can fetch a list of comments and display them', (done)=> {
    //Atempts to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
   wrapped.find('.fetch-comment').simulate('click')
//   introduce a tiny little pause --setTimeout
//tell jest to hold on a sec for this setTImeout to complete we use a callback
   setTimeout(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(3);
    done();
    wrapped.unmount()
   }, 100)

    //find the fetch comment button and and simulate a click event on it

    //expect to find a list of commetns i.e 500 commnets for ex
});