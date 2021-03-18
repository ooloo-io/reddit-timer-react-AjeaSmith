import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';

const setup = (history = '/search/javascript') => {
  render(
    <Router history={history}>
      <App />
    </Router>,
  );
};
describe('footer links redirect to correct pages', () => {
  test('ooloo.io goes to https://ooloo.io/employers page', () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
    });
    setup(history);
    const footerlink = screen.getByRole('link', { name: 'ooloo.io' });
    userEvent.click(footerlink);
    expect(footerlink).toHaveAttribute('href', 'https://ooloo.io/employers');
  });
  test('logo redirects to / route', () => {
    const history = createMemoryHistory({
      initialEntries: ['/search/javascript'],
    });
    setup(history);

    const footerlogo = screen.getByRole('link', { name: 'footer' });
    userEvent.click(footerlogo);
    history.push('/');

    expect(history.location.pathname).toEqual('/');
    expect(
      screen.getByRole('heading', { name: /No reactions to your reddit posts?/i }),
    ).toBeInTheDocument();
  });
});
