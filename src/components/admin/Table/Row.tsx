import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface RowProps {
  data: {
    id: number;
    content: string;
  };
  onDelete: (id: number) => void;
}
const Row: React.FC<RowProps> = ({ data, onDelete }) => {
  const handleDelete = () => {
    const isConfirmed = window.confirm("この問題を削除してよろしいですか？");
    if (isConfirmed) {
      onDelete(data.id);
    }
  }
  return (
    <TableRow
      key={data.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="rows">
        {data.id}
      </TableCell>
      <TableCell component="th" scope="rows" align="left">
        {data.content}
      </TableCell>
      <TableCell component="th" scope="rows" align="left">
        <Tooltip title="編集、更新ができます" arrow>
          <Button sx={{ p: 0, m: 0}}>編集</Button>
        </Tooltip>
      </TableCell>
      <TableCell component="th" scope="rows">
        <Tooltip title="削除">
          <IconButton sx={{ p:0 }} onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>

    </TableRow>
  )
}
export default Row;