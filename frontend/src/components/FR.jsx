import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Task from "./Task/Task";
function FR() {
    const { tasks } = useContext(TaskContext);
    return (
        <div>
            {
                (tasks.length !== 0) ? (
                    tasks.map((task, index) => {
                        return (
                            task.subCategory === "FR" && <Task
                                key={index}
                                task={task}
                                id={index}
                            />
                        )
                    })
                ) : (
                    <h1>No Task Found</h1>
                )
            }
        </div>
    );
}

export default FR;