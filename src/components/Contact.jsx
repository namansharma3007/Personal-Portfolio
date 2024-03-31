import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="flex flex-col gap-2 items-center justify-center w-full h-[400px] text-center">
      <div className="flex flex-col text-gray-200 gap-3">
        <div className="flex items-center gap-3">
          <Image height={50} width={50} src="/icons/gmail.png" alt="mail"/>
          <Link href="mailto:namansharma3007c@gmail.com" className="hover:text-blue-500">
            namansharma3007c@gmail.com
          </Link>
        </div>
        <div className="flex items-center gap-3">
        <Image height={50} width={50} src="/icons/linkedin.png" alt="mail"/>
          <Link
            href="https://www.linkedin.com/in/naman-sharma-b46950226/"
            target="_blank"
            className="hover:text-blue-500"
          >
            LinkedIn: Naman Sharma
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
