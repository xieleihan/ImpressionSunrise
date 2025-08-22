import type { Meta, StoryFn } from '@storybook/react-vite';
import { useState, useRef } from 'react';
import { Button, Input, Loading, Waterfall } from '../';
import type { InputRef, MediaItem } from '../';

// 示例数据
const sampleMediaData: MediaItem[] = [
    {
        src: 'https://picsum.photos/300/400',
        type: 'image',
        alt: '示例图片 1',
    },
    {
        src: 'https://picsum.photos/300/500',
        type: 'image',
        alt: '示例图片 2',
    },
    {
        src: 'https://picsum.photos/300/350',
        type: 'image',
        alt: '示例图片 3',
    },
    {
        src: 'https://picsum.photos/300/450',
        type: 'image',
        alt: '示例图片 4',
    },
    {
        src: 'https://picsum.photos/300/380',
        type: 'image',
        alt: '示例图片 5',
    },
    {
        src: 'https://picsum.photos/300/420',
        type: 'image',
        alt: '示例图片 6',
    },
];

export default {
    title: 'Examples/All Components',
    parameters: {
        docs: {
            description: {
                component: 'ImpressionSunrise 组件库的综合演示，展示所有组件的组合使用。',
            },
        },
    },
} as Meta;

// 综合演示
export const AllComponents: StoryFn = () => {
    const [inputValue, setInputValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const inputRef = useRef<InputRef>(null);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 3000);
        }, 2000);
    };

    const handleReset = () => {
        setInputValue('');
        setEmail('');
        setPassword('');
        setDescription('');
        setFormSubmitted(false);
    };

    const focusFirstInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', background: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1890ff', marginBottom: '8px' }}>
                    ImpressionSunrise
                </h1>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
                    现代化的 React 组件库演示
                </p>

                {/* 顶部按钮组 */}
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button type="primary" size="large">主要操作</Button>
                    <Button type="default" size="large">次要操作</Button>
                    <Button type="dashed" size="large">虚线按钮</Button>
                    <Button type="text" size="large">文本按钮</Button>
                    <Button type="link" size="large">链接按钮</Button>
                </div>
            </div>

            <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                {/* 用户注册表单 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>用户注册</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>
                                用户名
                            </label>
                            <Input
                                ref={inputRef}
                                placeholder="请输入用户名"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                prefix={<span>👤</span>}
                                allowClear
                                size="large"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>
                                邮箱地址
                            </label>
                            <Input
                                placeholder="请输入邮箱"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                prefix={<span>📧</span>}
                                suffix="@company.com"
                                size="large"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>
                                密码
                            </label>
                            <Input
                                type="password"
                                placeholder="请输入密码"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                prefix={<span>🔒</span>}
                                size="large"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: '500' }}>
                                个人介绍
                            </label>
                            <Input
                                placeholder="请介绍一下自己"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                showCount
                                maxLength={200}
                                size="large"
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                            <Button
                                type="primary"
                                size="large"
                                loading={loading}
                                onClick={handleSubmit}
                                block
                                disabled={!inputValue || !email || !password}
                            >
                                {loading ? '注册中...' : '注册账户'}
                            </Button>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Button size="middle" onClick={handleReset}>
                                重置表单
                            </Button>
                            <Button size="middle" onClick={focusFirstInput}>
                                聚焦用户名
                            </Button>
                        </div>

                        {formSubmitted && (
                            <div style={{
                                padding: '12px',
                                background: '#f6ffed',
                                border: '1px solid #b7eb8f',
                                borderRadius: '6px',
                                color: '#52c41a'
                            }}>
                                ✅ 注册成功！欢迎加入我们！
                            </div>
                        )}
                    </div>
                </div>

                {/* 按钮展示区 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>按钮样式</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <h4 style={{ marginBottom: '8px' }}>基础类型</h4>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                <Button type="primary">Primary</Button>
                                <Button type="default">Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="text">Text</Button>
                                <Button type="link">Link</Button>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>尺寸</h4>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Button type="primary" size="large">Large</Button>
                                <Button type="primary" size="middle">Middle</Button>
                                <Button type="primary" size="small">Small</Button>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>形状</h4>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Button type="primary">Default</Button>
                                <Button type="primary" shape="circle">A</Button>
                                <Button type="primary" shape="round">Round</Button>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>特殊状态</h4>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                <Button type="primary" danger>Danger</Button>
                                <Button type="default" disabled>Disabled</Button>
                                <Button type="primary" loading>Loading</Button>
                                <Button type="primary" ghost>Ghost</Button>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>图标按钮</h4>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <Button type="primary" icon={<span>📄</span>}>下载</Button>
                                <Button type="primary" icon={<span>⬇️</span>} />
                                <Button type="primary" shape="circle" icon={<span>👤</span>} />
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>块级按钮</h4>
                            <Button type="primary" block>
                                Block Button
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 输入框展示区 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>输入框样式</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <h4 style={{ marginBottom: '8px' }}>尺寸</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Input size="large" placeholder="Large size" />
                                <Input size="middle" placeholder="Middle size" />
                                <Input size="small" placeholder="Small size" />
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>状态</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Input placeholder="Normal" />
                                <Input placeholder="Error state" status="error" />
                                <Input placeholder="Warning state" status="warning" />
                                <Input placeholder="Disabled" disabled />
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>功能特性</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Input placeholder="可清除" allowClear />
                                <Input placeholder="字数统计" showCount maxLength={50} />
                                <Input placeholder="密码输入" type="password" />
                                <Input
                                    placeholder="前后缀"
                                    prefix={<span>🔍</span>}
                                    suffix={<span>💡</span>}
                                />
                                <Input
                                    placeholder="前置后置标签"
                                    addonBefore="https://"
                                    addonAfter=".com"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 加载动画展示区 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>加载动画</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <h4 style={{ marginBottom: '8px' }}>基础尺寸</h4>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                                <Loading size={30} />
                                <Loading size={40} />
                                <Loading size={50} />
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>带提示文本</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                                <Loading size={40} tip="加载中..." />
                                <Loading size={40} tip="处理中，请稍候..." />
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>不同类型</h4>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Loading LoadingType="default" size={40} />
                                    <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Default</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Loading LoadingType="circle" size={40} />
                                    <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Circle</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Loading LoadingType="spin" size={40} />
                                    <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Spin</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ marginBottom: '8px' }}>自定义颜色</h4>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                                <Loading
                                    colorArray={['#ff4d4f', '#ff7a45', '#ffa940', '#ffec3d']}
                                    size={40}
                                />
                                <Loading
                                    colorArray={['#52c41a', '#73d13d', '#95de64', '#b7eb8f']}
                                    size={40}
                                />
                                <Loading
                                    colorArray={['#1890ff', '#40a9ff', '#69c0ff', '#91d5ff']}
                                    size={40}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 瀑布流展示区 */}
                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    gridColumn: '1 / -1' // 占据整行
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>瀑布流布局</h2>

                    <div style={{ marginBottom: '16px' }}>
                        <p style={{ color: '#666', marginBottom: '12px' }}>
                            响应式瀑布流布局，支持图片和视频展示
                        </p>
                        <div style={{ maxHeight: '400px', overflow: 'auto', border: '1px solid #f0f0f0', borderRadius: '6px' }}>
                            <Waterfall
                                data={sampleMediaData}
                                columns={4}
                                gap={12}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
                        <Button size="small" type="primary">添加图片</Button>
                        <Button size="small">刷新</Button>
                        <Button size="small" type="dashed">更多设置</Button>
                    </div>
                </div>
            </div>

            {/* 底部信息 */}
            <div style={{
                textAlign: 'center',
                marginTop: '40px',
                padding: '20px',
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <h3 style={{ color: '#1890ff', marginBottom: '8px' }}>ImpressionSunrise</h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>
                    现代化的 React 组件库，提供丰富的 UI 组件和优雅的交互体验
                </p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <Button type="primary" icon={<span>📖</span>}>查看文档</Button>
                    <Button type="default" icon={<span>💻</span>}>GitHub</Button>
                    <Button type="text" icon={<span>⭐</span>}>Star</Button>
                </div>
            </div>
        </div>
    );
};

