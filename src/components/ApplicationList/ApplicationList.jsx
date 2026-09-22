import ApplicationCard from "../ApplicationCard/ApplicationCard"

function ApplicationList({applications}) {
  return (
    <div>

      {applications.map((application)=>(
        <ApplicationCard application={application}  key={application.id} />
      ))}

    </div>
  )
}

export default ApplicationList