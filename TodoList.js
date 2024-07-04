const todoList = [
]
let counter = 0;


const add = (name) => {

    const newTodo = {
        id: counter++,
        name: name,
        isComplete: false,
      };

      todoList.push(newTodo);

      return newTodo.id;
}

const clearList = () => {
    todoList.length = 0;
  };

const changeStatus = (id) => {
    const todo = todoList.find((item) => item.id === id);
  
    if (todo) {
      todo.isComplete = !todo.isComplete;
    }
};

export {changeStatus, clearList, todoList, add}