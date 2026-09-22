import ApplicationList from "./components/ApplicationList/ApplicationList";
function App() {
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
  return (
    <div>
      <ApplicationList applications={applications} />
    </div>
  );
}

export default App;
