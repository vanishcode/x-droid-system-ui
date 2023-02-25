import React, { useState } from "react";
import { Upload, Icon, Spin } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";

import { ReactComponent as UploadIcon } from "../../components/Icon/upload.svg";
import { UPLOAD_API } from "../../api/upload";
import {
  UPLOAD_TITLE,
  UPLOAD_SUB_TITLE,
  UPLOAD_WIDGET_TITLE,
  UPLOAD_WIDGET_SUB_TITLE,
} from "../../mock/upload";

import "./index.scss";

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
            draggable={true}
            dragIcon={<Icon svg={<UploadIcon />} />}
            limit={1}
            accept=".apk"
            onSuccess={() => {
              setTimeout(() => {
                setLoading(true);
                setTimeout(() => {
                  navigate("result");
                }, 1000);
              }, 1000);
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
