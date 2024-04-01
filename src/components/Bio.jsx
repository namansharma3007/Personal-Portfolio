import Image from "next/image";
import Link from "next/link";

const Bio = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center w-full h-[400px] text-center">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-black">
        <Image
          src="/images/myImage.jpg"
          alt="Hero-image"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <h2 className="text-3xl font-bold text-custom-yellow-color">I'm Naman Sharma</h2>
      <p className="text-gray-200 mx-[100px]">Passionate full stack web developer with a flair for crafting seamless digital experiences. Expertise in front-end aesthetics and back-end functionality. Committed to exceeding expectations and driving innovation in every project.</p>
      <Link href="https://bit.ly/resume-namanSharma" target="_blank" className="rounded-full py-1 px-4 text-gray-900 bg-blue-500 transition-all hover:scale-95">Resume</Link>
    </section>
  );
};

export default Bio;
