import React from 'react';
import {IPost} from "../types/post";
import PostItem from "./PostItem";

interface PostListProps {
    posts: IPost[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {

    return (
        <div>
            {posts.map(post=>
            <PostItem
                key={post.id}
                post={post}
            />
            ).reverse()}
        </div>
    );
};

export default PostList;