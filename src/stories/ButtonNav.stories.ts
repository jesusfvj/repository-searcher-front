import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonNav } from "../components/base/ButtonNav";
import { VscTriangleDown } from "react-icons/vsc";


const meta: Meta<typeof ButtonNav> = {
  title: 'Example/ButtonNav',
  component: ButtonNav,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "Click me",
    icon: React.createElement(VscTriangleDown),
  }
}

export const New: Story = {
  args: {
    text: "Click me",
  }
}