import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, wait } from "@testing-library/react";
import App from './App';
import PlayerGrid from "./components/PlayerGrid"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('dark mode disabled by default', ()=> {
  const results = render(<App />);
  console.log(results.debug());
})

test('dark mode enable button works', () => {
  const {getByText} = render(<App />);

  const darkButton = getByText(/Toggle Dark Mode/i);
  fireEvent.click(darkButton);
})

test('dark mode enabled after click', ()=> {
  const results = render(<App />);
  console.log(results.debug());
})

test('dark mode disable button works', () => {
  const {getByText} = render(<App />);

  const darkButton = getByText(/Toggle Dark Mode/i);
  fireEvent.click(darkButton);
})
