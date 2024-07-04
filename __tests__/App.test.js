// Import the functions from the testing-library
import {render, screen, fireEvent} from '@testing-library/react-native'

// Import the component to test
import App from "../App"
import { add } from '../TodoList';

describe("App.js Tests", () => { 
   it("On initial load, message shows that there are no tasks", () => {
        //Rendering the component
        render(<App/>);

        //Query for the error message element
        const task = screen.getByText("No tasks in the list.");

        //Assert that the error message is present
        expect(task).toBeTruthy();
   });

   it("After adding a task, the flatlist is updated", () => {
      render(<App />);
     
           // Add a todo
           fireEvent.changeText(screen.getByPlaceholderText('Enter task name'), 'New Task');
           fireEvent.press(screen.getByText('Add'));
       
           // Check if the FlatList updates with the new task
           expect(screen.getByText('Task 1 - New Task')).toBeTruthy();
   });
});
