import ApplicationCard from "../ApplicationCard/ApplicationCard"

function ApplicationList({applications,onDelete}) {
  return (
    <div>

      {applications.map((application)=>(
        <ApplicationCard application={application}  key={application.id} onDelete={onDelete} />
      ))}

    </div>
  )
}

export default ApplicationList