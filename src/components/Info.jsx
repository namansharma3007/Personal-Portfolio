const Info = () => {
  return (
    <section className="flex p-2 flex-col h-max w-[full] flex-wrap gap-4">
      <p className="text-custom-yellow-color font-bold text-xl text-center">Commands</p>
      <div className="grid grid-cols-2 w-[550px]">
        <div className="text-custom-yellow-color flex flex-col">
          <span>help</span>
          <span>clear</span>
          <span>bio</span>
          <span>skills</span>
          <span>projects</span>
          <span>contact</span>
        </div>
        <div className="text-gray-200 flex flex-col">
          <span>List of commands</span>
          <span>Clear previous commands</span>
          <span>Biography/About me</span>
          <span>Tech Stacks I use</span>
          <span>Projects I have built</span>
          <span>Contact Details</span>
        </div>
      </div>
    </section>
  );
};

export default Info;
