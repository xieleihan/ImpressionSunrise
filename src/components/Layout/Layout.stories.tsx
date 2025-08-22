import type { Meta, StoryObj } from '@storybook/react-vite';
import Layout from './Layout';

const { Header, Footer, Content, Sider } = Layout;

const meta: Meta<typeof Layout> = {
    title: 'Components/Layout',
    component: Layout,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: '经典的页面布局组件，提供了顶部、侧边、内容和底部等布局结构。基于 Ant Design 的 Layout 组件设计，采用语义化的 HTML5 标签，支持响应式设计和主题切换。'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        hasSider: {
            control: 'boolean',
            description: '是否包含侧边栏',
        },
        className: {
            control: 'text',
            description: '自定义类名',
        },
        style: {
            control: 'object',
            description: '自定义样式',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础布局
export const Basic: Story = {
    render: () => (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
                    ImpressionSunrise
                </div>
            </Header>
            <Content style={{ padding: '20px' }}>
                <div style={{
                    background: '#fff',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    minHeight: '400px'
                }}>
                    <h2>主要内容区域</h2>
                    <p>这里是页面的主要内容区域，可以放置各种组件和内容。</p>
                    <p>Layout 组件提供了标准的页面布局结构，包括头部、内容区和底部。</p>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ImpressionSunrise Layout ©2025 Created by AI
            </Footer>
        </Layout>
    ),
    parameters: {
        docs: {
            description: {
                story: '最基础的布局结构，包含头部、内容区和底部。'
            }
        }
    }
};

// 侧边栏布局
export const WithSider: Story = {
    render: () => (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sider
                collapsible
                theme="dark"
                style={{
                    background: '#001529'
                }}
            >
                <div style={{
                    height: '32px',
                    margin: '16px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    LOGO
                </div>
                <div style={{ padding: '16px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        📊 Dashboard
                    </div>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        👥 Users
                    </div>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        📝 Content
                    </div>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        ⚙️ Settings
                    </div>
                </div>
            </Sider>
            <Layout>
                <Header style={{
                    background: '#fff',
                    padding: '0 16px',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 1px 4px rgba(0,21,41,.08)'
                }}>
                    <h1 style={{ margin: 0, color: '#001529' }}>控制台</h1>
                </Header>
                <Content style={{ margin: '24px 16px', padding: '24px', background: '#fff', borderRadius: '8px' }}>
                    <h2>欢迎使用控制台</h2>
                    <p>这是一个带有侧边栏的经典后台管理布局。</p>
                    <p>侧边栏支持收起/展开功能，点击底部的触发器可以切换状态。</p>
                    <div style={{
                        background: '#f5f5f5',
                        padding: '16px',
                        borderRadius: '6px',
                        marginTop: '20px'
                    }}>
                        <h3>功能特性</h3>
                        <ul>
                            <li>✅ 响应式设计，适配不同屏幕尺寸</li>
                            <li>✅ 支持亮色/暗色主题</li>
                            <li>✅ 可收起的侧边栏</li>
                            <li>✅ 语义化的 HTML5 标签</li>
                            <li>✅ 无障碍访问支持</li>
                        </ul>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
                    Ant Design Layout ©2025 Created by ImpressionSunrise
                </Footer>
            </Layout>
        </Layout>
    ),
    parameters: {
        docs: {
            description: {
                story: '包含可收起侧边栏的经典后台管理布局。侧边栏支持亮色和暗色主题，可以通过底部触发器控制收起和展开。'
            }
        }
    }
};

// 亮色侧边栏
export const LightSider: Story = {
    render: () => (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sider
                collapsible
                theme="light"
                style={{
                    background: '#fff',
                }}
            >
                <div style={{
                    height: '32px',
                    margin: '16px',
                    background: '#f0f0f0',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    LOGO
                </div>
                <div style={{ padding: '16px', color: '#333' }}>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                        🏠 首页
                    </div>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                        📊 数据分析
                    </div>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                        📦 产品管理
                    </div>
                    <div style={{ marginBottom: '16px', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                        👥 用户中心
                    </div>
                </div>
            </Sider>
            <Layout>
                <Header style={{
                    background: '#001529',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px'
                }}>
                    <h1 style={{ margin: 0, color: 'white' }}>企业管理系统</h1>
                </Header>
                <Content style={{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <h2>亮色主题侧边栏</h2>
                    <p>这个示例展示了亮色主题的侧边栏效果，适合简洁明亮的界面设计。</p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '16px',
                        marginTop: '24px'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ margin: '0 0 8px 0' }}>256</h3>
                            <p style={{ margin: 0, opacity: 0.9 }}>总用户数</p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ margin: '0 0 8px 0' }}>89%</h3>
                            <p style={{ margin: 0, opacity: 0.9 }}>活跃度</p>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ margin: '0 0 8px 0' }}>1,234</h3>
                            <p style={{ margin: 0, opacity: 0.9 }}>订单数</p>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    ),
    parameters: {
        docs: {
            description: {
                story: '使用亮色主题的侧边栏，适合需要明亮简洁界面的场景。'
            }
        }
    }
};

// 右侧边栏
export const RightSider: Story = {
    render: () => (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Layout>
                <Header style={{
                    background: '#722ed1',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 24px'
                }}>
                    <h1 style={{ margin: 0, color: 'white' }}>创意工作台</h1>
                    <div style={{ color: 'white', opacity: 0.8 }}>
                        👤 用户中心
                    </div>
                </Header>
                <Content style={{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    borderRadius: '8px'
                }}>
                    <h2>主内容区域</h2>
                    <p>右侧边栏布局适合需要辅助信息面板的场景，比如编辑器、设计工具等。</p>

                    <div style={{
                        background: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e9ecef',
                        marginTop: '20px'
                    }}>
                        <h3>设计画板</h3>
                        <div style={{
                            background: 'white',
                            height: '200px',
                            borderRadius: '4px',
                            border: '2px dashed #dee2e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#6c757d'
                        }}>
                            拖拽文件到这里或点击上传
                        </div>
                    </div>
                </Content>
            </Layout>
            <Sider
                position="right"
                collapsible
                theme="light"
                width={300}
                style={{
                    background: '#fafafa',
                    borderLeft: '1px solid #f0f0f0'
                }}
            >
                <div style={{ padding: '16px' }}>
                    <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>属性面板</h3>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>基础属性</h4>
                        <div style={{ background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e8e8e8' }}>
                            <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>宽度: 300px</div>
                            <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>高度: 200px</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>位置: (0, 0)</div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>样式属性</h4>
                        <div style={{ background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e8e8e8' }}>
                            <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>背景色: #ffffff</div>
                            <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>边框: 1px solid</div>
                            <div style={{ fontSize: '12px', color: '#666' }}>圆角: 8px</div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>图层</h4>
                        <div style={{ background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e8e8e8' }}>
                            <div style={{ marginBottom: '8px', padding: '6px', background: '#f8f9fa', borderRadius: '4px', fontSize: '12px' }}>
                                📄 背景层
                            </div>
                            <div style={{ marginBottom: '8px', padding: '6px', background: '#e3f2fd', borderRadius: '4px', fontSize: '12px', border: '1px solid #2196f3' }}>
                                🖼️ 图片层 (选中)
                            </div>
                            <div style={{ padding: '6px', background: '#f8f9fa', borderRadius: '4px', fontSize: '12px' }}>
                                📝 文字层
                            </div>
                        </div>
                    </div>
                </div>
            </Sider>
        </Layout>
    ),
    parameters: {
        docs: {
            description: {
                story: '右侧边栏布局，常用于属性面板、工具栏等辅助功能区域。'
            }
        }
    }
};

// 嵌套布局
export const Nested: Story = {
    render: () => (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{
                background: '#1890ff',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px'
            }}>
                <h1 style={{ margin: 0, color: 'white' }}>嵌套布局示例</h1>
            </Header>
            <Layout hasSider>
                <Sider
                    theme="light"
                    style={{ background: '#fff' }}
                >
                    <div style={{ padding: '16px' }}>
                        <h4>导航菜单</h4>
                        <div style={{ color: '#666' }}>
                            <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>📱 移动应用</div>
                            <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>💻 Web应用</div>
                            <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>🖥️ 桌面应用</div>
                        </div>
                    </div>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <div style={{
                        background: '#fff',
                        margin: '16px 0',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}>
                        <Layout>
                            <Content>
                                <h2>嵌套内容区域</h2>
                                <p>这个示例展示了 Layout 组件的嵌套使用能力，可以创建复杂的多层级布局结构。</p>

                                <Layout style={{
                                    background: '#fafafa',
                                    padding: '16px',
                                    borderRadius: '6px',
                                    marginTop: '20px'
                                }}>
                                    <Header style={{
                                        background: '#52c41a',
                                        height: '40px',
                                        lineHeight: '40px',
                                        color: 'white',
                                        padding: '0 16px',
                                        borderRadius: '4px',
                                        marginBottom: '16px'
                                    }}>
                                        内嵌头部
                                    </Header>
                                    <Content style={{
                                        background: 'white',
                                        padding: '16px',
                                        borderRadius: '4px',
                                        minHeight: '120px'
                                    }}>
                                        <h4>内嵌内容</h4>
                                        <p>Layout 组件支持任意层级的嵌套，每个层级都可以独立配置主题和样式。</p>
                                    </Content>
                                </Layout>
                            </Content>
                        </Layout>
                    </div>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
                嵌套布局演示 - ImpressionSunrise Layout
            </Footer>
        </Layout>
    ),
    parameters: {
        docs: {
            description: {
                story: '复杂的嵌套布局示例，展示了 Layout 组件的灵活性和可组合性。'
            }
        }
    }
};

// 响应式布局
export const Responsive: Story = {
    render: () => (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sider
                collapsible
                breakpoint="md"
                collapsedWidth={0}
                onBreakpoint={(broken) => {
                    console.log('Breakpoint triggered:', broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log('Collapse state changed:', { collapsed, type });
                }}
                theme="dark"
            >
                <div style={{
                    height: '32px',
                    margin: '16px',
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    LOGO
                </div>
                <div style={{ padding: '16px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    <div style={{ marginBottom: '16px', padding: '8px 0' }}>📱 响应式菜单</div>
                    <div style={{ marginBottom: '16px', padding: '8px 0' }}>📊 数据看板</div>
                    <div style={{ marginBottom: '16px', padding: '8px 0' }}>⚙️ 系统设置</div>
                </div>
            </Sider>
            <Layout>
                <Header style={{
                    background: '#001529',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 24px'
                }}>
                    <h1 style={{ margin: 0, color: 'white', fontSize: '18px' }}>响应式布局</h1>
                </Header>
                <Content style={{
                    margin: '24px 16px',
                    padding: '24px',
                    background: '#fff',
                    borderRadius: '8px'
                }}>
                    <h2>响应式设计</h2>
                    <p>这个布局在中等屏幕尺寸以下会自动隐藏侧边栏，提供更好的移动端体验。</p>
                    <p>试试调整浏览器窗口大小，或者在开发者工具中切换设备模拟器来查看效果。</p>

                    <div style={{
                        background: '#e6f7ff',
                        border: '1px solid #91d5ff',
                        borderRadius: '6px',
                        padding: '16px',
                        marginTop: '20px'
                    }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#0050b3' }}>💡 提示</h4>
                        <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#0050b3' }}>
                            <li>断点设置为 'md' (991px)</li>
                            <li>小屏幕下侧边栏宽度变为 0</li>
                            <li>支持手势操作和键盘导航</li>
                            <li>打开浏览器控制台查看回调日志</li>
                        </ul>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
                    响应式布局 - 适配所有设备
                </Footer>
            </Layout>
        </Layout>
    ),
    parameters: {
        docs: {
            description: {
                story: '响应式布局示例，支持根据屏幕尺寸自动调整侧边栏显示状态。在中等屏幕以下会自动隐藏侧边栏。'
            }
        }
    }
};
