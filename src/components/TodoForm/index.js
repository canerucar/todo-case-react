import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from 'api/requests/addTodoAsync';

import './index.scss';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      setError('Title is required');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    setError('');
    dispatch(addTodoAsync({ id: Date.now(), title: value, completed: false }));
    setValue('');
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type='text'
        placeholder='Add todo...'
        className='form-input'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type='submit' className='form-button'>
        Submit
      </button>

      {error && <div className='form-error'>{error}</div>}
    </form>
  )
}

export default TodoForm;