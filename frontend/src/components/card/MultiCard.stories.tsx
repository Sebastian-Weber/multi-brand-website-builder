import type { Meta, StoryObj } from '@storybook/react-vite';
import MultiCard from './multi_card';
import cdColors from '../../utils/cdColors';

// The four backgrounds Section_Text_and_Cards uses.
const meta = {
  title: 'Components/MultiCard',
  component: MultiCard,
  args: {
    heading: 'Privatkunden',
    paragraph: 'Elektroinstallation, Wartung und Reparatur für Ihr Zuhause.',
    listitem1: 'Elektroinstallation',
    listitem2: 'Beleuchtung',
    listitem3: 'Smart Home',
    listitem4: 'E-Check',
    buttonPrimaryProps: { buttonPrimaryCaption: 'Mehr erfahren', buttonPrimaryLink: '#' },
    background: cdColors.primaryBackgroundColorLight,
  },
  decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
} satisfies Meta<typeof MultiCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Mint: Story = {};
export const Yellow: Story = { args: { background: cdColors.secondaryBackgroundColorLight } };
export const Salmon: Story = { args: { background: cdColors.tertiaryBackgroundColorLight } };
export const Blue: Story = { args: { background: cdColors.quaternaryBackgroundColorLight } };