// 简化的组合示例
export const SimpleExample: StoryFn = () => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    };

    return (
        <div style={{ padding: '24px', maxWidth: '400px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '20px' }}>简单示例</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input
                    placeholder="请输入内容"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    allowClear
                    showCount
                    maxLength={100}
                />

                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button
                        type="primary"
                        loading={loading}
                        onClick={handleSubmit}
                        disabled={!value}
                    >
                        提交
                    </Button>
                    <Button onClick={() => setValue('')}>
                        清空
                    </Button>
                </div>

                {loading && (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <Loading size={30} tip="处理中..." />
                    </div>
                )}
            </div>
        </div>
    );
};

export const ResponsiveLayout: StoryFn = () => {
    return (
        <div style={{ padding: '16px' }}>
            <h2 style={{ marginBottom: '20px' }}>响应式布局演示</h2>

            <div style={{
                display: 'grid',
                gap: '16px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                marginBottom: '24px'
            }}>
                <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h4>输入表单</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Input placeholder="姓名" />
                        <Input placeholder="邮箱" type="email" />
                        <Button type="primary" block>提交</Button>
                    </div>
                </div>

                <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h4>按钮组</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Button type="primary" block>主要操作</Button>
                        <Button block>次要操作</Button>
                        <Button type="dashed" block>其他操作</Button>
                    </div>
                </div>

                <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
                    <h4>状态展示</h4>
                    <div style={{ textAlign: 'center' }}>
                        <Loading size={40} tip="加载中..." />
                    </div>
                </div>
            </div>

            <div style={{
                background: '#f5f5f5',
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center'
            }}>
                <h4 style={{ marginBottom: '16px' }}>瀑布流展示</h4>
                <div style={{ maxHeight: '300px', overflow: 'auto' }}>
                    <Waterfall
                        data={[
                            { src: 'https://picsum.photos/200/300', type: 'image', alt: '图片1' },
                            { src: 'https://picsum.photos/200/400', type: 'image', alt: '图片2' },
                            { src: 'https://picsum.photos/200/250', type: 'image', alt: '图片3' },
                        ]}
                        columns={3}
                        gap={8}
                    />
                </div>
            </div>
        </div>
    );
};
