// Import the functions from the testing-library
import { render, screen, fireEvent } from '@testing-library/react-native'

// Import the component to test
import RowComponent from "../components/RowComponent"

//sample data
const inCompleteTodo = { id: 1, name: "Incomplete Task", isComplete: false };
const completeTodo = { id: 2, name: "Complete Task", isComplete: true };

describe("Row Component test", () => {
      it("Task with isComplete == false should show PENDING and switch OFF", () => {

            //render the rowComponent with inCompleteTodo
            render(<RowComponent task={inCompleteTodo} />);

            // assert that the text PENDING is displayed
            const someValue = screen.getByTestId("someValue")
            expect(someValue.props.children).toBe("Pending")

            //assert that the switch is OFF
            const switchElement = screen.getByTestId("switch");
            expect(switchElement.props.value).toBe(false);
      });

      it("Task with isComplete == true should show FINISHED and switch ON", () => {

            // render the RowComponent with completeTodo
            render(<RowComponent task={completeTodo} />);

            // assert that the text FINISHED is displayed 
            const someValue = screen.getByTestId("someValue")
            expect(someValue.props.children).toBe("Finished")

            // assert that the switch is ON
            const switchElement = screen.getByTestId("switch");
            expect(switchElement.props.value).toBe(true);

      });
});
