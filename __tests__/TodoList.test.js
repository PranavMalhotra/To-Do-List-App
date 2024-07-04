import { todoList, add, clearList, changeStatus } from "../TodoList";

describe("Todo list operations", ()=>{
    it("Add a task", () => {   
        const initialLength = todoList.length;

        //Act
        const newTodoId = add("Do Homework");

        //After calling addTask() on an empty list
        //The number of items in the list should increase by 1
        expect(todoList.length).toBe(initialLength + 1);

        //The function should return the id of the added todo, and it should be defined
        expect(newTodoId).toBeDefined();
    });

    it("Delete all tasks", () => {
        //Arrange
        add("Do Homework");
        add("Walk the Dog");

        clearList();

        //After calling clearList(), there should be no more items in the list.
        expect(todoList.length).toBe(0);
    });

    it("changeStatus can be used to mark a task as complete", () => {
        const todoId = add("Do Homework");

        const todoBeforeStatusChange = todoList.find((todo) => todo.id === todoId);

        //The todo's isComplete property should be initially set to false
        expect(todoBeforeStatusChange).toBeDefined();
        expect(todoBeforeStatusChange.isComplete).toBe(false);

        changeStatus(todoId);
        const todoAfterStatusChange = todoList.find((todo) => todo.id === todoId);

        //Use changeStatus() to mark the todo as completed
        //After the change, the todo's isComplete should be set to true
        expect(todoAfterStatusChange).toBeDefined();
        expect(todoAfterStatusChange.isComplete).toBe(true);
    });
});