import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../src/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders the links', () => {
    render(
      <div className="app-wrapper">
        <Header />
      </div>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText('Home')).toHaveAttribute('href', '/home');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Form')).toHaveAttribute('href', '/form');
  });
});
