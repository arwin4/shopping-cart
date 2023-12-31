import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe.skip('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    expect(screen.getByRole('heading').textContent).toMatch(/Template/i);
  });
});
