import React from 'react';
import {IPost} from "../types/post";
import {useRouter} from "next/router";
import inner from '../styles/postItem.module.css';

interface PostItemProps{
    post: IPost;
}
const PostItem: React.FC<PostItemProps> = ({post}) => {
    const router = useRouter();
    return (
        <div onClick={()=>router.push('/posts/' +post.id)} className={inner.class}>
            <div className={inner.wrapper}>
                {/*<div className={inner.wrapperItem}>*/}
                    {/*<p>{post.id}</p>*/}
                    <p className={inner.listItemTitle}> {post.title}</p>
                {/*</div>*/}
                <p className={inner.listItemBody}>{post.body}</p>
            </div>
        </div>
    );
};

export default PostItem;