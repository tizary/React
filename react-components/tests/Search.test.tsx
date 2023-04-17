import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Search } from '../src/components/Search/Search';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

describe('<Search />', () => {
  test('Form', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  test('Placeholder', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  test('Button search', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
