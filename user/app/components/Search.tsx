import Button from "@mui/material/Button"
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
    return(
       <div className="searchBox w-full h-12.5 bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input type="text" placeholder="Search for products ..." className="w-full h-8.75 
            focus:outline-none bg-inherit text-[#373737] text-[15px] p-5" />
            <Button className=" absolute! top-2 right-1.25 z-50 w-1.25! min-w-8.75! h-8.75 rounded-full! text-black!  " >
                <IoSearchSharp className=" text-black " />
                </Button>
       </div>
    )
}

export default Search
