function taskReducer(tasks, action) {
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          subCategory: action.subCategory,
          subHeading: action.subHeading,
          question: action.question,
          realId: action.realId,
        },
      ];
    }
    case "SET_TASK": {
      return action.payload;
    }
    case "REMOVE_TASK": {
      return tasks.filter((task, index) => index !== action.id);
    }
    case "MARK_DONE": {
      return tasks.map((task, index) => {
        if (index === action.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    }
    default: {
      throw Error("Unknown Action" + action.type);
    }
  }
}

export default taskReducer;
