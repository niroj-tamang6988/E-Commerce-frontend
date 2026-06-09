import Link from "next/link";
import Image from "next/image";
import Search from "./Search"
import Badge from '@mui/material/Badge';
import { FiShoppingCart } from "react-icons/fi";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6"
import Tooltip from '@mui/material/Tooltip';


const Header = () =>{

  return(
    <header>
      <div className=" py-2 border border-t border-gray-500 border-b-px ">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] text-black font-medium ">Get up to 50% off new season styles, limited time</p>
            </div>
            <div className=" col2 flex items-center justify-end">
              <ul className="flex gap-3 items-center ">
                <li className="link text-[#504c4c] text-sm  ">
                  <Link href="help-center">Help Center</Link>
                </li>
                <li className="link text-[#504c4c] text-sm ">
                  <Link href="help-center">Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="Header">
        <div className="container flex items-center justify-between">
        <div className="col1 w-[30%]">
          <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={100}
                />
              </Link>
               </div>
        
        <div className="col2 w-[40%] "> 
          <Search/>
        </div>

        <div className="col3 w-[30%] flex items-center pl-5 ">
          <ul className="flex gap-5 items-center justify-end w-full cursor-pointer">
            <li>
              <Link href="/login" className="link text-black transition text-[15px] font-medium ">Login |</Link> &nbsp;
               <Link href="/register" className="link text-black transition text-[15px] font-medium" >Register</Link>
            </li>
            
            <li>
              <Tooltip title="compare">
                <Badge badgeContent={1} color="error">
                  <GoGitCompare  className="text-black" color="action" />
                </Badge>
                </Tooltip>
            </li>

            <li>
              <Tooltip title="wishlist">
                <Badge badgeContent={1} color="error">
                  <FaRegHeart   className="text-black" color="action" />
                </Badge>
                </Tooltip>
            </li>

            <li>
              <Tooltip title="Cart">
                <Badge badgeContent={1} color="error">
                  <FiShoppingCart className="text-black" color="action" />
                </Badge>
                </Tooltip>
            </li>


            </ul>
           </div>
        </div>
      </div>
    </header>
  )
}
export default Header