/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditBook = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();
 
    const updateBook = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/books/${id}`,{
            title: title,
           description: description,
           author: author,
           publish_date : publishDate
        });
        navigate("/");
    }
 
    useEffect(() => {
        getBookById();
    }, []);
 
    const getBookById = async () => {
        const response = await axios.get(`http://localhost:8000/api/books/${id}`);
        
       setTitle(response.data.data.title)
       setDescription(response.data.data.description)
       setAuthor(response.data.data.author)
       setPublishDate(response.data.data.publish_date)
    }
 
    return (
        <div>
            <form onSubmit={ updateBook }>
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
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditBook