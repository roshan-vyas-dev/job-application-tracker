import { useState } from "react";
import ApplicationList from "./components/ApplicationList/ApplicationList";
function App() {
  const [search, setSearch] = useState("");
  const applications = [
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
  ];

  const filteredApplications = applications.filter((application) =>
    application.company.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ApplicationList applications={filteredApplications} />
    </div>
  );
}

export default App;
