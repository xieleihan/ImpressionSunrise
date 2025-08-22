import type { Meta, StoryFn } from '@storybook/react-vite';
import Button from './Button';
import type { ButtonProps } from './Button';
import '../../base.scss';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Button 按钮组件，提供丰富的样式和交互功能，支持 Ant Design 风格的所有特性。',
            },
        },
    },
    argTypes: {
        type: {
            control: { type: 'select', options: ['default', 'primary', 'dashed', 'text', 'link'] },
            description: '按钮类型',
        },
        size: {
            control: { type: 'select', options: ['large', 'middle', 'small'] },
            description: '按钮大小',
        },
        shape: {
            control: { type: 'select', options: ['default', 'circle', 'round'] },
            description: '按钮形状',
        },
        block: { control: 'boolean', description: '将按钮宽度调整为其父宽度的选项' },
        danger: { control: 'boolean', description: '设置危险按钮' },
        ghost: { control: 'boolean', description: '幽灵属性，使按钮背景透明' },
        disabled: { control: 'boolean', description: '按钮失效状态' },
        loading: { control: 'boolean', description: '设置按钮载入状态' },
        children: { control: 'text', description: '按钮内容' },
    },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// 基础示例
export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
    type: 'default',
    size: 'middle',
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    type: 'primary',
    size: 'middle',
};

export const Dashed = Template.bind({});
Dashed.args = {
    children: 'Dashed Button',
    type: 'dashed',
    size: 'middle',
};

export const Text = Template.bind({});
Text.args = {
    children: 'Text Button',
    type: 'text',
    size: 'middle',
};

export const Link = Template.bind({});
Link.args = {
    children: 'Link Button',
    type: 'link',
    size: 'middle',
};

// 尺寸示例
export const Sizes: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button size="large" type="primary">Large</Button>
        <Button size="middle" type="primary">Middle</Button>
        <Button size="small" type="primary">Small</Button>
    </div>
);

// 形状示例
export const Shapes: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button type="primary">Default</Button>
        <Button type="primary" shape="circle">A</Button>
        <Button type="primary" shape="round">Round</Button>
    </div>
);

// 危险按钮
export const Danger = Template.bind({});
Danger.args = {
    children: 'Danger Button',
    type: 'primary',
    danger: true,
    size: 'middle',
};

export const DangerVariants: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" danger>Primary Danger</Button>
        <Button type="default" danger>Default Danger</Button>
        <Button type="text" danger>Text Danger</Button>
        <Button type="link" danger>Link Danger</Button>
    </div>
);

// 幽灵按钮
export const Ghost = Template.bind({});
Ghost.args = {
    children: 'Ghost Button',
    type: 'primary',
    ghost: true,
    size: 'middle',
};

export const GhostVariants: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', background: '#001529', padding: '20px', borderRadius: '8px' }}>
        <Button type="primary" ghost>Primary Ghost</Button>
        <Button type="default" ghost>Default Ghost</Button>
        <Button type="dashed" ghost>Dashed Ghost</Button>
    </div>
);

// 禁用状态
export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled Button',
    type: 'primary',
    disabled: true,
    size: 'middle',
};

export const DisabledVariants: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" disabled>Primary</Button>
        <Button type="default" disabled>Default</Button>
        <Button type="dashed" disabled>Dashed</Button>
        <Button type="text" disabled>Text</Button>
        <Button type="link" disabled>Link</Button>
    </div>
);

// 加载状态
export const Loading = Template.bind({});
Loading.args = {
    children: 'Loading Button',
    type: 'primary',
    loading: true,
    size: 'middle',
};

export const LoadingVariants: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" loading>Loading</Button>
        <Button type="default" loading>Loading</Button>
        <Button type="primary" loading shape="circle" />
        <Button type="primary" loading size="small">Loading</Button>
    </div>
);

// 块级按钮
export const Block = Template.bind({});
Block.args = {
    children: 'Block Button',
    type: 'primary',
    block: true,
    size: 'middle',
};

// 带图标的按钮
export const WithIcon: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" icon={<span>📄</span>}>With Icon</Button>
        <Button type="primary" icon={<span>⬇️</span>} />
        <Button type="primary" shape="circle" icon={<span>👤</span>} />
        <Button type="text" icon={<span>⚙️</span>}>Settings</Button>
    </div>
);

// 链接按钮
export const LinkButton: StoryFn = () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="link" href="https://github.com">GitHub</Button>
        <Button type="primary" href="https://github.com" target="_blank">External Link</Button>
        <Button type="link" href="https://github.com" disabled>Disabled Link</Button>
    </div>
);

// 综合示例
export const AllTypes: StoryFn = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button type="primary">Primary</Button>
            <Button type="default">Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button type="primary" danger>Primary Danger</Button>
            <Button type="default" danger>Default Danger</Button>
            <Button type="text" danger>Text Danger</Button>
            <Button type="link" danger>Link Danger</Button>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button type="primary" ghost>Primary Ghost</Button>
            <Button type="default" ghost>Default Ghost</Button>
            <Button type="dashed" ghost>Dashed Ghost</Button>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button type="primary" loading>Loading</Button>
            <Button type="default" disabled>Disabled</Button>
            <Button type="primary" size="small">Small</Button>
            <Button type="primary" size="large">Large</Button>
        </div>
    </div>
);

// 响应式示例
export const Responsive: StoryFn = () => (
    <div style={{ width: '100%' }}>
        <h3>在不同屏幕尺寸下的表现</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <Button type="primary" size="large">Large Button</Button>
            <Button type="primary" size="middle">Middle Button</Button>
            <Button type="primary" size="small">Small Button</Button>
        </div>
        <Button type="primary" block style={{ marginBottom: '16px' }}>Block Button</Button>
        <div style={{ width: '300px' }}>
            <Button type="primary" block>Constrained Width Block</Button>
        </div>
    </div>
);
