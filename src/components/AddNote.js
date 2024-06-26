import React ,{useContext,useState}from 'react'
import noteContext from '../context/Notes/noteContext';


export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag : "default"})
    const handleClick =(e)=>{
        e.preventDefault();
     addNote(note.title,note.description,note.tag)
    }
    const onchange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
           <div className="container my-3">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" onChange={onchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label" >Description</label>
            <input type="text" className="form-control" id="Description" name='description' onChange={onchange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
        </form>
      </div>
    </div>
  )
}
