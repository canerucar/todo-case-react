import { useDispatch } from "react-redux";
import { toggleCompleteAsync } from "api/requests/toggleCompleteAsync";
import { deleteTodoAsync } from "api/requests/deleteTodoAsync";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleCompleteAsync({ id, completed: !completed }));
  }

  const onDelete = () => {
    dispatch(deleteTodoAsync({ id }));
  }

  return (
    <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
      <div onClick={onToggle} className="list-group-item-wrapper">
        <input type="checkbox" className="form-checkbox" checked={completed} onChange={onToggle} />
        <span className="task">{title}</span>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;