import type { Meta, StoryObj } from '@storybook/react';

import { IHeroProps, Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Component: Story = {
  args: {
    bgImage:
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  } as IHeroProps,
};
