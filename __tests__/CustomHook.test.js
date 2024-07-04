import { renderHook, act } from "@testing-library/react-native";
import useCustomHook from "../useCustomHook";

describe("useCustomHook tests", () => {
  it("Can set the initial value of the custom hook's state variable", () => {

    // render the hook
    const { result } = renderHook(() => useCustomHook("Initial Value"));

    // Assert that the state variable is initially set
    expect(result.current.someValue).toBe("Initial Value");
  });

  it("Calling toggle updates the state variable", () => {
        //render the hook
        const { result } = renderHook(() => useCustomHook("Pending"));
    
        //assert the initial state
        expect(result.current.someValue).toBe("Pending");
    
        //call the toggle function
        act(() => {
            result.current.toggle();
        });
    
        expect(result.current.someValue).toBe("Finished");
       });
});
