import React from 'react';
import TodoList from './components/TodoList';
import ImageUpload from './components/ImageUpload';
import ImageList from './components/ImageList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
      </header>
      <main>
        <TodoList />
        <ImageUpload />
        <ImageList />
      </main>
      <footer>
        <p>&copy; 2024 My To-Do App</p>
      </footer>
    </div>
  );
}

export default App;
