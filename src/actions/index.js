import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from './type';

export function saveComment(comment) {
 return({
     type: SAVE_COMMENT,
     payload: comment
 })
}

//to get the lsit of comments from api

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return({
        type: FETCH_COMMENTS,
        payload: response
    })

  
}