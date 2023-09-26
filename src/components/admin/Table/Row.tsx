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
}
const Row: React.FC<RowProps> = ({ data }) => {
  return (
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
      <TableCell component="th" scope="rows">
        <Tooltip title="編集、更新ができます" arrow>
          <Button sx={{ p: 0 }}>編集</Button>
        </Tooltip>
      </TableCell>
      <TableCell component="th" scope="rows">
        <Tooltip title="削除">
          <IconButton sx={{ p:0 }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>

    </TableRow>
  )
}
export default Row;