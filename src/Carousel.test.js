import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();

});


// ************************** smoke and snaphot changes

it("should render Carousel component", function() {
  render(<Carousel />);
});

// it("should match snapshot", function() {
//   const { asFragment } = render(<Carousel />);

//   expect(asFragment()).toMatchSnapshot();

// });



// *********************** Additional Arrow tests

it("should hide left arrow upon Carousel render", function() {
  const { queryByTestId } = render(<Carousel />);

  const leftArrow = queryByTestId("left-arrow");

  expect(leftArrow.style.visibility).toBe('hidden');

});

it("should hide left arrow when returning to the first image", function(){
  const { queryByTestId } = render(<Carousel />);

  const leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");

  fireEvent.click(rightArrow);

  expect(rightArrow.style.visibility).toBe('visible');
  expect(leftArrow.style.visibility).toBe('visible');

  fireEvent.click(leftArrow);

  expect(rightArrow.style.visibility).toBe('visible');
  expect(leftArrow.style.visibility).toBe('hidden');

})


it("should hide right arrow when on last image", function() {
  const { queryByTestId } = render(<Carousel />);

  const rightArrow = queryByTestId("right-arrow");
  const leftArrow = queryByTestId("left-arrow");

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);


  expect(rightArrow.style.visibility).toBe('hidden');
  expect(leftArrow.style.visibility).toBe('visible');

});

it("should show right arrow with a left click while on the last image", function() {
  const { queryByTestId } = render(<Carousel />);

  const rightArrow = queryByTestId("right-arrow");
  const leftArrow = queryByTestId("left-arrow");

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(rightArrow.style.visibility).toBe('hidden');
  expect(leftArrow.style.visibility).toBe('visible');

  fireEvent.click(leftArrow);

  expect(rightArrow.style.visibility).toBe('visible');
  expect(leftArrow.style.visibility).toBe('visible');

});


// what about test for only one photo provided?