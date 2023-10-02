import { useCallback } from "react"
import {
    useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProjectById } from "../../store/Project/selectors";
import { ProjectId } from "../../store/Project/definitions";
import { RootStore } from "../../store/RootStore";
import { DragDropContext, DropResult, ResponderProvided} from "react-beautiful-dnd";


import "./style.css"
import { Column } from "../../components/Column";
import { Task, TaskStatus } from "../../store/Task";
import { ActionTypes, MoveTask } from "../../store/actions";
import { selectProjectTasks } from "../../store/Task/selectors";

  
export const ProjectPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const projectId = params.projectId as ProjectId
    const project = useSelector(
        useCallback(
            (state: RootStore) => selectProjectById(state, projectId),
            [projectId]
        ));

    const tasks = useSelector(
        useCallback(
            (state: RootStore) => selectProjectTasks(state, projectId),
            [projectId]))
            
    const columns = tasks
        .reduce<Record<string, Task[]>>((memo, task) => {
            memo[task.status].push(task)
            return memo
        }, {
            [TaskStatus.Queue]: [],
            [TaskStatus.Development]: [],
            [TaskStatus.Done]: []
        })

    const onDragEnd = useCallback((result: DropResult, provided: ResponderProvided) => {
        if (!result.destination) {
            return
        }

        const sourceTask = columns[result.source.droppableId][result.source.index]
        const targetTask = columns[result.destination.droppableId][result.destination.index - 1]

        dispatch({
            type: ActionTypes.MoveTask,
            payload: {
                projectId: projectId,
                taskId: sourceTask.id,
                placeAfterTaskId: targetTask?.id || null,
                newStatus: result.destination?.droppableId
            }
        } as MoveTask)
    }, [dispatch, columns, projectId])

    if (!project) {
        return <h1>Project not found</h1>
    }

    return <div className="project-page">
        <h1>{project.title}</h1>
        <div className="columns">
            <DragDropContext onDragEnd={onDragEnd}>
                <Column title="Queue" status={TaskStatus.Queue} tasks={columns[TaskStatus.Queue]} />
                <Column title="Developing" status={TaskStatus.Development} tasks={columns[TaskStatus.Development]} />
                <Column title="Done" status={TaskStatus.Done} tasks={columns[TaskStatus.Done]} />
            </DragDropContext>
        </div>
    </div>
}
