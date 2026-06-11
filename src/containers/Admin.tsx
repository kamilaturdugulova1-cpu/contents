import { useEffect,useState } from 'react';
import axiosApi from '../axiosApi';


const Admin = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selected, setSelected] = useState('about');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axiosApi.get(`/Page/${selected}.json`);
            if (res.data) {
                setTitle(res.data.title);
                setContent(res.data.content);
            }
        };
        void fetchData();
    }, [selected]);

    const update = async () => {
        await axiosApi.put(`/Page/${selected}.json`, { title, content });
        alert('Сохранено!');
    };

    return (
        <div className="card p-4">
            <h3>Админ-панель</h3>
            <select onChange={(e) => setSelected(e.target.value)} className="form-control mb-3">
                <option value="about">About</option>
                <option value="contacts">Contacts</option>
                <option value="devisions">Divisions</option>
            </select>
            <input className="form-control mb-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Заголовок" />
            <textarea className="form-control mb-2" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Контент" />
            <button onClick={update} className="btn btn-primary">Сохранить</button>
        </div>
    );
};
export default Admin;