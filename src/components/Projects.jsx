import Image from "next/image"
import Link from "next/link"

import { projects } from "@constants/constants"
const Projects = () => {
  return (
    <section className="flex p-2 flex-col items-center h-[400px] w-full flex-wrap gap-4">
    <p className="text-custom-yellow-color font-bold text-xl">Projects</p>
    <div className="grid grid-cols-3 gap-5">
      {
        projects.map((item, index)=>(
          <Link href={item.link} key={index} target="_blank" className="rounded-lg w-[240px] h-[150px] overflow-hidden border-2 border-gray-600 hover:scale-95 transition-all">
            <Image width={240} height={110} src={item.image} alt={item.title} className="w-[240px] h-[110px]"/>
            <p className="text-gray-200 text-sm">{item.title}</p>
          </Link>
        ))
      }
    </div>
    
  </section>
  )
}

export default Projects