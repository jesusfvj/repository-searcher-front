import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/base/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Example/Typography',
  component: Typography,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "This is a typography example",
    type: "p1",
    color: "gray",
    family: "system",
  }
}

export const header: Story = {
  args: {
    text: "This is a header typography example",
    type: "title",
    color: "black",
    family: "system",
  }
}

export const danger: Story = {
  args: {
    text: "This is a danger typography example",
    type: "title",
    color: "danger",
    family: "system",
  }
}

export const blue: Story = {
  args: {
    text: "This is a blue typography example",
    type: "title",
    color: "blue",
    family: "system",
  }
}