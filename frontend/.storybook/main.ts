import type { StorybookConfig } from '@storybook/react-vite';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  // vite.config.ts in this repo holds no Vite settings, so Storybook adds the React plugin itself.
  viteFinal: (cfg) => ({ ...cfg, plugins: [...(cfg.plugins ?? []), react()] }),
};

export default config;
