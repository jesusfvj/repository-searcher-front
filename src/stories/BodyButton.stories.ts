import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VscTriangleDown } from "react-icons/vsc";
import { ButtonComponent } from "../components/base/ButtonComponent";
import { AiOutlineSmile } from "react-icons/ai"

const meta: Meta<typeof ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    text: "Click me",
    size: "md",
    color: "gray",
    roundSide: "none",
  }
}

export const New: Story = {
  args: {
    text: "Click me",
    size: "md",
    color: "new",
    roundSide: "none",
  }
}

export const ButtonWithIcon: Story = {
  args: {
    text: "Click me",
    size: "md",
    color: "gray",
    roundSide: "none",
    icon: React.createElement(AiOutlineSmile),
  }
}

export const ButtonWithDropdown: Story = {
  args: {
    text: "Click me",
    size: "md",
    color: "new",
    roundSide: "none",
    dropDown: React.createElement(VscTriangleDown),
  }
}
