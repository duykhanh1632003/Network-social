import CommentLikeShare from "./CommentLikeShare";
import { MdPublic } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
const Posted = () => {
  return (
    <div className="w-full  mt-[14px] bg-[#FFFFFF]  rounded-md">
      <div className="flex justify-between pl-[16px] pr-[16px] pt-[10px]">
        <div className="flex">
          <div className="w-[41px] h-[41px] rounded-full ">
            <img
              className="w-[41px] h-[41px] rounded-full"
              src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/440954600_850753547097225_8495206908229316571_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFYDRvc535_kgXd_4I8oy2IAgrImf6WfP4CCsiZ_pZ8_u7rA0WFRYpORCqhD8K7-WxPTgiYiFXJgsUHNYFjQFKY&_nc_ohc=Kz--oS43tzUQ7kNvgHUUWZ7&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDom9vKoSBmYjX08ECU_hWr874ZbSuCOk-BkxK-WJ11OQ&oe=663FE6A7"
              alt="avt"
            />
          </div>
          <div className="ml-[8px]">
            <div className="text-md font-bold ">TOP Comments</div>
            <div className="flex">
              <div className="text-[11px] font-medium pr-1 text-[#898A8D]">
                11 phút
              </div>
              <div className="text-[#898A8D]">
                <MdPublic />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center h-[50px]">
          <div className="h-[30px] cursor-pointer w-[30px] rounded-full mt-1 flex items-center justify-center  hover:bg-[#eeeaea9f]">
            <BsThreeDots className="text-2xl" />{" "}
          </div>
          <div className="h-[30px] cursor-pointer w-[30px] mt-1 rounded-full flex items-center justify-center hover:bg-[#eeeaea9f]">
            <CloseIcon fontSize="small" />
          </div>
        </div>
      </div>
      <div className="pl-[16px] pr-[16px] text-sm font-normal mb-[14px]">
        CÔ GÁI LÀO VƯỢT 500KM ĐẾN ĐIỆN BIÊN ❤ <br />
        Cô gái nhỏ nhắn cùng bộ ảnh kỷ niệm đặc biệt với các cán bộ chiến sĩ tại
        Điện Biên. <br />
        Đơn giản vì "Quá mê các anh lính diễu hành" 🥰 📸 Kênh14
      </div>

      <div className="w-[588px] object-contain max-h-[584px]">
        <img
          className="w-[588px] max-h-[584px] object-cover"
          src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/440747081_855714913267755_6161678735149807927_n.jpg?stp=dst-jpg_s600x600&_nc_cat=110&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGlsNZvoCEfBkCPwdpl0bdAVYOB-RDo1KpVg4H5EOjUqh76zwY0jaP8HfTRjD7KHsdd4qU5wKywQ3Txg9XMdnTA&_nc_ohc=mNu2jPnLNW8Q7kNvgEeAx0S&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDzqLJxpc--idViootbR80IcWrZ2eOlV7Fhcdg3P_Z1Yw&oe=663FB133"
          alt="image"
        />
      </div>
      <div className="flex justify-between items-center text-[#77797C] pl-[16px] pr-[16px] pt-[12px]">
        <div className="flex ">
          <div className="w-[19px] h-[19px] rounded-full mr-1 mt-[1px]">
            <img
              src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
              alt="like"
            />
          </div>
          <div className="text-[#77797C] text-[14px]">7.7K</div>
        </div>
        <div className="flex">
          <div className="ml-[-110px] absolute text-[#77797C]">
            200 bình luận
          </div>
          <div className="text-[#77797C] mt-[2px]  text-[14px]">
            1,8K lượt chia sẻ
          </div>
        </div>
      </div>
      <div className="w-full pl-4 pr-4 pt-[12px]">
        <div className="border-b border-gray-200 w-full"></div>
      </div>
      <div className="h-[56px] w-full">
        <CommentLikeShare />
      </div>
    </div>
  );
};

export default Posted;
