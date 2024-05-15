import Todo from "./Todo";

const TodoFinished = ({ todos, setTodos, setIsDone }) => {

  const style = {
    doneSection: {
      padding: "0px 10px 0px 10px",
      overflowX: "scroll",
    },
    doneTitle: {
      fontSize: "18px",
      margin: "10px auto 0px auto",
      textIndent: "15px",
    },
    doneList: {
      display: "flex",
      width: "800px",
      height: "120px",
    },
  };

  return (
    <div style={style.doneSection}>
      <div>
        <h2 style={style.doneTitle}>Done...🏆</h2>
      </div>
      <div style={style.doneList}>
        {/* 완료된 투두리스트가 옮겨질 부분 */}
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

export default TodoFinished
