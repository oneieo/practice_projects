
const WriteTodo = ({ title, content, isDone, todos, setTitle, setContent, setTodos }) => {
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

export default WriteTodo