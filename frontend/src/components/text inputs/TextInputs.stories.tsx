import type { Meta, StoryObj } from '@storybook/react-vite';
import Text_field from './Text_field';
import Text_area from './Text_area';

const meta = { title: 'Components/Text inputs' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const TextField: Story = {
  render: () => <Text_field caption="Name" placeholder="Max Mustermann" alt="Name" />,
};

export const TextArea: Story = {
  render: () => <Text_area caption="Nachricht" placeholder="Ihre Nachricht" alt="Nachricht" />,
};
