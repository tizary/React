import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Search } from '../src/components/Search/Search';
import { DataApi } from '../src/Home/Home';

describe('<Search />', () => {
  test('Form', () => {
    render(
      <Search
        onGetSearchArr={function (arr: DataApi[]): unknown {
          throw new Error('Function not implemented.');
        }}
        sort={''}
        onGetSearchInfo={function (arg0: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  test('Placeholder', () => {
    render(
      <Search
        onGetSearchArr={function (arr: DataApi[]): unknown {
          throw new Error('Function not implemented.');
        }}
        sort={''}
        onGetSearchInfo={function (arg0: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  test('Button search', () => {
    render(
      <Search
        onGetSearchArr={function (arr: DataApi[]): unknown {
          throw new Error('Function not implemented.');
        }}
        sort={''}
        onGetSearchInfo={function (arg0: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
