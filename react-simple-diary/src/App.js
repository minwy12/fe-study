import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import MyComponent from "./component/SearchableSelectBox";

// const dummyList = [
//   {
//     id: 1,
//     author: "owen.min",
//     content: "hello world",
//     emotion: 1,
//     created_at: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "owen",
//     content: "hello world",
//     emotion: 4,
//     created_at: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataID = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_at = new Date().getTime();
    const newItem = {
      id: dataID.current,
      author: author,
      content,
      emotion,
      created_at,
    };
    dataID.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    setData(data.filter((it) => it.id !== targetId));
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaries={data} onEdit={onEdit} onRemove={onRemove} />
      <MyComponent />
    </div>
  );
}

export default App;
