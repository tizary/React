import { render, screen } from '@testing-library/react';
import { CardsList } from '../src/components/CardsList/CardsList';
import React from 'react';
import '@testing-library/jest-dom';

describe('CardList', () => {
  it('renders card list section with class cards-list', () => {
    render(<CardsList addInfoApi={[]} />);
    expect(screen.getByRole('list')).toHaveClass('cards-list');
  });
});
