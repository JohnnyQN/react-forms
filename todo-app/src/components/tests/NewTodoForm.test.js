import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "../NewTodoForm";

// Smoke test
test("renders without crashing", () => {
  render(<NewTodoForm createTodo={() => {}} />);
});

// Snapshot test
test("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm createTodo={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

// Test form input and submission
test("can submit a new todo", () => {
  const createTodoMock = jest.fn();
  const { getByLabelText, getByText } = render(<NewTodoForm createTodo={createTodoMock} />);

  // Simulate user input
  const input = getByLabelText("Enter a new task:");
  fireEvent.change(input, { target: { value: "Test Todo" } });

  // Submit the form
  fireEvent.click(getByText("Add Todo"));

  // Check that the createTodo function was called with the correct data
  expect(createTodoMock).toHaveBeenCalledWith(expect.objectContaining({ task: "Test Todo" }));
});
