import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students added yet</p>
      ) : (
        students.map((student, index) => (
          <div className="student-card" key={index}>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Major:</strong> {student.major}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;

