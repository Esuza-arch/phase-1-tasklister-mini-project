document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskDescriptionInput = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = taskDescriptionInput.value;
    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);
      tasksList.appendChild(taskItem);

      taskDescriptionInput.value = "";
    }
  });
});