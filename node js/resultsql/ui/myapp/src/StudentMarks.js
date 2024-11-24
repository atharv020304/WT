import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentMarks = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState("");
    const [subjectName, setSubjectName] = useState("");
    const [mseMarks, setMseMarks] = useState("");
    const [eseMarks, setEseMarks] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    // Fetch students and marks on component mount
    useEffect(() => {
        axios
            .get("http://localhost:5959/getresult")
            .then((response) => {
                setStudents(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching students:", error);
                setMessage("Failed to load student data.");
                setLoading(false);
            });
    }, []);

    // Handle adding marks
    const handleAddMarks = (e) => {
        e.preventDefault();

        if (!selectedStudentId || !subjectName || !mseMarks || !eseMarks) {
            setMessage("All fields are required!");
            return;
        }

        const data = {
            student_id: selectedStudentId,
            subject_name: subjectName,
            mse_marks: Number(mseMarks),
            ese_marks: Number(eseMarks),
        };

        axios
            .post("http://localhost:5959/marks", data)
            .then((response) => {
                setMessage(response.data.message || "Marks added successfully!");
                // Reset the form
                setSelectedStudentId("");
                setSubjectName("");
                setMseMarks("");
                setEseMarks("");
            })
            .catch((error) => {
                console.error("Error adding marks:", error);
                setMessage("Failed to add marks. Please try again.");
            });
    };

    return (
        <div className="container">
            <h2 className="mt-3">Student List</h2>
            {loading ? (
                <p>Loading students...</p>
            ) : students.length === 0 ? (
                <p>No students found.</p>
            ) : (
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Roll Number</th>
                            <th>Subject</th>
                            <th>MSE Marks</th>
                            <th>ESE Marks</th>
                            <th>Final Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.roll_number}</td>
                                <td>{student.subject_name}</td>
                                <td>{student.mse_marks}</td>
                                <td>{student.ese_marks}</td>
                                <td>{student.final_marks.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <h2 className="mt-5">Add Marks</h2>
            <form onSubmit={handleAddMarks} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="student" className="form-label">
                        Select Student:
                    </label>
                    <select
                        id="student"
                        className="form-select"
                        value={selectedStudentId}
                        onChange={(e) => setSelectedStudentId(e.target.value)}
                        aria-label="Select student"
                    >
                        <option value="">-- Select Student --</option>
                        {students.map((student) => (
                            <option key={student.id} value={student.id}>
                                {student.name} (Roll: {student.roll_number})
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                        Subject Name:
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="form-control"
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                        placeholder="Enter subject name"
                        aria-label="Subject Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="mse" className="form-label">
                        MSE Marks:
                    </label>
                    <input
                        type="number"
                        id="mse"
                        className="form-control"
                        value={mseMarks}
                        onChange={(e) => setMseMarks(e.target.value)}
                        placeholder="Enter MSE marks"
                        aria-label="MSE Marks"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ese" className="form-label">
                        ESE Marks:
                    </label>
                    <input
                        type="number"
                        id="ese"
                        className="form-control"
                        value={eseMarks}
                        onChange={(e) => setEseMarks(e.target.value)}
                        placeholder="Enter ESE marks"
                        aria-label="ESE Marks"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Marks
                </button>
            </form>
            {message && <p className="mt-3 alert alert-info">{message}</p>}
        </div>
    );
};

export default StudentMarks;
