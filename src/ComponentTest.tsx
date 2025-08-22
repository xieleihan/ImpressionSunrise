import { useState } from 'react';
import { Button, Input, Loading, Waterfall, Layout } from './index';
import type { MediaItem } from './components/Waterfall/Waterfall';

const { Header, Footer, Content, Sider } = Layout;

// 测试图片数据
const testImages: MediaItem[] = [
  { src: 'https://picsum.photos/300/200?random=1', type: 'image', alt: 'Test image 1' },
  { src: 'https://picsum.photos/300/250?random=2', type: 'image', alt: 'Test image 2' },
  { src: 'https://picsum.photos/300/180?random=3', type: 'image', alt: 'Test image 3' },
  { src: 'https://picsum.photos/300/220?random=4', type: 'image', alt: 'Test image 4' },
  { src: 'https://picsum.photos/300/260?random=5', type: 'image', alt: 'Test image 5' },
  { src: 'https://picsum.photos/300/190?random=6', type: 'image', alt: 'Test image 6' },
];

export default function ComponentTest() {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
          ImpressionSunrise 组件库测试
        </div>
        <div style={{ color: 'white', opacity: 0.8 }}>
          v0.0.4
        </div>
      </Header>
      
      <Layout hasSider>
        <Sider 
          collapsible 
          theme="light"
          width={280}
          style={{ background: '#fff' }}
        >
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>组件导航</h3>
            <div style={{ color: '#666' }}>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>🔘 Button 按钮</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>📝 Input 输入框</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>⏳ Loading 加载</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>🌊 Waterfall 瀑布流</div>
              <div style={{ padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>📐 Layout 布局</div>
            </div>
          </div>
        </Sider>
        
        <Layout>
          <Content style={{ padding: '24px', background: '#f5f5f5' }}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              
              {/* Button 组件测试 */}
              <section style={{ marginBottom: '32px' }}>
                <h2>Button 按钮组件</h2>
                
                <div style={{ marginBottom: '16px' }}>
                  <h3>基础按钮</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Button type="primary">主要按钮</Button>
                    <Button>默认按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="text">文字按钮</Button>
                    <Button type="link">链接按钮</Button>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>尺寸</h3>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button size="large" type="primary">大号按钮</Button>
                    <Button size="middle" type="primary">中等按钮</Button>
                    <Button size="small" type="primary">小号按钮</Button>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>状态</h3>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Button type="primary" loading>加载中</Button>
                    <Button disabled>禁用按钮</Button>
                    <Button danger type="primary">危险按钮</Button>
                    <Button ghost type="primary">幽灵按钮</Button>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>形状</h3>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button type="primary" shape="circle" icon="🔥" />
                    <Button type="primary" shape="round">圆角按钮</Button>
                    <Button type="primary" icon="⭐">带图标</Button>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>块级按钮</h3>
                  <Button type="primary" block>块级按钮</Button>
                </div>
              </section>

              {/* Input 组件测试 */}
              <section style={{ marginBottom: '32px' }}>
                <h2>Input 输入框组件</h2>
                
                <div style={{ marginBottom: '16px' }}>
                  <h3>基础输入框</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                    <Input 
                      placeholder="请输入内容" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      placeholder="带前缀" 
                      prefix="🔍"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Input 
                      placeholder="带后缀" 
                      suffix="❌"
                      allowClear
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>不同尺寸</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                    <Input size="large" placeholder="大号输入框" />
                    <Input size="middle" placeholder="中等输入框" />
                    <Input size="small" placeholder="小号输入框" />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>状态</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                    <Input placeholder="普通状态" />
                    <Input placeholder="错误状态" status="error" />
                    <Input placeholder="警告状态" status="warning" />
                    <Input placeholder="禁用状态" disabled />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <h3>带计数</h3>
                  <div style={{ maxWidth: '300px' }}>
                    <Input 
                      placeholder="最多输入20个字符" 
                      showCount 
                      maxLength={20}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                </div>
              </section>

              {/* Loading 组件测试 */}
              <section style={{ marginBottom: '32px' }}>
                <h2>Loading 加载组件</h2>
                
                <div style={{ marginBottom: '16px' }}>
                  <Button type="primary" onClick={handleLoadingTest}>
                    {loading ? '加载中...' : '触发加载测试'}
                  </Button>
                </div>

                {loading && (
                  <div style={{ marginBottom: '16px' }}>
                    <h3>不同类型的加载动画</h3>
                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                      <div style={{ width: '60px', height: '60px' }}>
                        <Loading LoadingType="default" tip="默认加载" />
                      </div>
                      <div style={{ width: '60px', height: '60px' }}>
                        <Loading LoadingType="circle" tip="圆圈加载" />
                      </div>
                      <div style={{ width: '60px', height: '60px' }}>
                        <Loading LoadingType="spin" tip="旋转加载" />
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Waterfall 组件测试 */}
              <section style={{ marginBottom: '32px' }}>
                <h2>Waterfall 瀑布流组件</h2>
                <div style={{ maxWidth: '800px' }}>
                  <Waterfall 
                    data={testImages}
                    columns={3}
                    gap={16}
                  />
                </div>
              </section>

              {/* Layout 组件介绍 */}
              <section style={{ marginBottom: '32px' }}>
                <h2>Layout 布局组件</h2>
                <p>当前页面正在使用 Layout 布局组件！包含以下特性：</p>
                <div style={{ 
                  background: '#f8f9fa', 
                  padding: '16px', 
                  borderRadius: '8px',
                  border: '1px solid #e9ecef',
                  marginTop: '16px'
                }}>
                  <h4>✅ 已实现的功能</h4>
                  <ul>
                    <li>🏗️ Header - 页面头部（已应用）</li>
                    <li>📄 Content - 主内容区域（当前区域）</li>
                    <li>📐 Layout - 布局容器（页面整体）</li>
                    <li>📱 Sider - 可收起的侧边栏（左侧导航）</li>
                    <li>🔄 Footer - 页面底部（见下方）</li>
                    <li>📱 响应式设计 - 支持移动端适配</li>
                    <li>🎨 主题支持 - 明暗主题切换</li>
                    <li>♿ 无障碍访问 - 键盘导航和屏幕阅读器</li>
                  </ul>
                </div>
              </section>

              {/* 当前状态显示 */}
              <section style={{ marginBottom: '32px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                <h3>当前状态</h3>
                <p><strong>输入框值:</strong> {inputValue || '(空)'}</p>
                <p><strong>加载状态:</strong> {loading ? '加载中' : '空闲'}</p>
                <p><strong>测试图片数量:</strong> {testImages.length}</p>
                <p><strong>布局类型:</strong> Header + Sider + Content + Footer</p>
              </section>
            </div>
          </Content>
          
          <Footer style={{ textAlign: 'center', background: '#f0f2f5' }}>
            ImpressionSunrise Layout ©2025 - 高性能语义化布局组件
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
