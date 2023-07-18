import { useState, useRef } from "react";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_at,
  onEdit,
  onRemove,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleDoneEdit = () => {
    if (localContent.length < 5) {
      // alert("내용을 5자 이상 입력해주세요.");
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(id + "번 일기를 수정하시겠습니까?")) {
      onEdit(id, localContent);
      setIsEdit(false);
    }
  };

  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(id + "번 일기를 삭제하시겠습니까?")) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          ID: {id} | 작성자: {author} | 감정: {emotion}
        </span>
        <br />
        <span className="date">
          작성 시간(ms): {new Date(created_at).toLocaleDateString()}
        </span>
      </div>
      <div className="content">
        {!isEdit ? (
          <div>{content}</div>
        ) : (
          <div>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
            {localContent.length < 5 && (
              <p style={{ color: "red" }}>5글자 이상 입력해주세요.</p>
            )}
          </div>
        )}
      </div>
      {!isEdit ? (
        <div>
          <button onClick={toggleEdit}>수정하기</button>
          <button onClick={handleRemove}>삭제하기</button>
        </div>
      ) : (
        <div>
          <button onClick={handleDoneEdit}>수정완료</button>
          <button onClick={handleQuitEdit}>수정취소</button>
        </div>
      )}
    </div>
  );
};

export default DiaryItem;
