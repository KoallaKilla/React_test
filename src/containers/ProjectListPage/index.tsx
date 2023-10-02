import { useSelector } from 'react-redux'
import { selectAllProjects } from '../../store/Project/selectors'

export const ProjectListPage = () => {
  const projects = useSelector(selectAllProjects)

  return <div>
    <h1>Projects</h1>
    <ul>
      {projects.map((project) => <li>
        <a key={project.projectId} href={`/react_test/project/${project.projectId}`}>{project.title}</a>
      </li>)}
    </ul>
  </div>
}
