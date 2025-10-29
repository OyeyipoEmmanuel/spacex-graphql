import React from 'react';
import { ConfigProvider, Flex, Spin } from 'antd';

const Loading: React.FC = () => (
    <Flex align="center" gap="middle">
        <ConfigProvider
            theme={{
                components: {
                    Spin: {
                        dotSizeLG: 96,
                        
                    }
                }
            }}
        >
            <Spin size="large" style={{ width: "240px" }} />
        </ConfigProvider>
    </Flex>
);

export default Loading;