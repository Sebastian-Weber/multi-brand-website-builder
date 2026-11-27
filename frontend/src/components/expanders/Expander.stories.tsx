import type { Meta, StoryObj } from '@storybook/react-vite';
import Expander_sm from './Expander_sm';
import cdColors from '../../utils/cdColors';

// Used in the mobile navbar, so it sits on the navbar background.
const meta = {
  title: 'Components/Expander',
  component: Expander_sm,
  args: {
    DropdownCaption: 'Leistungen',
    DropdownItem1Heading: 'Privatkunden', DropdownItem1Link: '#',
    DropdownItem2Heading: 'Gewerbekunden', DropdownItem2Link: '#',
    DropdownItem3Heading: 'Smart Home', DropdownItem3Link: '#',
  },
  decorators: [(Story) => <div style={{ background: cdColors.primaryColor, padding: 24 }}><Story /></div>],
} satisfies Meta<typeof Expander_sm>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
