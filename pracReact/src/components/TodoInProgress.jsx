import Todo from "./Todo";

const TodoInProgress = ({ todos, setTodos }) => {
  
  const style = {
    workingSection: {
      padding: "0px 10px 0px 10px",
      overflowX: "scroll",        
    },
    workingTitle: {
      fontSize: "18px",
      marginBottom: "0px",
      textIndent: "15px",
    },
    workingList: {
      display: "flex",
      width: "800px",
      height: "120px",
    },
  };

  return (
    <div style={style.workingSection}>
      <div>
        <h2 style={style.workingTitle}>Working...🧠</h2>
      </div>
      <div style={style.workingList}>
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
};

export default TodoInProgress;
