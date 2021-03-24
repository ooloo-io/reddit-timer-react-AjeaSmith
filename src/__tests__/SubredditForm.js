import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setup = (history) => {
  render(
    <Router history={history}>
      <App />
    </Router>,
  );
};

test('it renders search page on search link click', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  setup(history);

  const searchLink = screen.getByRole('link', { name: /Search/i });
  userEvent.click(searchLink);

  expect(
    screen.getByRole('heading', {
      name: /Find the best time for a subreddit/i,
    }),
  ).toBeInTheDocument();
});

test('input value changes URL param', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  setup(history);

  const inputField = screen.getByRole('textbox', { name: 'r/' });
  const searchButton = screen.getByRole('button', { name: /Search/i });
  expect(inputField).toHaveValue('javascript');

  userEvent.clear(inputField);
  userEvent.type(inputField, 'reactjs');

  userEvent.click(searchButton);

  history.push('/search/reactjs');
  expect(history.location.pathname).toEqual('/search/reactjs');
});
