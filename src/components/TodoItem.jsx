function TodoItem({ todo, onDelete, onCheck, onUpdate }) {
  return (
    <li style={{ textDecoration: todo.doneStatus ? "line-through" : "none" }}>
      {todo.title} --{todo.id}-- ={todo.doneStatus.toString()}=
      <button onClick={() => onDelete(todo.id)}>Delete</button>{" "}
      <button onClick={() => onCheck(todo.id)}>Check</button>
      <button onClick={() => onUpdate(todo.id)}>Update</button>
    </li>
  );
}

export default TodoItem;
