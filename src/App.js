import "./App.css";
import Counter from "./components/Counter";
import AboutMe from "./components/MyAboutMe";
import TodoListR from "./components/TodoListR";

function App() {
  return (
    <div>
      <Counter title="Likes1">Likes</Counter>
      <TodoListR />
      <AboutMe />
    </div>
  );
}

export default App;
