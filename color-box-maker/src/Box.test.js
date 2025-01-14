import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import Box from './Box';

function addBox(boxList, width = '2', height = '2', color = 'red') {
  const widthInput = boxList.getByLabelText('Width');
  const heightInput = boxList.getByLabelText('Height');
  const colorInput = boxList.getByLabelText('Background Color');

  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  fireEvent.change(colorInput, { target: { value: color } });

  const addButton = boxList.getByText('Add Box');
  fireEvent.click(addButton);
}

it('renders without crashing', () => {
  render(<BoxList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', () => {
  const boxList = render(<BoxList />);

  // Verify no boxes initially
  expect(boxList.queryByText('Remove')).not.toBeInTheDocument();

  // Add a box
  addBox(boxList);

  // Verify the box is now displayed
  expect(boxList.getByText('Remove')).toBeInTheDocument();
});

it('can remove a box', () => {
  const boxList = render(<BoxList />);

  // Add a box
  addBox(boxList);

  // Remove the box
  const removeButton = boxList.getByText('Remove');
  fireEvent.click(removeButton);

  // Verify the box is removed
  expect(removeButton).not.toBeInTheDocument();
});
