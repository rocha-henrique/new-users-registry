import CreateUser from './pages/CreateUser';
import ListUsers from './pages/ListUsers'
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import './css/App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;