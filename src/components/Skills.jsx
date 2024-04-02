import Image from "next/image";
import { skills } from "@constants/constants";

const Skills = () => {
  return (
    <section className="flex p-2 flex-col items-center h-auto w-full flex-wrap gap-4">
      <p className="text-custom-yellow-color font-bold text-xl">Skills</p>
      <div className="grid grid-cols-7 gap-3">
        {skills.map((item) => (
          <div key={item.title} className="border-2 rounded-lg overflow-hidden h-[100px] w-[100px] border-gray-600 flex flex-col items-center justify-between p-2  grow cursor-default">
            <Image src={item.image} width={60} height={60} alt={item.title} />
            <span className="text-gray-200 text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
