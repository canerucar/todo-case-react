import { useSelector } from "react-redux";
import './index.scss';

const CompleteItems = () => {
  const completedTodos = useSelector(state => state.todos.filter(todo => todo.completed));

  return <div className="complete">Total Complete Items: {completedTodos.length}</div>;
};

export default CompleteItems;