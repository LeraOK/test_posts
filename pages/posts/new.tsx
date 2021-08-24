import React, {useState} from 'react';
import {useInput} from "../../utils/hooks/useInput";
import axios from "axios";
import {useRouter} from "next/router";
import button from '../../styles/button.module.css';
import styles from '../../styles/postItem.module.css';
import {useTextArea} from "../../hooks/useTextArea";

const New = () => {
    const router = useRouter();
    const title = useTextArea('');
    const body = useTextArea('');
     const create  = ()=> {
         axios.post('https://simple-blog-api.crew.red/posts', {
             title:title.value,
             body:body.value
         })
             .then(response=>router.push('http://localhost:3000/'))
             .catch(e=>console.log(e))
     }
    return (
        <div className={styles.newPost}>
            <p className={styles.newPostTitle}>Write title for your Post </p>
            <textarea  {...title} rows={5} className={styles.textAreaComment}/>
            <p className={styles.newPostTitle}>Your Post </p>
            <textarea {...body} rows={15} className={styles.textAreaComment}/>
            <button onClick={create} className={`${button.btn} ${styles.buttonMargin}`}>Save</button>
        </div>
    );
};

export default New;
