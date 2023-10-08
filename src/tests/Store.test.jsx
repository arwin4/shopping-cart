import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it } from 'vitest';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Root from '../components/Root';
import Error from '../components/Error';
import App from '../components/App';
import Cart from '../components/Cart';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
];

describe('Product overview', () => {
  it('renders after loading screen', () => {
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router} />);
    screen.debug();
    const loadingText = screen.getByText(/Loading/);
    waitForElementToBeRemoved(loadingText).then(() => {
      console.log('removed');
      screen.debug();
    });
  });
});
