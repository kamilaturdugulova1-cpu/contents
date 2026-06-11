import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../axiosApi';
import type { PageData } from '../types';

const Page = () => {
    const { pageName } = useParams<{ pageName: string }>();
    const [page, setPage] = useState<PageData | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchPage = useCallback(async () => {
        if (!pageName) return;

        try {
            setLoading(true);
            const res = await axiosApi.get<PageData>(`/Page/${pageName}.json`);
            setPage(res.data);
        } catch (error) {
            console.error("Ошибка при загрузке страницы:", error);
            setPage(null);
        } finally {
            setLoading(false);
        }
    }, [pageName]);

    useEffect(() => {
        void fetchPage();
    }, [fetchPage]);

    if (loading) return <p>Загрузка...</p>;

    return page ? (
        <div>
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
    ) : <p>Страница не найдена</p>;
};

export default Page;