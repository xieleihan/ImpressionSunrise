import type { Meta, StoryFn } from '@storybook/react-vite';
import Loading from './Loading';
import type { LoadingProps } from './Loading';

const meta: Meta<typeof Loading> = {
    title: 'Components/Loading',
    component: Loading,
    parameters: {
        docs: {
            description: {
                component: '通用 Loading 组件，支持 default、circle 和 spin 三种类型，可自定义颜色、大小和提示文本。',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        colorArray: {
            description: '小球或环形颜色数组，最多四个颜色',
            control: { type: 'object' },
        },
        size: {
            description: '加载组件的尺寸，单位 px',
            control: { type: 'number', min: 20, max: 200, step: 5 },
        },
        className: { description: '自定义类名', control: 'text' },
        tip: { description: '加载提示文本', control: 'text' },
        LoadingType: {
            description: '加载类型',
            control: { type: 'select', options: ['default', 'circle', 'spin'] },
        },
    },
};

export default meta;

type Story = StoryFn<typeof Loading>;

// 默认小球动画
export const Default: Story = (args: LoadingProps) => <Loading {...args} />;
Default.args = {
    LoadingType: 'default',
    size: 50,
    colorArray: ['#f06c9b', '#f5b96f', '#a3c4f3', '#6ca18f'],
    tip: 'Loading...',
};

// 圆环动画
export const Circle: Story = (args: LoadingProps) => <Loading {...args} />;
Circle.args = {
    LoadingType: 'circle',
    size: 50,
    colorArray: ['#7aa9e9'],
    tip: 'Loading circle...',
};

// 自旋动画
export const Spin: Story = (args: LoadingProps) => <Loading {...args} />;
Spin.args = {
    LoadingType: 'spin',
    size: 50,
    tip: 'Loading spin...',
};
