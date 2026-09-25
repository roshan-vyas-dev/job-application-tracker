function ApplicationCard({ application, onDelete,onStatusChange }) {
  return (
    <div>
      <h2>{application.company}</h2>
      <p>{application.position}</p>
 
      <select value={application.status} onChange={(e) => onStatusChange(application.id, e.target.value)}>
        <option value="Applied">Applied</option>
        <option value="Reviewing">Reviewing</option>
        <option value="Interview">Interview</option>
        <option value="Hired">Hired</option>
        <option value="Rejected">Rejected</option>
      </select>

      <p>{application.appliedDate}</p>

      <button onClick={() => onDelete(application.id)}>Delete</button>
    </div>
  );
}

export default ApplicationCard;
