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
        { src: 'https://picsum.photos/id/1018/3840/2160?1', type: 'image', alt: '风景 1' },
        { src: 'https://picsum.photos/id/1015/3840/2160?2', type: 'image', alt: '风景 2' },
        { src: 'https://picsum.photos/id/1019/3840/2160?3', type: 'image', alt: '风景 3' },
        { src: 'https://picsum.photos/id/1016/3840/2160?4', type: 'image', alt: '风景 4' },
        { src: 'https://picsum.photos/id/1035/3840/2160?5', type: 'image', alt: '风景 5' },
        { src: 'https://picsum.photos/id/1033/3840/2160?6', type: 'image', alt: '风景 6' },
        { src: 'https://picsum.photos/id/1025/3840/2160?7', type: 'image', alt: '风景 7' },
        { src: 'https://picsum.photos/id/1074/3840/2160?8', type: 'image', alt: '风景 8' },
        { src: 'https://picsum.photos/id/1084/3840/2160?9', type: 'image', alt: '风景 9' },
        { src: 'https://picsum.photos/id/1080/3840/2160?10', type: 'image', alt: '风景 10' },
        { src: 'https://picsum.photos/id/1043/3840/2160?11', type: 'image', alt: '风景 11' },
        { src: 'https://picsum.photos/id/1050/3840/2160?12', type: 'image', alt: '风景 12' },
        { src: 'https://picsum.photos/id/1067/3840/2160?13', type: 'image', alt: '风景 13' },
        { src: 'https://picsum.photos/id/1069/3840/2160?14', type: 'image', alt: '风景 14' },
        { src: 'https://picsum.photos/id/1070/3840/2160?15', type: 'image', alt: '风景 15' },
        { src: 'https://picsum.photos/id/1082/3840/2160?16', type: 'image', alt: '风景 16' },
        { src: 'https://picsum.photos/id/1081/3840/2160?17', type: 'image', alt: '风景 17' },
        { src: 'https://picsum.photos/id/1083/3840/2160?18', type: 'image', alt: '风景 18' },
        { src: 'https://picsum.photos/id/1085/3840/2160?19', type: 'image', alt: '风景 19' },
        { src: 'https://picsum.photos/id/1086/3840/2160?20', type: 'image', alt: '风景 20' },
        { src: 'https://picsum.photos/id/1087/3840/2160?21', type: 'image', alt: '风景 21' },
        { src: 'https://picsum.photos/id/1088/3840/2160?22', type: 'image', alt: '风景 22' },
        { src: 'https://picsum.photos/id/1089/3840/2160?23', type: 'image', alt: '风景 23' },
        { src: 'https://picsum.photos/id/1090/3840/2160?24', type: 'image', alt: '风景 24' },
        { src: 'https://picsum.photos/id/1091/3840/2160?25', type: 'image', alt: '风景 25' },
        { src: 'https://picsum.photos/id/1092/3840/2160?26', type: 'image', alt: '风景 26' },
        { src: 'https://picsum.photos/id/1093/3840/2160?27', type: 'image', alt: '风景 27' },
        { src: 'https://picsum.photos/id/1094/3840/2160?28', type: 'image', alt: '风景 28' },
        { src: 'https://picsum.photos/id/1095/3840/2160?29', type: 'image', alt: '风景 29' },
        { src: 'https://picsum.photos/id/1096/3840/2160?30', type: 'image', alt: '风景 30' },
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
