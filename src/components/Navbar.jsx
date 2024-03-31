"use client";
import { useDirectoryContext } from "../context/DirectoryContextProvider";

const Navbar = () => {
  const { directory } = useDirectoryContext();

  return (
    <nav className="w-full h-[35px] bg-[#4E4C45] flex items-center text-gray-200">
      <div className="flex gap-1 ml-[18rem]">
        <p>naman@portfolio: </p>
        <span>{directory}</span>
      </div>
    </nav>
  );
};

export default Navbar;
