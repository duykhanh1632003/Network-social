import { CommentList } from "../Comment/CommentList";

const DetailPost = () => {
  return (
    <div className="flex">
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>photo</div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
        <div className="flex">
          <div className="flex">
            <div></div>
            <div></div>
          </div>
          <div className="flex">
            <div></div>
            <div></div>
          </div>
          <div className="flex">
            <div></div>
            <div></div>
          </div>
        </div>
        <div>ke</div>
        <div className="flex">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>ke</div>
        <div className="flex">
          <div>Icon</div>
          <div>Tat ca binh luan</div>
        </div>
        <CommentList />
      </div>
    </div>
  );
};

export default DetailPost;
