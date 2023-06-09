import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const AddOrEdit = (props) => {
  // open={open} onClose={handleClose} event={data} setEvent={setData} setOpen={setOpen} getRequest={props.getRequest}
  let event = props.event;

  const handleNameChange = (e) => {
    e.preventDefault();
    props.setEvent((event) => ({...event, name:e.target.value}));
    console.log(event);
  }
  const handleDateChange = (e) => {
    e.preventDefault();
    props.setEvent((event) => ({...event, date:e.target.value}));
  }
  const handleDescChange = (e) => {
    e.preventDefault();
    props.setEvent((event) => ({...event, description:e.target.value}));
  }
  const handleCatChange = (e) => {
    e.preventDefault();
    props.setEvent((event) => ({...event, category:e.target.value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (event.id === null) {
      postRequest();
    } else {
      putRequest();
    }
    props.setOpen(false);
  }
  
  const postRequest = () => {
    fetch(`http://localhost:8080/api/events`, {
      method: "POST",
      headers: {
        "Content-type": "application/JSON"
      },
      body: JSON.stringify(event)
    })
      .then(() => {
        props.getRequest();
      });
  }
  const putRequest = () => {
    fetch(`http://localhost:8080/api/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/JSON"
      },
      body: JSON.stringify(event)
    })
      .then(() => {
        props.getRequest();
      });
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="main-modal">
      <Modal open={props.open} onClose={props.onClose}>
        <Box sx={style}>     
          <h2>Add/Edit Event</h2>     
          <form>
            <label>Name</label>
            <input
              type="text"
              id="add-event-name"
              placeholder="Add event name"
              required
              value={event.name}
              onChange={handleNameChange}
            />
            <label>Date</label>
            <input 
              type="datetime-local"
              id="date"
              required
              value={event.date}
              onChange={handleDateChange}
            />
            <label>Description</label>
            <input 
              type="text"
              id="desc"
              placeholder="Add description"
              value={event.description}
              onChange={handleDescChange}
            />
            <label>Category</label>
            <select id="category" defaultValue={event.category} onChange={handleCatChange}>
              <option value="" disabled>--Please choose an option--</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select> 
            <button type="submit" onClick={props.onClose}>Cancel</button>
            <button type="submit" onClick={handleSubmit}>Save</button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddOrEdit;