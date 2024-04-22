import Modal from "react-bootstrap/Modal";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
const CreatePost = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="">Tạo bài viết</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="h-[42px] bg-[#FFFFFF] flex">
          <div className="rounded-full h-[42px] w-[42px] mr-[11px]">
            <img
              className="rounded-full"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            />
          </div>
          <div className="h-full ">
            <div className="text-sm font-medium">Hoàng Quốc Toàn</div>
            <div className="rounded-lg h-[23px] bg-[#E4E6EB] flex items-center text-xs justify-center font-semibold">
              <FaEarthAmericas className="text-xs	" />
              <div className="text-xs	ml-[3px] mr-[3px]">Công khai</div>
              <FaCaretDown className="text-xs" />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePost;
