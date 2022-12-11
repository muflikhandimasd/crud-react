import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddBook = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const navigate = useNavigate();

 
    const saveBook = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/books',{
            title: title,
           description: description,
           author: author,
           publish_date : publishDate
        });
        navigate('/');
    }
 
    return (
        <div>
            <form onSubmit={ saveBook }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Author</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Author"
                        value={ author }
                        onChange={ (e) => setAuthor(e.target.value) }
                    />
                </div>
                <div className="field">
                    <label className="label">Publish Date</label>
                    <input 
                        className="input"
                        type="date"
                        placeholder="Publish Date"
                        value={ publishDate }
                        onChange={ (e) => setPublishDate(e.target.value) }
                    />
                </div>
 
                
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddBook