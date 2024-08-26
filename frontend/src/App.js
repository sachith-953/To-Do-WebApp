
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';

function App() {
  const appStyle = {
    backgroundColor: '#121212',
    color: '#e0e0e0', 
    minHeight: '100vh', 
    padding: '20px',
  };

  const headStyle = {
    textAlign: 'center',
    color: '#ffffff', 
    marginBottom: '20px', 
  };

  return (
    <div style={appStyle}>
      <h1 style={headStyle}>Undergraduate Student Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

