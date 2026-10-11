import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !major) return;

    addStudent({ name, age, major });
    setName("");
    setAge("");
    setMajor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Major: </label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
