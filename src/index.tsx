import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import LoginPage from './login.tsx';

const Root: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
