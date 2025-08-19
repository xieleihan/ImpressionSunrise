// waterfall.stories.tsx
import type { Meta, StoryFn } from '@storybook/react-vite';
import Waterfall from './Waterfall';
import type { WaterfallProps } from './Waterfall';

const meta: Meta<typeof Waterfall> = {
    title: 'Components/Waterfall',
    component: Waterfall,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'], // 启用 Docs
    argTypes: {
        columns: { control: { type: 'number', min: 1, max: 6 } },
        gap: { control: { type: 'number', min: 0, max: 50 } },
        classNames: { control: 'text' },
    },
};

export default meta;

// 创建一个模板
const Template: StoryFn<WaterfallProps> = (args) => <Waterfall {...args} />;

// ---------- 基础瀑布流（仅图片） ----------
export const Basic = Template.bind({});
Basic.args = {
    columns: 3,
    gap: 10,
    data: [
        { src: 'https://picsum.photos/id/1018/300/200', type: 'image', alt: '风景 1' },
        { src: 'https://picsum.photos/id/1015/300/400', type: 'image', alt: '风景 2' },
        { src: 'https://picsum.photos/id/1019/300/250', type: 'image', alt: '风景 3' },
        { src: 'https://picsum.photos/id/1016/300/350', type: 'image', alt: '风景 4' },
        { src: 'https://picsum.photos/id/1035/300/200', type: 'image', alt: '风景 5' },
        { src: 'https://picsum.photos/id/1033/300/450', type: 'image', alt: '风景 6' },
    ],
};

// ---------- 混合媒体瀑布流（图片 + 视频） ----------
export const WithVideo = Template.bind({});
WithVideo.args = {
    columns: 2,
    gap: 15,
    data: [
        {
            src: 'https://test-videos.co.uk/kevlar/big_buck_bunny_720p_1mb.mp4',
            type: 'video',
            poster: 'https://test-videos.co.uk/kevlar/images/big_buck_bunny_720p_1mb.jpg',
            alt: '大兔子视频',
        },
        { src: 'https://picsum.photos/id/1025/300/300', type: 'image', alt: '风景 7' },
        {
            src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
            type: 'video',
            poster: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.jpg',
            alt: '另一个视频',
        },
        { src: 'https://picsum.photos/id/1074/300/500', type: 'image', alt: '风景 8' },
    ],
};

// ---------- 自定义类名 + 额外子元素 ----------
export const WithCustomClassAndChildren = Template.bind({});
WithCustomClassAndChildren.args = {
    classNames: 'custom-waterfall',
    columns: 4,
    gap: 5,
    data: [
        { src: 'https://picsum.photos/id/1018/300/200', type: 'image', alt: '自定义样式图片 1' },
        { src: 'https://picsum.photos/id/1015/300/400', type: 'image', alt: '自定义样式图片 2' },
    ],
    children: (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
            <p>这是附加的内容</p>
        </div>
    ),
};
