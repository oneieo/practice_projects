import Todo from "./Todo";

const TodoFinished = ({ todos, setTodos, setIsDone }) => {
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
