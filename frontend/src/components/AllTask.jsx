import React from "react";
import Task from "./Task/Task";
import { useContext, useState, useEffect } from "react";
import TaskContext from "../context/TaskContext";

function AllTask() {
  const { tasks } = useContext(TaskContext);
  const [subCategory, setSubCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <select
        id="subCategory"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
        onChange={(e) => setSubCategory(e.target.value)}
        value={subCategory}
      >
        <option value="All">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div>
        {tasks.length !== 0 ? (
          tasks.map((task, index) => {
            if (subCategory === task.subCategory) {
              return <Task key={index} task={task} id={index} />;
            } else if (subCategory === "All") {
              return <Task key={index} task={task} id={index} />;
            } else {
              return <></>;
            }
          })
        ) : (
          <h1>No Task Found</h1>
        )}
      </div>
    </>
  );
}

export default AllTask;
