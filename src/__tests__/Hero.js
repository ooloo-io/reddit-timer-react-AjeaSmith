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

test('Heat map image should redirect to search page', () => {
  const history = createMemoryHistory({
    initialEntries: ['/'],
  });
  setup(history);

  expect(
    screen.getByRole('heading', { name: /No reactions to your reddit posts?/i }),
  );
  userEvent.click(screen.getByRole('link', { name: 'heatmap' }));
  expect(
    screen.getByRole('heading', { name: /Find the best time for a subreddit/i }),
  ).toBeInTheDocument();
});

test('CTA button should redirect to search page ', () => {
  const history = createMemoryHistory({
    initialEntries: ['/search/javascript'],
  });
  setup(history);

  expect(
    screen.getByRole('heading', { name: /Find the best time for a subreddit/i }),
  ).toBeInTheDocument();

  const logo = screen.getByRole('link', { name: 'reddit' });

  userEvent.click(logo);

  expect(
    screen.getByRole('heading', { name: /No reactions to your reddit posts?/i }),
  ).toBeInTheDocument();

  const CTAButton = screen.getByRole('link', {
    name: 'Show me the best time',
  });

  userEvent.click(CTAButton);
  expect(
    screen.getByRole('heading', { name: /Find the best time for a subreddit/i }),
  ).toBeInTheDocument();
});
