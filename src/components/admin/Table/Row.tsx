import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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
    </TableRow>
  )
}
export default Row;