
function ApplicationCard({application}) {
  return (
    <div>
      <h2>{application.company}</h2>
      <p>{application.position}</p>
      <p>{application.status}</p>
      <p>{application.appliedDate}</p>


    </div>
  )
}

export default ApplicationCard