import React from "react";
import {
  Tabs,
  TabPane,
  Descriptions,
  Progress,
  Table,
} from "@douyinfe/semi-ui";

// import { RESULT_API } from "../../api/result";
import {
  RESULT_TITLE,
  RESULT_SUB_TITLE,
  TABS_DATA,
  FILE_SCORE,
  FILE_COLOR,
  FIRE_TITLE,
  FILE_INFO_LIST,
  TABLE_COLUMNS,
  TABLE_DATA,
} from "../../mock/result";

import "./index.scss";

export default function Result() {

  return (
    <div className="x-droid-system-ui-result">
      <div className="x-droid-system-ui-result__title">
        <h1>{RESULT_TITLE}</h1>
        <h3>{RESULT_SUB_TITLE}</h3>
      </div>
      <div className="x-droid-system-ui-result__detail">
        <div className="x-droid-system-ui-result__target">
          <Progress
            className="x-droid-system-ui-result__target-score"
            percent={FILE_SCORE}
            showInfo
            stroke={FILE_COLOR}
            type="circle"
            width={100}
            format={() => FIRE_TITLE}
            aria-label="score"
          />

          <Descriptions
            data={FILE_INFO_LIST}
            className="x-droid-system-ui-result__target-desc"
          />
        </div>
        <i className="x-droid-system-ui-result__divider"></i>
        <Tabs type="line" className="x-droid-system-ui-result__list">
          {TABS_DATA.map((item: any, index: number) => {
            return (
              <TabPane tab={item} itemKey={`${index}`} key={index}>
                <Table
                  columns={TABLE_COLUMNS}
                  dataSource={TABLE_DATA}
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
