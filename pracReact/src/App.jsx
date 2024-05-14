import { useState } from "react";
import WriteTodo from "./components/WriteTodo";
import TodoInProgress from "./components/TodoInProgress";
import TodoFinished from "./components/TodoFinished";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: new Date().getTime(),
      title: "리액트 공부하기",
      content: "기초 열심히!!!!!!!!!!!",
      isDone: false,
    },
    {
      id: new Date().getTime() + 1,
      title: "운동하기",
      content: "죽을 때까지.. 매일매일 유산소 30분",
      isDone: false,
    },
    {
      id: new Date().getTime() + 2,
      title: "잠 푹 자기",
      content: "...zzz",
      isDone: false,
    },
    {
      id: new Date().getTime() + 3,
      title: "맛점하기",
      content: "배고프다!!",
      isDone: true,
    },
  ]);

  return (
    <div>
      <span>My Todo List</span>
      <WriteTodo
        title={title}
        content={content}
        isDone={isDone}
        todos={todos}
        setTitle={setTitle}
        setContent={setContent}
        setTodos={setTodos}
      />
      <TodoInProgress todos={todos} setTodos={setTodos} />
      <TodoFinished todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
