import {useState} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Moment from "react-moment";

import AddOrEdit from './addOrEdit';
import Delete from './delete';


const EventsTable = (props) => {
  // data={events} getRequest={getRequest}

  const defaultEvent = {
    id: null,
    name: "",
    date: "",
    description: "",
    category: "--Please choose an option--"
  };

  const [data, setData] = useState(defaultEvent);
  const [open, setOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  const handleOpen = (eventData) => {
    console.log(eventData);
    setData(eventData);
    setOpen(true);
  }
  const handleDelOpen = (eventData) => {
    console.log(eventData);
    setData(eventData);
    setDelOpen(true);
  }

  const handleClose = () => setOpen(false);
  const handleDelClose = () => setDelOpen(false);

  
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((event) => (
              <TableRow
                key={event.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{event.name}</TableCell>
                <TableCell><Moment format={"llll"}>{event.date}</Moment></TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.category}</TableCell>
                <TableCell><button onClick={() => handleOpen(event)}>edit</button></TableCell>
                <TableCell><button onClick={() => handleDelOpen(event)}>delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>

      <AddOrEdit open={open} onClose={handleClose} event={data} setEvent={setData} setOpen={setOpen} getRequest={props.getRequest} />
      <Delete open={delOpen} onClose={handleDelClose} event={data} setEvent={setData} setDelOpen={setDelOpen} getRequest={props.getRequest} />
    </div>
  )
}

export default EventsTable;