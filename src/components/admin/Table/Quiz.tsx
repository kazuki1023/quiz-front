import *  as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';



const QuizTable = () => {
  const [datas, setData] = useState<Array<{
    id: number;
    content: string;
  }>>([]);
  useEffect(() => {
    axios.get('http://localhost/api/v1')
      .then(response => {
        const fetchedData = response.data.data; // ここでAPIからのデータを取得
        // fetchedDataをQuizProps.quizDataの形に整形
        const formattedData = fetchedData.map((quiz: any) => {
          return {
            id: quiz.id,
            content: quiz.content,
          };
        });

        setData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>問題番号</TableCell>
            <TableCell align="left">問題文</TableCell>
            <TableCell align="right">編集</TableCell>
            <TableCell align="right">削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="rows">
                {data.id}
              </TableCell>
              <TableCell component="th" scope="rows">
                {data.content}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default QuizTable;
