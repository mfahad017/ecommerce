import type { Meta, StoryObj } from '@storybook/react';

import { IProductProps, Product } from './Product';

const meta: Meta<typeof Product> = {
  title: 'Components/Product',
  component: Product,
};

export default meta;
type Story = StoryObj<typeof Product>;

export const Portrait: Story = {
  args: {
    id: 'as89d7',
    image:
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    price: '£250',
    title: 'The Dandy chair',
  } as IProductProps,
};
export const Landscape: Story = {
  args: {
    id: 'as89d7',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    price: '£980',
    title: 'The Poplar suede sofa',
  } as IProductProps,
};
