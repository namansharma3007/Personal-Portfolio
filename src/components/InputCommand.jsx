"use client";
import { useState } from "react";

const InputCommand = ({ setCommand, command, disabled, index, length }) => {
  const [typedCommand, setTypedCommand] = useState(command || "");
  function handleSubmit(e) {
    e.preventDefault();
  }

  function setMainCommand() {
    setCommand(typedCommand);
  }

  const disabledValue = disabled || (index < length - 1);

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center">
      <p className="text-[#73A32D]">naman@portfolio:~</p>
      <input
        type="text"
        className="bg-transparent w-full pl-3 focus:outline-none text-gray-200"
        disabled={disabledValue}
        value={typedCommand}
        onChange={(e) => setTypedCommand(e.target.value)}
      />
      <button type="submit" onClick={setMainCommand}></button>
    </form>
  );
};

export default InputCommand;
