"use client";
import { useState, useEffect, useRef } from "react";
import { useDirectoryContext } from "../context/DirectoryContextProvider";
import Bio from "./Bio";
import Info from "./Info";
import InputCommand from "./InputCommand";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const HeroContainer = () => {
  const{setDirectory} = useDirectoryContext();

  const [firstDisabled, setfirstDisabled] = useState(false);
  const [command, setCommand] = useState("help");
  const [componentsToRender, setComponentsToRender] = useState([]);

  useEffect(() => {
    if (!command) return;
    switch (command.toLowerCase().trim()) {
      case "help":
        setCommand("");
        setDirectory("/help")
        setComponentsToRender([
          ...componentsToRender,
          {
            card: <Info />,
          },
        ]);
        break;
      case "clear":
        setCommand("");
        setDirectory("")
        setComponentsToRender([]);
        break;
      case "bio":
        setDirectory("/bio")
        setCommand("");
        setComponentsToRender([
          ...componentsToRender,
          {
            card: <Bio />,
          },
        ]);
        break;
      case "skills":
        setDirectory("/skills")
        setCommand("");
        setComponentsToRender([
          ...componentsToRender,
          {
            card: <Skills />,
          },
        ]);
        break;
      case "projects":
        setDirectory("/projects")
        setCommand("");
        setComponentsToRender([
          ...componentsToRender,
          {
            card: <Projects />,
          },
        ]);
        break;
      case "contact":
        setDirectory("/contact")
        setCommand("");
        setComponentsToRender([
          ...componentsToRender,
          {
            card: <Contact />,
          },
        ]);
        break;
      default:
        setCommand("");
        setComponentsToRender([
          ...componentsToRender,
          {
            card: (
              <p className="text-gray-200">
                Command not found. Please use "help"
              </p>
            ),
          },
        ]);
    }
    return () => setCommand("");
  }, [command]);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    scrollToBottom();
    if (componentsToRender.length > 0) {
      setfirstDisabled(true);
    } else {
      setfirstDisabled(false);
    }
  }, [componentsToRender]);

 

  return (
    <section className="flex flex-col overflow-auto hero-container">
      <InputCommand
        setCommand={setCommand}
        command={command}
        disabled={firstDisabled}
      />
      {componentsToRender.map((item, index) => (
        <div key={index}>
          {item.card}
          <InputCommand setCommand={setCommand} command={""} disabled={false} index={index} length={componentsToRender.length}/>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </section>
  );
};

export default HeroContainer;
