import { useDirectoryContext } from "../context/useDirectoryContext"

const Navbar = () => {
  // const{directory} = useDirectoryContext();
  // const directory = "/help"
  return (
    <nav className="w-full h-[35px] bg-[#4E4C45] flex items-center justify-center">
        <p className="text-gray-200">naman@portfolio: {""}</p>
    </nav>
  )
}

export default Navbar