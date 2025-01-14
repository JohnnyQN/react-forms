import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("renders without crashing", () => {
  render(<NewBoxForm createBox={() => {}} />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm createBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

test("can input width, height, and background color", () => {
  const { getByLabelText } = render(<NewBoxForm createBox={() => {}} />);

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Background Color");

  fireEvent.change(widthInput, { target: { value: "200" } });
  fireEvent.change(heightInput, { target: { value: "200" } });
  fireEvent.change(colorInput, { target: { value: "red" } });

  expect(widthInput.value).toBe("200");
  expect(heightInput.value).toBe("200");
  expect(colorInput.value).toBe("red");
});
