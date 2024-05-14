
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
    // 완료버튼이 작동한 todo의 isDone을 true로 변경하고
    // isDone이 false인 상태의 투두박스들로 setTodos
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clickCancelBtn = () => {
    // 취소버튼이 작동한 todo의 isDone을 false로 변경하고,
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

export default Todo;
