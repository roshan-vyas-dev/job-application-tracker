import { useState } from "react";
import ApplicationList from "./components/ApplicationList/ApplicationList";
function App() {
  const [search, setSearch] = useState("");
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

  const filteredApplications = applications.filter((application) =>
    application.company.toLowerCase().includes(search.toLowerCase()),
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
      <ApplicationList
        applications={filteredApplications}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;
