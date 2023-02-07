import type { Meta, StoryObj } from '@storybook/react';

import { ICardProps, Card } from './Card';
import { DeliveryIcon } from './DeliveryIcon';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Component: Story = {
  args: {
    icon: DeliveryIcon,
    heading: 'Next day as standard',
    subheading: 'Order before 3pm and get your order the next day as standard',
    image: '',
  } as ICardProps,
};
