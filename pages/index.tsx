import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchPosts} from "../store/action-creators/post";
import PostList from "../components/PostList";
import button from '../styles/button.module.css';
import styles from '../styles/postsList.module.css';

const Index = () => {
    const router = useRouter();
    const state = useTypeSelector(state => state.posts);
    if(state.error){
        return (
            <div>
                {state.error}
            </div>
        )
    }
    return (
        <div className={styles.wrapperList}>
            <div className={styles.header}>
                <h1 className={styles.text}>Posts</h1>
                <button className={`${button.btn}`} onClick={()=>router.push('/posts/new')}>Create Post</button>
            </div>
            <PostList posts={state.posts}/>
        </div>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store})=>{
    const dispatch = store.dispatch as NextThunkDispatch
    await  dispatch( await fetchPosts());
})
