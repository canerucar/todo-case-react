import CompleteItems from 'components/CompleteItems';
import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

import 'styles/index.scss';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <h1 className='wrapper-header'>My Todo List</h1>
        <TodoForm />
        <TodoList />
        <CompleteItems />
      </div>
    </div>
  );
}

export default App;
