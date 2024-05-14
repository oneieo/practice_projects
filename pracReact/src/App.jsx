import { useState } from "react";

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

function WriteTodo({
  title,
  content,
  isDone,
  todos,
  setTitle,
  setContent,
  setTodos,
}) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const clickAddBtn = () => {
    const newTodos = {
      id: new Date().getTime(),
      title,
      content,
      isDone,
    };

    if (!title || !content) return; // 제목이나 내용이 없으면 추가되지 않음

    setTodos([newTodos, ...todos]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      제목 <input type="text" value={title} onChange={handleTitleChange} />
      내용 <input type="text" value={content} onChange={handleContentChange} />
      <button onClick={clickAddBtn}>추가하기</button>
    </div>
  );
}

function TodoInProgress({ todos, setTodos }) {
  const workingListStyle = {
    display: "flex",
    width: "1200px",
    height: "120px",
  };

  return (
    <div>
      <div>
        <h2>Working...🔥</h2>
      </div>
      <div style={workingListStyle}>
        {/* 진행중인 투두리스트가 동적으로 생성될 부분 */}
        {todos.map((progress) => {
          if (progress.isDone === false) {
            return (
              <Todo
                key={progress.id}
                id={progress.id}
                title={progress.title}
                content={progress.content}
                isDone={progress.isDone}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

function TodoFinished({ todos, setTodos, setIsDone }) {
  const doneListStyle = {
    display: "flex",
    width: "1200px",
    height: "120px",
  };

  return (
    <div>
      <div>
        <h2>Done...✅</h2>
      </div>
      <div style={doneListStyle}>
        {/* 완료된 투두리스트가 이 부분으로 옮겨져야함 */}
        {todos.map((progress) => {
          if (progress.isDone === true) {
            return (
              <Todo
                key={progress.id}
                id={progress.id}
                title={progress.title}
                content={progress.content}
                isDone={progress.isDone}
                todos={todos}
                setTodos={setTodos}
                setIsDone={setIsDone}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

const Todo = ({ id, title, content, isDone, todos, setTodos }) => {
  const style = {
    todoBox: {
      border: "1px solid black",
      borderRadius: "5px",
      padding: "10px",
      margin: "10px",
      height: "80px",
    },
    title: {
      fontWeight: "bold",
    },
    content: {
      fontSize: "13px",
    },
  };

  const clickDeleteBtn = () => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
  };

  const clickCompleteBtn = () => {
    // isDone을 true로 변경하고
    // isDone이 false인 상태의 투두박스들로 setTodos...
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clickCancelBtn = () => {
    // isDone을 false로 set하고
    // isDone이 true인 상태의 투두박스들로 setTodos
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  if (isDone === false) {
    return (
      <div style={style.todoBox}>
        <div style={style.title}>{title}</div>
        <div style={style.content}>{content}</div>
        <div>
          <button onClick={clickDeleteBtn}>삭제하기</button>
          <button onClick={clickCompleteBtn}>완료</button>
        </div>
      </div>
    );
  } else {
    return (
      <div style={style.todoBox}>
        <div style={style.title}>{title}</div>
        <div style={style.content}>{content}</div>
        <div>
          <button onClick={clickDeleteBtn}>삭제하기</button>
          <button onClick={clickCancelBtn}>취소</button>
        </div>
      </div>
    );
  }
};

export default App;
