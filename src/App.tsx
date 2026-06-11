import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page  from './containers/Page';
import  Admin  from './containers/Admin';

const App = () => (
    <>
        <Navbar />
        <div className="container mt-4">
            <Routes>
                <Route path="/" element={<Navigate to="/Page/about" />} />
                <Route path="/Page/:pageName" element={<Page />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    </>
);
export default App;