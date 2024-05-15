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
      title: "유산소 30분",
      content: "죽을 때까지.. 매일매일",
      isDone: false,
    },
    {
      id: new Date().getTime() + 2,
      title: "잠 푹 자기",
      content: "...zzZ",
      isDone: false,
    },
    {
      id: new Date().getTime() + 3,
      title: "맛점하기",
      content: "버거킹 통새우와퍼",
      isDone: true,
    },
  ]);

  const style = {
    layout: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mainBox: {
      minWidth: "800px",
      maxWidth: "1200px",
      margin: "0 auto",
      color: "#333333",
      backgroundColor: "#f6f6f6",
      border: "3px solid #c2c2c2",
      borderRadius: "10px",
      boxShadow: "1px 1px 10px #c2c2c2 ",
    },
    mainTitle: {
      textIndent: "25px",
    },
  };

  return (
    <div style={style.layout}>
      <div style={style.mainBox}>
        <h2 style={style.mainTitle}>My TodoList</h2>
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
    </div>
  );
}

export default App;
