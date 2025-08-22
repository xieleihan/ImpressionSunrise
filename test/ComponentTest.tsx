import React, { useState, useRef } from 'react';
import { Button, Input, Loading, Waterfall } from '../src';
import type { InputRef, MediaItem } from '../src';
import '../src/base.scss';

// 测试数据
const sampleMediaData: MediaItem[] = [
    {
        src: 'https://picsum.photos/300/400',
        type: 'image',
        alt: '测试图片1',
    },
    {
        src: 'https://picsum.photos/300/500',
        type: 'image',
        alt: '测试图片2',
    },
    {
        src: 'https://picsum.photos/300/350',
        type: 'image',
        alt: '测试图片3',
    },
    {
        src: 'https://picsum.photos/300/450',
        type: 'image',
        alt: '测试图片4',
    },
];

const ComponentTest: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<InputRef>(null);

    const handleButtonClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('操作完成！');
        }, 2000);
    };

    const handleInputFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>ImpressionSunrise 组件测试</h1>

            {/* Button 组件测试 */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Button 按钮组件</h2>

                <div style={{ marginBottom: '16px' }}>
                    <h3>基础类型</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <Button type="default">Default</Button>
                        <Button type="primary">Primary</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="text">Text</Button>
                        <Button type="link">Link</Button>
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>尺寸</h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                        <Button type="primary" size="large">Large</Button>
                        <Button type="primary" size="middle">Middle</Button>
                        <Button type="primary" size="small">Small</Button>
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>形状</h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                        <Button type="primary">Default</Button>
                        <Button type="primary" shape="circle">A</Button>
                        <Button type="primary" shape="round">Round</Button>
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>状态</h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        <Button type="primary" loading={loading} onClick={handleButtonClick}>
                            {loading ? 'Loading...' : 'Click to Load'}
                        </Button>
                        <Button type="default" disabled>Disabled</Button>
                        <Button type="primary" danger>Danger</Button>
                        <Button type="primary" ghost>Ghost</Button>
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>块级按钮</h3>
                    <Button type="primary" block style={{ marginBottom: '8px' }}>
                        Block Button
                    </Button>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>图标按钮</h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                        <Button type="primary" icon={<span>📄</span>}>With Icon</Button>
                        <Button type="primary" icon={<span>⬇️</span>} />
                        <Button type="primary" shape="circle" icon={<span>👤</span>} />
                    </div>
                </div>
            </section>

            {/* Input 组件测试 */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Input 输入框组件</h2>

                <div style={{ marginBottom: '16px' }}>
                    <h3>基础使用</h3>
                    <Input
                        placeholder="请输入内容"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ width: '300px', marginBottom: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>尺寸</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                        <Input size="large" placeholder="Large size" />
                        <Input size="middle" placeholder="Middle size" />
                        <Input size="small" placeholder="Small size" />
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>状态</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                        <Input placeholder="Normal" />
                        <Input placeholder="Error state" status="error" />
                        <Input placeholder="Warning state" status="warning" />
                        <Input placeholder="Disabled" disabled />
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>功能特性</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                        <Input placeholder="可清除" allowClear />
                        <Input placeholder="字数统计" showCount maxLength={50} />
                        <Input placeholder="密码输入" type="password" />
                        <Input
                            placeholder="带前后缀"
                            prefix={<span>🔍</span>}
                            suffix={<span>@example.com</span>}
                        />
                        <Input
                            placeholder="前置后置标签"
                            addonBefore="https://"
                            addonAfter=".com"
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>Ref 操作</h3>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <Input ref={inputRef} placeholder="可通过ref聚焦" style={{ width: '200px' }} />
                        <Button onClick={handleInputFocus}>Focus Input</Button>
                    </div>
                </div>
            </section>

            {/* Loading 组件测试 */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Loading 加载组件</h2>

                <div style={{ marginBottom: '16px' }}>
                    <h3>基础使用</h3>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Loading />
                        <Loading size={40} />
                        <Loading size={60} tip="加载中..." />
                    </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                    <h3>自定义颜色</h3>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Loading colorArray={['#ff4d4f', '#ff7a45', '#ffa940', '#ffec3d']} />
                        <Loading colorArray={['#52c41a', '#73d13d', '#95de64', '#b7eb8f']} size={40} />
                        <Loading colorArray={['#1890ff', '#40a9ff', '#69c0ff', '#91d5ff']} size={60} tip="蓝色主题" />
                    </div>
                </div>
            </section>

            {/* Waterfall 组件测试 */}
            <section style={{ marginBottom: '40px' }}>
                <h2>Waterfall 瀑布流组件</h2>

                <div style={{ marginBottom: '16px' }}>
                    <h3>图片瀑布流</h3>
                    <div style={{ maxHeight: '400px', overflow: 'auto' }}>
                        <Waterfall
                            data={sampleMediaData}
                            columns={3}
                            gap={16}
                        />
                    </div>
                </div>
            </section>

            {/* 综合示例 */}
            <section style={{ marginBottom: '40px' }}>
                <h2>综合示例</h2>
                <div style={{
                    padding: '20px',
                    border: '1px solid #d9d9d9',
                    borderRadius: '8px',
                    background: '#fafafa'
                }}>
                    <h3>用户信息表单</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
                        <Input placeholder="用户名" prefix={<span>👤</span>} />
                        <Input placeholder="邮箱" prefix={<span>📧</span>} suffix="@company.com" />
                        <Input placeholder="密码" type="password" prefix={<span>🔒</span>} />
                        <Input placeholder="个人介绍" showCount maxLength={200} />
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Button type="primary" loading={loading} onClick={handleButtonClick}>
                                {loading ? '提交中...' : '提交'}
                            </Button>
                            <Button>重置</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentTest;
