import { useSelector } from 'react-redux'
import { selectAllProjects } from '../../store/Project/selectors'
import { Link } from "react-router-dom"

export const ProjectListPage = () => {
  const projects = useSelector(selectAllProjects)

  return <div>
    <h1>Projects</h1>
    <ul>
      {projects.map((project) => <li>
        <Link to={`/react_test/project/${project.projectId}`}>{project.title}</Link>
      </li>)}
    </ul>
  </div>
}
