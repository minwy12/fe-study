import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaries, onEdit, onRemove }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaries.length} 개의 일기가 있습니다.</h4>
      <div>
        {diaries.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaries: [],
};
export default DiaryList;
