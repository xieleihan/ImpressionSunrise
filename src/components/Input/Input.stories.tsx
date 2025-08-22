import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'middle', 'large'],
        },
        status: {
            control: { type: 'select' },
            options: ['error', 'warning', undefined],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        bordered: {
            control: { type: 'boolean' },
        },
        allowClear: {
            control: { type: 'boolean' },
        },
        showCount: {
            control: { type: 'boolean' },
        },
        maxLength: {
            control: { type: 'number' },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础输入框
export const Default: Story = {
    args: {
        placeholder: '请输入内容',
        size: 'middle',
    },
};

// 不同大小
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Input placeholder="Small size" size="small" />
            <Input placeholder="Middle size (default)" size="middle" />
            <Input placeholder="Large size" size="large" />
        </div>
    ),
};

// 带前缀后缀
export const WithPrefixSuffix: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Input
                placeholder="请输入网址"
                prefix={<span>🌐</span>}
            />
            <Input
                placeholder="请输入邮箱"
                suffix={<span>@gmail.com</span>}
            />
            <Input
                placeholder="搜索"
                prefix={<span>🔍</span>}
                suffix={<span>⌘K</span>}
            />
        </div>
    ),
};

// 带前置后置标签
export const WithAddons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
            <Input
                placeholder="请输入网址"
                addonBefore="https://"
                addonAfter=".com"
            />
            <Input
                placeholder="请输入金额"
                addonBefore="¥"
                addonAfter="元"
            />
        </div>
    ),
};

// 清除功能
export const AllowClear: Story = {
    args: {
        placeholder: '可清除的输入框',
        allowClear: true,
        defaultValue: '这是一些文本',
    },
};

// 字数统计
export const ShowCount: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Input
                placeholder="显示字数"
                showCount
                defaultValue="Hello World"
            />
            <Input
                placeholder="限制最大长度"
                showCount
                maxLength={50}
                defaultValue="限制50个字符"
            />
        </div>
    ),
};

// 状态
export const Status: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Input placeholder="正常状态" />
            <Input placeholder="警告状态" status="warning" />
            <Input placeholder="错误状态" status="error" />
            <Input placeholder="禁用状态" disabled defaultValue="禁用的输入框" />
        </div>
    ),
};

// 无边框
export const Borderless: Story = {
    render: () => (
        <div style={{
            display: 'flex', flexDirection: 'column', gap: '16px', width: '300px',
            backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px'
        }}>
            <Input placeholder="有边框（默认）" bordered />
            <Input placeholder="无边框" bordered={false} />
        </div>
    ),
};

// 密码输入框
export const Password: Story = {
    args: {
        type: 'password',
        placeholder: '请输入密码',
        allowClear: true,
    },
};

// 数字输入框
export const Number: Story = {
    args: {
        type: 'number',
        placeholder: '请输入数字',
        min: 0,
        max: 100,
    },
};

// 搜索框
export const Search: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <Input
                placeholder="搜索..."
                prefix={<span>🔍</span>}
                allowClear
                onPressEnter={(e) => {
                    console.log('Search:', (e.target as HTMLInputElement).value);
                }}
            />
        </div>
    ),
};
