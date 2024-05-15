const Todo = ({ id, title, content, isDone, todos, setTodos }) => {

  const style = {
    todoBox: {
      margin: "10px",
      width: "160px",
      height: "80px",
      padding: "10px 10px 10px 10px",
      borderRadius: "10px",
      backgroundColor: "#e5e5e5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      fontWeight: "bold",
      fontSize: "14px",
      overflow: "hidden",
      paddingBottom: "10px",
    },
    content: {
      fontSize: "11px",
      width: "160px",
      height: "35px",
      overflow: "hidden",
      marginBottom: "10px",
    },
    buttons: {
      display: "flex",
      justifyContent: "right",
      gap: "5px",
    },
    deleteBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "9px",
      width: "15px",
      height: "20px",
      backgroundColor: "#FFB3D2"
    },
    completeBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "9px",
      width: "15px",
      height: "20px",
      backgroundColor: "#7DD25E",
    },
    cancelBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "9px",
      width: "10px",
      height: "20px",
      backgroundColor: "#92C4FF",
    },
  };

  const clickDeleteBtn = () => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    setTodos(updatedTodos);
  };

  const clickCompleteBtn = () => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: true } : todo;
    });
    setTodos(updatedTodos);
  };

  const clickCancelBtn = () => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: false } : todo;
    });
    setTodos(updatedTodos);
  };

  return (
      <div style={style.todoBox}>
        <div style={style.title}>{title}</div>
        <div style={style.content}>{content}</div>
        <div style={style.buttons}>
          <button onClick={clickDeleteBtn} style={style.deleteBtn}>✕</button>
          <button onClick={isDone === false ? clickCompleteBtn : clickCancelBtn} style={isDone === false ? style.completeBtn : style.cancelBtn}>{isDone === false ? "✓" : "↺"}</button>
        </div>
      </div>
  );
 //else {
  //   return (
  //     <div style={style.todoBox}>
  //       <div style={style.title}>{title}</div>
  //       <div style={style.content}>{content}</div>
  //       <div style={style.buttons}>
  //         <button onClick={clickDeleteBtn} style={style.deleteBtn}>✕</button>
  //         <button onClick={clickCancelBtn} style={style.cancelBtn}>↺</button>
  //       </div>
  //     </div>
  //   );
  // }
};

export default Todo;
