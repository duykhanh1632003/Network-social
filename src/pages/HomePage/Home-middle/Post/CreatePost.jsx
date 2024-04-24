import Modal from "react-bootstrap/Modal";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import "./CreatePost.css";
import { useState, useRef } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { TiFolderAdd } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

const CreatePost = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpenEmoji, setIsOpenEmoji] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [img, setImg] = useState(null);
  const fileInputRef = useRef();
  const [isOpenAddImage, setIsOpenAddImage] = useState(false);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setCursor(e.target.selectionStart);
  };

  const onEmojiClick = (emoji) => {
    const newInputValue =
      inputValue.substring(0, cursor) +
      emoji.native +
      inputValue.substring(cursor);
    setInputValue(newInputValue);
    setCursor(cursor + 2); // Tăng con trỏ lên 2 để di chuyển sau emoji đã chọn
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    setImg({
      name: file.name,
      url: URL.createObjectURL(file),
    });
    setIsOpenAddImage(false);
    setIsOpenImage(true);
    setIsOpenCancel(true);
  };

  const handleCancel = () => {
    setIsOpenAddImage(false);
    setIsOpenCancel(false);
    setIsOpenImage(false);
    setImg(null);
  };

  const handleOnChangePostPhoto = () => {
    setIsOpenAddImage(true);
    setIsOpenCancel(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImg({
      name: file.name,
      url: URL.createObjectURL(file),
    });
    setIsOpenAddImage(false);
    setIsOpenImage(true);
    setIsOpenCancel(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="ml-[160px] flex text-xl font-semibold">
          Tạo bài viết
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="bg-[#FFFFFF] flex flex-col">
          <div className="flex">
            <div className="rounded-full h-[42px] w-[42px] mr-[11px]">
              <img
                className="rounded-full"
                src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
                alt="Avatar"
              />
            </div>
            <div className="h-full">
              <div className="text-sm font-medium">Hoàng Quốc Toàn</div>
              <div className="rounded-lg h-[23px] bg-[#E4E6EB] flex items-center text-xs justify-center cursor-pointer font-semibold mb-[16px]">
                <FaEarthAmericas className="text-xs" />
                <div className="text-xs ml-[3px] mr-[3px]">Công khai</div>
                <FaCaretDown className="text-xs" />
              </div>
            </div>
          </div>
          <div
            className="parent"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <textarea
              value={inputValue}
              onChange={handleChange}
              placeholder="Nguyễn ơi bạn đang nghĩ gì thế?"
              className="w-full bg-transparent outline-none resize-none text-sm input-textarea"
              cols="30"
              rows="2"
            ></textarea>
            <div className="emoji-color">
              <div className="w-[34px] h-[34px] cursor-pointer">
                <img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" />
              </div>
              <div className="w-[23px] h-[24px] cursor-pointer">
                <BsEmojiSmile
                  className="w-[23px] h-[23px]"
                  onClick={() => {
                    setIsOpenEmoji(!isOpenEmoji);
                  }}
                />
                {isOpenEmoji && (
                  <div className="emoji">
                    <Picker
                      data={data}
                      emojiSize={20}
                      emojiButtonSize={28}
                      onEmojiSelect={onEmojiClick}
                      maxFrequentRows={0}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {isOpenCancel && (
            <div className="cancel" onClick={handleCancel}>
              <MdOutlineCancel />
            </div>
          )}
          {isOpenAddImage && !isOpenImage && (
            <div
              className="create-image"
              onClick={() => fileInputRef.current.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="create-image-child">
                <div className="add-button">
                  <div className="icon-tifolder text-2xl">
                    <TiFolderAdd className="TiFolderAdd" />
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    onChange={(e) => handleOnChangeImage(e)}
                  />
                  <div className="add-image">Thêm ảnh/video</div>
                  <div className="pull-image">hoặc kéo và thả</div>
                </div>
              </div>
            </div>
          )}
          {!isOpenAddImage && isOpenImage && (
            <div className="create-image">
              <img className="create-image-image" src={img.url} />
            </div>
          )}
          <div className="add-post">
            <div className="add-post-text">Thêm vào bài viết của bạn</div>
            <div className="add-post-photo" onClick={handleOnChangePostPhoto}>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGWfZPpqbXYHP17Ocs9DLBFPL4YoeGsw5I8vhih4azDkhAkC4jdJ23lJMF0dIdq-M-BquWZr_E3FXEdZjDyG2DD" />
            </div>
          </div>
          <div
            className={
              inputValue !== "" || img !== null
                ? "bottom-post-color"
                : "bottom-post-not-color"
            }
          >
            Đăng
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePost;
