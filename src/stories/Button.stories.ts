import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

export const White: Story = {
  args: {
    color: "white",
    label: "White Button",
  },
};

export const ColoredBackground: Story = {
  args: {
    backgroundColor: "red",
    label: "Red Button",
  },
};

export const CustomClass: Story = {
  args: {
    size: "middle",
    label: "Button",
    className: "my-custom-class", // 추가적인 클래스 이름
  },
};
