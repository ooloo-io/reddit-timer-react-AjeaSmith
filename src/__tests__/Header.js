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

describe('header links redirect to correct pages', () => {
  test('logo redirects to / route', () => {
    const history = createMemoryHistory({
      initialEntries: ['/search/javascript'],
    });
    setup(history);

    const logo = screen.getByRole('link', { name: 'reddit' });
    userEvent.click(logo);
    history.push('/');

    expect(
      screen.screen.getByRole("heading", {
        name: /No reactions to your reddit posts?/i,
      })
    ).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/');
  });

  test('search link redirects to /search/javascript route', () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
    });
    setup(history);

    const search = screen.getByRole('link', { name: 'Search' });
    userEvent.click(search);
    history.push('/search/javascript');

    expect(screen.getByText('Search page')).toBeInTheDocument();
    expect(history.location.pathname).toEqual('/search/javascript');
    screen.debug();
  });
});
