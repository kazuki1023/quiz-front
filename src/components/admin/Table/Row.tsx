import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface RowProps {
  data: {
    id: number;
    content: string;
  };
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}
const Row: React.FC<RowProps> = ({ data, onDelete, onEdit }) => {
  const handleDelete = () => {
    const isConfirmed = window.confirm("この問題を削除してよろしいですか？");
    if (isConfirmed) {
      onDelete(data.id);
    }
  }
  const handleEdit = () => {
    onEdit(data.id);
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
        <Tooltip title="編集、更新ができます" arrow >
        <IconButton sx={{ p:0 }} onClick={handleEdit}>
            <EditIcon />
          </IconButton>
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