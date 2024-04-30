import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import Job from './pages/Job';
import AboutPage from './pages/AboutPage';
import ReadBlog from './pages/ReadBlog';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='/blog' element={<BlogPage />} ></Route>
      <Route path='/jobs' element={<Job />} ></Route>
      <Route path='/about' element={<AboutPage />} ></Route>
      <Route path='/readblog/:id' element={<ReadBlog />} ></Route>
    </Routes>
  );
}

export default App;
