import { useState } from 'react';
import type { PageData } from '../types';

interface Props {
    onSubmit: (data: PageData, id?: string) => void;
    existingPage?: PageData;
    isEdit?: boolean;
}

export const PageForm: React.FC<Props> = ({ onSubmit, existingPage, isEdit = false }) => {
    const [form, setForm] = useState(existingPage || { title: '', content: '' });
    const [id, setId] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form, id);
    };

    return (
        <form onSubmit={submitHandler}>
            {!isEdit && (
                <div className="mb-3">
                    <label>ID страницы (на латинице):</label>
                    <input className="form-control" onChange={e => setId(e.target.value)} required />
                </div>
            )}
            <div className="mb-3">
                <label>Заголовок:</label>
                <input className="form-control" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
            </div>
            <div className="mb-3">
                <label>Контент:</label>
                <textarea className="form-control" rows={5} value={form.content} onChange={e => setForm({...form, content: e.target.value})} required />
            </div>
            <button className="btn btn-primary">Сохранить</button>
        </form>
    );
};