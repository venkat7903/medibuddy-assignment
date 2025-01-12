import { FaArrowLeft } from "react-icons/fa";
import { IoLocation, IoWalletOutline, IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="mx-[20px]">
      <div className="flex items-center justify-between md:m-[20px]">
        <div className="flex items-center">
          <FaArrowLeft size={25} className="cursor-pointer" />
          <div className="flex flex-col justify-center ml-[10px]">
            <h1 className="text-black font-bold font-signature text-[24px] flex items-center">
              Billekahalli <IoLocation />
            </h1>
            <p>Sarvabhomanagar Billekahall...</p>
          </div>
        </div>
        <div className="xs:hidden lg:flex min-w-[50%] items-center justify-between mt-[20px] border-[3px] border-gray-400 p-[10px] rounded-lg">
          <input
            placeholder="Find lab tests, diagnostics centres"
            className="w-[75%]"
          />
          <CiSearch size={30} className="justify-self-end" />
        </div>
        <div className="flex items-center">
          {/*<img src={walletcart} alt="walletcart" />*/}
          <div className="flex cursor-pointer mr-[15px]">
            <IoWalletOutline size={45} />
            <span className="bg-blue-500 rounded-lg p-[5px] self-start text-[10px] text-white inline ml-[-20px]">
              4529
            </span>
          </div>
          <div className="flex cursor-pointer">
            <IoCartOutline size={45} />
            <span className="bg-blue-500 rounded-lg p-[5px] self-start text-[10px] text-white inline ml-[-20px]">
              4529
            </span>
          </div>
        </div>
      </div>
      <div className="lg:hidden md:max-w-[60%] md:mx-auto flex items-center justify-between mt-[20px] border-[3px] border-gray-400 p-[10px] rounded-lg">
        <input
          placeholder="Find lab tests, diagnostics centres"
          className="w-[75%]"
        />
        <CiSearch size={30} className="justify-self-end" />
      </div>
    </div>
  );
};

export default Navbar;
