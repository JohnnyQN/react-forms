import { render, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

// Smoke test
test("renders without crashing", () => {
  render(<Todo id={1} task="Test Todo" removeTodo={() => {}} />);
});

// Snapshot test
test("matches snapshot", () => {
  const { asFragment } = render(<Todo id={1} task="Test Todo" removeTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Test remove functionality
test("calls removeTodo function on button click", () => {
  const removeTodoMock = jest.fn();
  const { getByText } = render(<Todo id={1} task="Test Todo" removeTodo={removeTodoMock} />);
  
  fireEvent.click(getByText("X"));
  expect(removeTodoMock).toHaveBeenCalledWith(1);
});
