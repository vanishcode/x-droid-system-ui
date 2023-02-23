import React from 'react';
import { Empty } from '@douyinfe/semi-ui';
import { IllustrationConstruction, IllustrationConstructionDark } from '@douyinfe/semi-illustrations';

export default function NoMatch() {
    return (
        <Empty
            image={<IllustrationConstruction style={{ width: 150, height: 150, marginTop: 100 }} />}
            darkModeImage={<IllustrationConstructionDark style={{ width: 150, height: 150, marginTop: 100 }} />}
            title={'功能建设中'}
            description="当前功能暂未开放，敬请期待。"
        />
    );

}