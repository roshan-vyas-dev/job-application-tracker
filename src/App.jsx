import { useState } from "react";
import ApplicationList from "./components/ApplicationList/ApplicationList";
function App() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      status: "Applied",
      appliedDate: "2026-09-20",
    },
    {
      id: 2,
      company: "Microsoft",
      position: "React Developer",
      status: "Interview",
      appliedDate: "2026-09-18",
    },
  ]);

 const filteredApplications = applications.filter(
  (application) =>
    application.company.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter === "All" || application.status === statusFilter)
);

  const handleDelete = (id) => {
    setApplications((currentApplications) =>
      currentApplications.filter((application) => application.id !== id),
    );
  };

  const handleStatusChange = (id, newStatus) => {
    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === id
          ? { ...application, status: newStatus }
          : application,
      ),
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
  <option value="All">All Statuses</option>
  <option value="Applied">Applied</option>
  <option value="Reviewing">Reviewing</option>
  <option value="Interview">Interview</option>
  <option value="Hired">Hired</option>
  <option value="Rejected">Rejected</option>
</select>
      <button
        onClick={() => setSearch("")}
        disabled={!search}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Clear
      </button>

      <p>Applications: {filteredApplications.length}</p>

      <p>
        Applied:{" "}
        {
          applications.filter((application) => application.status === "Applied")
            .length
        }
      </p>

      <p>
        Interview:{" "}
        {
          applications.filter(
            (application) => application.status === "Interview",
          ).length
        }
      </p>

      <ApplicationList
        applications={filteredApplications}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;
