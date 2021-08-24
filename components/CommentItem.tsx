import React from 'react';
import {IComment} from "../types/post";
import styles from '../styles/commentItem.module.css';

interface CommentItemProps{
    comment: IComment;
}
const CommentItem: React.FC<CommentItemProps> = ({comment}) => {
    return (
        <div className={styles.commentBody}>
            {comment.body}
        </div>
    );
};

export default CommentItem;