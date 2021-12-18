import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions';

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: null
        }
    }

    handleChange =(e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //todo = call an action creator and save the comment entered by the user.
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        })
    }

    render() {
        const {comment} = this.state;
        // if (comment === '') {
        //     // Simulate an error!
        //     throw new Error('I crashed!');
        //   }
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea
                    value={comment ?? ''}
                    onChange={this.handleChange}
                  />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);