import React from 'react';
import {IComment} from "../types/post";
import CommentItem from "./CommentItem";
import styles from '../styles/commentItem.module.css';

interface CommentListProps {
    comments: IComment[]
}

const CommentList: React.FC<CommentListProps> = (props) => {
    return (
        <div className={styles.marginCommentList}>
            {props.comments.map(comment=>
                <CommentItem
                    key={comment.id}
                    comment={comment}
                />
                )}
        </div>
    );
};

export default CommentList;