import React, { useState, useEffect }　from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {MainTable} from '../components/MainTable';
import axios from 'axios';


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


const headerList = ["id","名前", "タスク内容", "編集", "完了"];

function Home() {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

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

    return (
        <Card className={classes.card}>
            {/* テーブル部分の定義 */}
            <MainTable headerList={headerList} posts={posts} />
        </Card>
    )
}

export default Home;
