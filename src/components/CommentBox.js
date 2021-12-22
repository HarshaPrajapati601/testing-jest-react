import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions';

const pageStyles = {
    mainContainer: {
        textAlign: 'center',
        padding: 15
    },
    buttonSumbit: {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: 12,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,
        margin: 10
    },
    buttonFetch: {
        backgroundColor: 'lightGrey',
        border: 'none',
        padding: 12,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,
        margin: 10
    }

}
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
        if(this.state.comment !== '') {
            this.props.saveComment(this.state.comment);
        }
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
            <div style={pageStyles.mainContainer}>
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea
                    value={comment ?? ''}
                    onChange={this.handleChange}
                />
                <div className="cursor-pointer">
                    <button 
                    style={pageStyles.buttonSumbit}>
                        Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comment cursor-pointer"
            style={pageStyles.buttonFetch}
             onClick={this.props.fetchComments}
             >Fetch Comments
             </button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);