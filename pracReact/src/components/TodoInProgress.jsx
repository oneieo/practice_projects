import Todo from "./Todo";

const TodoInProgress = ({ todos, setTodos }) => {
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
        {/* 진행중인 투두리스트가 생성될 부분 */}
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

export default TodoInProgress
