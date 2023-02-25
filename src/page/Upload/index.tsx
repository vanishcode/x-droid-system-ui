import React, { useState } from "react";
import { Upload, Icon, Spin, Notification } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";

import { ReactComponent as UploadIcon } from "../../components/Icon/upload.svg";
import { HEADERS } from "../../api/base";
import { UPLOAD_API, ANALYSIS_API } from "../../api/upload";
import {
  UPLOAD_TITLE,
  UPLOAD_SUB_TITLE,
  UPLOAD_WIDGET_TITLE,
  UPLOAD_WIDGET_SUB_TITLE,
} from "../../mock/upload";

import "./index.scss";

function getHash(response: any) {
  const link = response.data.links.self;
  const base64 = link.replace(ANALYSIS_API + "/", "");
  const raw = atob(base64);
  const [hash] = raw.split(":");
  return hash;
}

function getData(file: File) {
  return {
    file,
  };
}

export default function UploadComponent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="x-droid-system-ui-upload">
      <div className="x-droid-system-ui-upload__title">
        <h1>{UPLOAD_TITLE}</h1>
        <h3>{UPLOAD_SUB_TITLE}</h3>
      </div>
      <Spin
        spinning={loading}
        tip="正在分析..."
        size="large"
        childStyle={{
          opacity: loading ? "0.3" : "unset",
        }}
        style={{
          zIndex: loading ? "1" : "unset",
        }}
      >
        <div className="x-droid-system-ui-upload__container">
          <Upload
            className="x-droid-system-ui-upload__target"
            action={UPLOAD_API}
            headers={HEADERS}
            data={getData}
            draggable={true}
            dragIcon={<Icon svg={<UploadIcon />} />}
            limit={1}
            accept=".apk"
            onProgress={() => {
              setLoading(true);
            }}
            onSuccess={(response) => {
              const hash = getHash(response);
              const route = `result?hash=${hash}`;
              setTimeout(() => {
                navigate(route);
              }, 1000);
            }}
            onError={() => {
              setLoading(false);
              Notification.error({
                title: "上传失败",
              });
            }}
          >
            <UploadIcon className="x-droid-system-ui-upload__icon" />
            <h5 className="x-droid-system-ui-upload__title">
              {UPLOAD_WIDGET_TITLE}
            </h5>
            <span className="x-droid-system-ui-upload__subtitle">
              {UPLOAD_WIDGET_SUB_TITLE}
            </span>
          </Upload>
        </div>
      </Spin>
    </div>
  );
}
