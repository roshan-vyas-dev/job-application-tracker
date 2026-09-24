function ApplicationCard({ application,onDelete }) {
  return (
    <div>
      <h2>{application.company}</h2>
      <p>{application.position}</p>
      <p>{application.status}</p>
      <p>{application.appliedDate}</p>

      <button onClick={() =>onDelete(application.id)}>Delete</button>
    </div>
  );
}

export default ApplicationCard;
