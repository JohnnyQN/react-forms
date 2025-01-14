import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("can add a new box", () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  // Simulate user input
  fireEvent.change(getByLabelText("Width"), { target: { value: "200" } });
  fireEvent.change(getByLabelText("Height"), { target: { value: "200" } });
  fireEvent.change(getByLabelText("Background Color"), { target: { value: "red" } });

  // Simulate form submission
  fireEvent.click(getByText("Add Box"));

  // Check if the box was added
  expect(getByText("Remove")).toBeInTheDocument();
});

test("can remove a box", () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  // Add a box
  fireEvent.change(getByLabelText("Width"), { target: { value: "200" } });
  fireEvent.change(getByLabelText("Height"), { target: { value: "200" } });
  fireEvent.change(getByLabelText("Background Color"), { target: { value: "red" } });
  fireEvent.click(getByText("Add Box"));

  // Remove the box
  fireEvent.click(getByText("Remove"));

  // Confirm the box was removed
  expect(queryByText("Remove")).not.toBeInTheDocument();
});
