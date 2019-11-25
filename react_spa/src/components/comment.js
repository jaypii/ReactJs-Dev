import React, {Component} from "react";

function formatDate(date) {
    return date.toLocaleDateString();
}
  
function Avatar(props) {
    return (
        <img
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}
  
function UserInfo(props) {
    return (
        <div>
            <p className="mb-0"><small>Comment from: {props.user.name}</small></p>
            <Avatar user={props.user} />
        </div>
    );
}

function Comment(props) {
    return (
    <div className="px-1">
        <div className="d-flex bd-highlight">
            <div className="flex-fill bd-highlight">
                <UserInfo user={props.author} />
            </div>
            <div className="flex-fill bd-highlight">
                <small>{formatDate(props.date)}</small>
            </div>
        </div>
        <div>
            {props.text}
        </div>
    </div>
    );
} 

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};

class CommentBlock extends Component {
    render() {
        return(
            <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        );
    }
}

export default CommentBlock;