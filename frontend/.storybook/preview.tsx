import type { Preview } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import '../src/styles/tokens.css';
import '../src/index.css';

const preview: Preview = {
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  parameters: {
    layout: 'padded',
    a11y: { test: 'error' },
  },
};

export default preview;
