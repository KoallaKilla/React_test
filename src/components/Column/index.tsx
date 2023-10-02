import React from "react";
import { Task, TaskStatus } from "../../store/Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

import "./style.css"

export const Column: React.FC<{
    title: string,
    status: TaskStatus,
    tasks: Task[],
}> = (props) => {
    const grid = 8;

    const getListStyle = (isDraggingOver: boolean) => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: grid,
        width: 250
    });
  
    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: grid * 2,
        margin: `0 0 ${grid}px 0`,
      
        // change background colour if dragging
        background: isDragging ? "#fff" : "#eee",
        boxShadow: isDragging ? "5px 5px 10px #0005" : "none",
      
        // styles we need to apply on draggables
        ...draggableStyle
    });
      
    return <div className="task-column">
        <h2>{props.title}</h2>
        <Droppable droppableId={props.status}>
        {(provided, snapshot) => (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            >
            {props.tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                        )}
                    >
                        #{task.id} {task.title}
                    </div>
                )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
        )}
        </Droppable>
    </div>
}
