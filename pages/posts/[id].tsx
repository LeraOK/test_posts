import React, {useState} from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import axios from "axios";
import CommentList from "../../components/CommentList";
import {useInput} from "../../hooks/useInput";
import button from '../../styles/button.module.css';
import styles from '../../styles/postItem.module.css';
import inner from "../../styles/postItem.module.css";
import {useTextArea} from "../../hooks/useTextArea";


const PostPage = ({serverPost}) => {
    const router = useRouter();
    const [post, setPost] = useState(serverPost);
    const body = useTextArea('');
    const addComment = async ()=>{
        try{
            const response = await axios.post("https://simple-blog-api.crew.red/comments", {
                postId: post.id,
                body: body.value
            });
            setPost({...post, comments: [...post.comments, response.data]});
        }catch (e){
            console.log(e);
        }
    }

    return (
        <div className={styles.currentPost}>
            <div className={styles.marginBottom}>
                <p className={`${styles.listItemTitle} ${styles.titleCenter}` }>{post.title}</p>
                <p className={styles.listItemBody}>{post.body}</p>
            </div>
            <p className={styles.commentTitle}>Comments</p>
            <textarea
                {...body}
                rows={15}
                className={styles.textAreaComment}
            />
            <button onClick={addComment} className={button.btn}>Leave comment</button>
            {post.comments.length?<CommentList comments={post.comments}/>:null}
            <button onClick={()=>router.push('https://simple-blog-posts.vercel.app/')} className={button.btn}>Back</button>
        </div>
    );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ({params})=>{
    const response = await axios.get('https://simple-blog-api.crew.red/posts/'+params.id +'?_embed=comments');
    // console.log(response.data);
    return{
        props:{
            serverPost: response.data
        }
    }

}
