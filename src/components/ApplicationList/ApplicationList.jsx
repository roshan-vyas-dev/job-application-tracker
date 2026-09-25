import ApplicationCard from "../ApplicationCard/ApplicationCard"

function ApplicationList({applications,onDelete,onStatusChange}) {
  return (
    <div>

      {applications.map((application)=>(
        <ApplicationCard application={application}  key={application.id} onDelete={onDelete} onStatusChange={onStatusChange}/>
      ))}

    </div>
  )
}

export default ApplicationList