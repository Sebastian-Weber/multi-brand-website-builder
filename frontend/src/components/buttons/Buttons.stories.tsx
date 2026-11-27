import type { Meta, StoryObj } from '@storybook/react-vite';
import Button_primary from './button_primary';
import Button_secondary from './button_secondary';

const meta = { title: 'Components/Buttons' } satisfies Meta;
export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => <Button_primary buttonPrimaryCaption="Termin vereinbaren" buttonPrimaryLink="#" />,
};

export const Secondary: Story = {
  render: () => <Button_secondary buttonSecondaryCaption="Mehr erfahren" buttonSecondaryLink="About" />,
};
