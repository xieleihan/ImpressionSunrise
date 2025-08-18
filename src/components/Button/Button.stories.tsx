import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: '这是按钮组件，用于展示不同状态、尺寸和变体的按钮。',
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] },
            description: '按钮的样式变体',
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
            description: '按钮的尺寸',
        },
        disabled: { control: 'boolean', description: '是否禁用按钮' },
        children: { control: 'text', description: '按钮显示的文本或元素' },
    },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
};
