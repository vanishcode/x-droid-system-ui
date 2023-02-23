import React from "react";
import {
  Tabs,
  TabPane,
  Descriptions,
  Tag,
  Progress,
  Table,
} from "@douyinfe/semi-ui";

import "./index.scss";

function createRange(length: number, initializer: Function) {
  return [...new Array(length)].map((_, index) => {
    return initializer(index);
  });
}

export default function Result() {
  const data = ["检测", "详情", "关于", "社区"];

  const info = [
    {
      key: "MD5",
      value: "50154777ee0a31ccee156825073ee6e1",
    },
    {
      key: "SHA-25",
      value: "e04631d8c3eb6a4ce4ddabe9edb4a44eb5a9a96624130b4e064230e97a0c1428",
    },
    {
      key: "SSDEEP",
      value: "50154777ee0a31ccee156825073ee6e1",
    },
    {
      key: "文件类型",
      value: "文件类型",
    },
    {
      key: "文件大小",
      value: "72.791KB",
    },
  ];

  const columns = [
    {
      title: "项目",
      dataIndex: "name",
    },
    {
      title: "大小",
      dataIndex: "size",
    },
    {
      title: "状态",
      dataIndex: "owner",
    },
    {
      title: "更新日期",
      dataIndex: "updateTime",
    },
  ];

  const tableData = createRange(20, (index: number) => {
    return {
      key: `${index}`,
      name: "病毒",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
      size: "2M",
      owner: "通过",
      updateTime: "2020-02-02 05:13",
      avatarBg: "grey",
    };
  });

  return (
    <div className="x-droid-system-ui-result">
      <div className="x-droid-system-ui-result__title">
        <h1>检测结果</h1>
        <h3>2023.01.20</h3>
      </div>
      <div className="x-droid-system-ui-result__detail">
        <div className="x-droid-system-ui-result__target">
          <Progress
            className="x-droid-system-ui-result__target-score"
            percent={50}
            showInfo
            type="circle"
            width={100}
            format={() => "50 score"}
            aria-label="score"
          />

          <Descriptions
            data={info}
            className="x-droid-system-ui-result__target-desc"
          />
        </div>
        <i className="x-droid-system-ui-result__divider"></i>
        <Tabs type="line" className="x-droid-system-ui-result__list">
          {data.map((item: any, index: number) => {
            return (
              <TabPane tab={item} itemKey={`${index}`} key={index}>
                <Table
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                  className="x-droid-system-ui-result__list-item"
                />
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
