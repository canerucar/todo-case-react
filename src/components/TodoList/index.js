import { useEffect } from 'react';
import TodoItem from 'components/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from 'api/requests/getTodosAsync';

import './index.scss';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className='list-group'>
      {todos.length > 0 ? null : <div>no list yet</div>}
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
