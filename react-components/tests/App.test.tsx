import { describe, test, expect } from 'vitest';
import { App } from '../src/App';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';

describe('<App />', () => {
  test('App mounts properly', () => {
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toBeTruthy();

    const h2 = wrapper.container.querySelector('h2');
    expect(h2?.textContent).toBe('Home');
  });
});
