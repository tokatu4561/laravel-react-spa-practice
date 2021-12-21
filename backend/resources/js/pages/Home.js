import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';


const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
      },
    tableHead: {
        backgroundColor: purple['A100'],
    },
}));

const headerList = ['名前', 'タスク内容', '編集', '完了'];

function Home() {
    const classes = useStyles();

    return (
        <div className="container">
            <div className="">
                <div className="">
                    <div className="">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    {/* ヘッダー部分 */}
                                    <TableHead className={classes.tableHead}>
                                        <TableRow>
                                            {headerList.map((item, index) => (
                                                <TableCell align="center" key={index}>{item}</TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                     {/* ボディ部分 */}
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="center">とかつ</TableCell>
                                            <TableCell align="center">とかとか</TableCell>
                                            <TableCell align="center"><Button color="secondary" variant="contained">編集</Button></TableCell>
                                            <TableCell align="center"><Button color="primary" variant="contained">完了</Button></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">がとつ</TableCell>
                                            <TableCell align="center">ポテチ</TableCell>
                                            <TableCell align="center"><Button color="secondary" variant="contained">編集</Button></TableCell>
                                            <TableCell align="center"><Button color="primary" variant="contained">完了</Button></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </div>
                </div>

            </div>
            <Card>
            <Link color="primary" variant="contained"　to="/example">Exampleに遷移</Link>
            </Card>
        </div>
    );
}

export default Example;