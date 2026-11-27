import type { Meta, StoryObj } from '@storybook/react-vite';
import List from './List';

const meta = {
  title: 'Components/List',
  component: List,
  args: { listItems: ['Elektroinstallation', 'Beleuchtung', 'Smart Home', 'E-Check'] },
} satisfies Meta<typeof List>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
