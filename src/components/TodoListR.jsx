import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";

const ACTIONS = {
  add: "add",
  delete: "delete",
  check: "check",
  update: "update",
};
//newTodoObj {id:1,title:'',doneState:false}

const initTodos = [
  { id: 1, title: "Go to park", doneStatus: false },
  { id: 2, title: "Go to away", doneStatus: false },
];

function todoReducer(todos, action) {
  //   const newTodoObj = { id: 3, title: action.payload, doneStatus: false };
  //   return [...todos, newTodoObj];

  //switch
  switch (action.type) {
    case ACTIONS.add:
      return [...todos, action.payload];
    case ACTIONS.delete:
      return todos.filter((t) => t.id !== action.payload);
    case ACTIONS.check:
      return todos.map((t) => {
        if (t.id === action.payload) return { ...t, doneStatus: !t.doneStatus };
        return t;
      });
    case ACTIONS.update:
      return todos.map((t) => {
        if (t.id === action.payload) return { ...t, title: "update 3000" };
        return t;
      });

    default:
      return todos;
  }
}

function TodoListR() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  const [newTodoTitle, setNewTodoTitle] = useState("");
  //lastId-apskaicioti reiksmia
  const lastTodoId = todos[todos.length - 1].id;
  console.log("lastTodoId", lastTodoId);

  const handleNewTodo = () => {
    dispatch({ type: ACTIONS.add, payload: generateTodo() });
  };

  function generateTodo(title) {
    return { id: lastTodoId + 1, title: newTodoTitle, doneStatus: false };
  }

  const handleDeleteDispatch = (deleteId) => {
    console.log("handleDeleteDispatch");
    dispatch({ type: "delete", payload: deleteId });
  };

  const handleCheckDispatch = (checkId) => {
    dispatch({ type: "check", payload: checkId });
  };

  const handleUpdate = (updateId) => {
    dispatch({ type: ACTIONS.update, payload: updateId });
  };
  return (
    <section>
      <h2> Todo list is great</h2>
      <input
        type="text"
        placeholder="new title"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button onClick={handleNewTodo}>Add do doshes</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteDispatch}
            onCheck={handleCheckDispatch}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoListR;
