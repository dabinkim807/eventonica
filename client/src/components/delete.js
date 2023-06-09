import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const Delete = (props) => {
  // open={delOpen} onClose={handleDelClose} event={data} setEvent={setData} setDelOpen={setDelOpen} getRequest={props.getRequest}

  const deleteRequest = (id) => {
    fetch(`http://localhost:8080/api/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/JSON"
      },
    })
      .then(() => {
        props.getRequest();
      });
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deleteRequest(props.event.id);
    props.setDelOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className="delete-modal">
      <Modal open={props.open} onClose={props.onClose}>
        <Box sx={style}>          
          <h2>Delete Event</h2> 
          Are you sure you want to delete "{props.event.name}"?
          <button type="submit" onClick={props.onClose}>Cancel</button>
          <button type="submit" onClick={handleDelete}>Delete</button>
        </Box>
      </Modal>
    </div>
  )
}

export default Delete;