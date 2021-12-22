import React　from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {MainTable} from '../components/MainTable';


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

let rows = [
    {
        name: "とかつ",
        content: "ポテチ",
        editBtn: (
            <Button color="secondary" variant="contained">
                編集
            </Button>
        ),
        deleteBtn: (
            <Button color="primary" variant="contained">
                完了
            </Button>
        ),
    },
    {
        name: "がとつ",
        content: "ポテト",
        editBtn: (
            <Button color="secondary" variant="contained">
                編集
            </Button>
        ),
        deleteBtn: (
            <Button color="primary" variant="contained">
                完了
            </Button>
        ),
    },
];

const headerList = ["名前", "タスク内容", "編集", "完了"];

function Home() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            {/* テーブル部分の定義 */}
            <MainTable headerList={headerList} rows={rows} />
        </Card>
    )
}

export default Home;
