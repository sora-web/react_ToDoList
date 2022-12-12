
import './App.css';
import { TodoList } from './componens/todolist';

export const App = () => {
  return (
    <>
      <h1>簡単メモアプリ</h1>
      <div>
        <TodoList />
      </div>
    </>
  )
};

