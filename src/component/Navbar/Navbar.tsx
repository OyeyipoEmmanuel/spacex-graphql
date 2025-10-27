import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";


const Navbar = () => {
    return (
        <nav className='fixed z-50 w-full flex flex-col space-y-4 justify-between px-6 py-3 md:px-16 bg-[#020618] md:flex-row md:space-y-0 backdrop-blur-xl'>
            <section className="flex items-center space-x-2">
                <div className="bg-[#168DF8] rounded-md p-2 shadow-[#153C80] shadow-xl">
                    <HiOutlineRocketLaunch className="text-white text-lg"/>
                </div>
                <h2 className=" text-[#00C6F8] text-lg">SpaceX Launch Explorer</h2>
            </section>

            <section className="md:w-[40%]">
                <div className="flex flex-row items-center space-x-3 border border-[#13264B] px-3 py-2 rounded-lg shadow-md shadow-[#051736]">
                    <IoIosSearch className="text-gray-400 w-[8%] text-lg"/>
                    <input type="text" placeholder="Search Launches..." className="text-white outline-none placeholder:text-gray-400 w-[90%]"/>
                </div>
            </section>
        </nav>
    )
}

export default Navbar