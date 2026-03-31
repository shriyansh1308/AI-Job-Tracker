import React, { useState, useEffect } from "react";
import API from "./api";

function App() {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: ""
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  const addJob = async () => {
    if (!job.company || !job.role || !job.status) {
      alert("Please fill all fields");
      return;
    }

    await API.post("/add-job", job);

    setJob({ company: "", role: "", status: "" });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: 20, background: "#f4f6f8", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center", color: "#333" }}>
        🚀 Job Tracker Dashboard
      </h1>

      {/* FORM */}
      <div style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        maxWidth: 400,
        margin: "20px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h3>Add Job</h3>

        <input name="company" placeholder="Company" value={job.company} onChange={handleChange} style={inputStyle} />
        <input name="role" placeholder="Role" value={job.role} onChange={handleChange} style={inputStyle} />
        
        <select name="status" value={job.status} onChange={handleChange} style={inputStyle}>
          <option value="">Select Status</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>

        <button onClick={addJob} style={buttonStyle}>
          Add Job
        </button>
      </div>

      {/* JOB LIST */}
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <h3 style={{ textAlign: "center" }}>📋 Job List</h3>

        {jobs.map((j) => (
          <div key={j.id} style={cardStyle}>
            <strong>{j.company}</strong><br />
            {j.role}<br />
            <span style={{
              color:
                j.status === "Offer" ? "green" :
                j.status === "Rejected" ? "red" :
                j.status === "Interview" ? "orange" : "blue"
            }}>
              {j.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🎨 Styles
const inputStyle = {
  width: "100%",
  padding: 10,
  margin: "10px 0",
  borderRadius: 5,
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: 10,
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: 5,
  cursor: "pointer"
};

const cardStyle = {
  background: "white",
  padding: 15,
  margin: "10px 0",
  borderRadius: 8,
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
};

export default App;