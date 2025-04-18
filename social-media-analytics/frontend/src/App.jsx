import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Posts from './pages/Posts';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout />
        <main className="md:pl-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;