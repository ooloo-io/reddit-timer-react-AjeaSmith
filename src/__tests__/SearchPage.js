import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
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

test('should show loading spinner, then data renders', async () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  setup(history);

  const searchLink = screen.getByRole('link', { name: 'Search' });

  userEvent.click(searchLink);

  screen.getByTestId('loading');

  // this is just a placeholder assertion that tests if the result
  // was rendered correctly
  waitFor(() => {
    expect(screen.getByTestId('loading')).not.toBeInTheDocument();
  });
  waitFor(() => {
    expect(screen.getByText('500')).toBeInTheDocument();
  });
});

test('renders error message', async () => {
  const history = createMemoryHistory({
    initialEntries: ['/search/failing-request'],
  });
  setup(history);
  waitFor(() => {
    expect(screen.findByText(/Something went wrong/i)).toBeInTheDocument();
  });
  screen.debug();
});
