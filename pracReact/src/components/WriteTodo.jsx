
const WriteTodo = ({ title, content, isDone, todos, setTitle, setContent, setTodos }) => {
  const handleTitleChange = (e) => {setTitle(e.target.value);};
  const handleContentChange = (e) => {setContent(e.target.value);};

  const clickAddBtn = () => {
    const newTodos = {
      id: new Date().getTime(),
      title,
      content,
      isDone,
    };

    if (!title.trim() || !content.trim()) return; // 제목이나 내용이 없으면 추가되지 않음

    setTodos([newTodos, ...todos]);
    setTitle("");
    setContent("");
  };

  const style = {
    writeTodoBox: {
      fontSize: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 25px 0px 25px",
    },
    inputBox: {
      width: "280px",
      height: "20px",
      borderRadius: "20px",
      border: "none",
      backgroundColor: "#e5e5e5",
      textIndent: "10px",
      outline: "none",
    },
    addBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "23px",
      //border: "2px solid #c2c2c2",
      borderRadius: "20px",
      backgroundColor: "#FFD552",
      outline: "none",
      // addBtn:focus {outline:none;} 어떻게
    }
  };

  return (
    <div style={style.writeTodoBox}>
      제목 <input type="text" value={title} style={style.inputBox} onChange={handleTitleChange} />
      내용 <input type="text" value={content} style={style.inputBox} onChange={handleContentChange} />
      <button onClick={clickAddBtn} style={style.addBtn}>추가하기</button>
    </div>
  );
}

export default WriteTodo