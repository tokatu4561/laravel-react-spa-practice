import React, { useState, useEffect }　from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {MainTable} from '../components/MainTable';
import axios from 'axios';
import PostFrom from '../components/PostForm';


const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            margin: theme.spacing(5),
            padding: theme.spacing(3),
        },
        table: {
            minWidth: 650,
        }
    })
);


const headerList = ["名前", "タスク内容", "編集", "完了"];

function Home() {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    const [formData, setFormData] = useState({name:'', content:''});

    useEffect(() => {
        getPostsData();
    },[])

    const getPostsData = () => {
        axios
            .get('/api/posts')
            .then(response => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }

    const createPost = async() => {
        //空だと弾く
        if(formData == ''){
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/post/create', {
                name: formData.name,
                content: formData.content
            })
            .then((res) => {
                //戻り値をtodosにセット
                const tempPosts = posts
                tempPosts.push(res.data);
                setPosts(tempPosts)
                setFormData('');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
        <h1>タスク管理</h1>
        <Card className={classes.card}>
            <PostFrom data={formData} onClickCreate={createPost} inputChange={inputChange}/>
        </Card>
        <Card className={classes.card}>
            {/* テーブル部分の定義 */}
            <MainTable headerList={headerList} posts={posts} />
        </Card>
        </>
    )
}

export default Home;
