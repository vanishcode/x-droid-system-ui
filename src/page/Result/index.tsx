import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Tabs,
  TabPane,
  Descriptions,
  Progress,
  Table,
} from "@douyinfe/semi-ui";

import { HEADERS } from "../../api/base";
import { RESULT_API } from "../../api/result";
import {
  RESULT_TITLE,
  // RESULT_SUB_TITLE,
  TABS_DATA,
  // FILE_SCORE,
  FILE_COLOR,
  // FIRE_TITLE,
  // FILE_INFO_LIST,
  TABLE_COLUMNS,
  // TABLE_DATA,
} from "../../mock/result";

import { KEY_TRANSLATE } from "../../utils/keyTranslate";

import "./index.scss";

async function fetchData(hash: string) {
  const api = RESULT_API.replace("{id}", hash);
  try {
    const res = await fetch(api, {
      headers: HEADERS,
    });
    const { data } = await res.json();
    return data;
  } catch (e) {
    console.log("error", e);
  }
  return {};
}

function getScore(resultData: Record<string, any>) {
  if (!resultData.attributes) return 0;

  let result = 0;
  const stats = resultData.attributes.last_analysis_stats;

  // 瞎几把算
  result = Math.floor(
    (stats.undetected /
      (stats.malicious +
        stats.harmless +
        stats.suspicious +
        stats.undetected)) *
      100
  );

  return result;
}

function getFileDetailInfo(resultData: Record<string, any>) {
  if (!resultData.attributes) return [{ key: "", value: "" }];

  const result: Array<{ key: string; value: any }> = [];
  const info = resultData.attributes;

  result.push(
    {
      key: KEY_TRANSLATE.names,
      value: info.names,
    },
    {
      key: KEY_TRANSLATE.type_description,
      value: info.type_description,
    },
    {
      key: KEY_TRANSLATE.type_extension,
      value: info.type_extension,
    },
    {
      key: KEY_TRANSLATE.md5,
      value: info.md5,
    },
    {
      key: KEY_TRANSLATE.sha1,
      value: info.sha1,
    },
    {
      key: KEY_TRANSLATE.sha256,
      value: info.sha256,
    },
    {
      key: KEY_TRANSLATE.size,
      value: info.size / 1000 + "KB",
    }
  );

  return result;
}

function getSubmissionDate(resultData: Record<string, any>) {
  if (!resultData.attributes || !resultData.attributes.last_submission_date)
    return "";

  return new Date(
    resultData.attributes.last_analysis_date * 1000
  ).toLocaleString();
}

function getLastAnalysisResults(resultData: Record<string, any>) {
  if (!resultData.attributes) return [];

  const result: Array<{ key: number; name: string; result: string }> = [];
  const keyMap = resultData.attributes?.last_analysis_results;
  Object.entries(keyMap).forEach(([key, value], index) => {
    result.push({
      key: index,
      name: key,
      result: !(value as Record<string, any>)?.result ? "通过" : "未通过",
    });
  });

  return result;
}

export default function Result() {
  const [searchParams] = useSearchParams();
  const hash = searchParams.get("hash") || "";

  const [resultData, setResultData] = useState({} as any);

  useEffect(() => {
    fetchData(hash).then((data) => {
      setResultData(data);
    });
  }, [hash]);

  return (
    <div className="x-droid-system-ui-result">
      <div className="x-droid-system-ui-result__title">
        <h1>{RESULT_TITLE}</h1>
        <h3>{getSubmissionDate(resultData)}</h3>
      </div>
      <div className="x-droid-system-ui-result__detail">
        <div className="x-droid-system-ui-result__target">
          <Progress
            className="x-droid-system-ui-result__target-score"
            percent={getScore(resultData)}
            showInfo
            stroke={FILE_COLOR}
            type="circle"
            width={100}
            format={() => getScore(resultData)}
            aria-label="score"
            size="large"
          />

          <Descriptions
            data={getFileDetailInfo(resultData)}
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
                  dataSource={getLastAnalysisResults(resultData)}
                  pagination={{
                    total: getLastAnalysisResults(resultData).length,
                    pageSize: 5,
                  }}
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
