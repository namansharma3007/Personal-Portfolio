"use client"
import { useDirectoryContext } from "../context/DirectoryContextProvider";

const Navbar = () => {
  const { directory } = useDirectoryContext();
  
  return (
    <nav className="w-full h-[35px] bg-[#4E4C45] flex items-center justify-center">
      <p className="text-gray-200">naman@portfolio: {directory}</p>
    </nav>
  );
};

export default Navbar;
