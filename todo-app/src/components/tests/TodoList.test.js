import { render, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

// Smoke test
test("renders without crashing", () => {
  render(<TodoList />);
});

// Snapshot test
test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

// Test adding and removing todos
test("can add and remove todos", () => {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  // Add a todo
  const input = getByLabelText("Enter a new task:");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(getByText("Add Todo"));

  // Check that the todo is added
  expect(getByText("New Todo")).toBeInTheDocument();

  // Remove the todo
  fireEvent.click(getByText("X"));

  // Check that the todo is removed
  expect(queryByText("New Todo")).not.toBeInTheDocument();
});
