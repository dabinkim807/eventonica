const AddOrEdit = (props) => {
  // data={events}

  const handleNameChange = (e) => {
    e.preventDefault();
    let newTitle = e.target.value;
    // setEvent((event) => ({ ...event, title: newTitle }));
    //console.log(event.title);
  }
  
  const handleDateChange = (e) => {
    e.preventDefault();
    let newLocation = e.target.value;
    // setEvent((event) => ({ ...event, location: newLocation }));
    //console.log(event.location);
  }

  const handleDescChange = (e) => {
    e.preventDefault();
    let newDate = e.target.value;
    // setEvent((event) => ({ ...event, eventtime: newDate }));
    //console.log(event.eventtime);
  }

  const handleCatChange = (e) => {
    e.preventDefault();
    let newDate = e.target.value;
    // setEvent((event) => ({ ...event, eventtime: newDate }));
    //console.log(event.eventtime);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setEvent(event);
    // props.postRequest(event);
  }

  return (
    <div className="add-edit-modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            id="add-event-name"
            placeholder="Add event name"
            required
            value={props.data.name}
            onChange={handleNameChange}
          />
          <label>Date</label>
          <input 
            type="datetime-local"
            id="date"
            required
            value={props.data.date}
            onChange={handleDateChange}
          />
          <label>Description</label>
          <input 
            type="text"
            id="desc"
            placeholder="Add description"
            value={props.data.description}
            onChange={handleDescChange}
          />
          <label>Category</label>
          <select id="category" onChange={handleCatChange}>
            <option value="" disabled selected hidden>--Please choose an option--</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
          </select> 
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default AddOrEdit;