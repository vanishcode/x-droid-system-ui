import React, { useState } from "react";
import { Upload, Icon, Spin } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";

import { ReactComponent as UploadIcon } from "../../components/Icon/upload.svg";
import "./index.scss";

export default function UploadComponent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="x-droid-system-ui-upload">
      <div className="x-droid-system-ui-upload__title">
        <h1>未知威胁文件检测系统</h1>
        <h3>基于行为分析的实时文件病毒检测</h3>
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
            action="https://api.semi.design/upload"
            draggable={true}
            dragIcon={<Icon svg={<UploadIcon />} />}
            limit={1}
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
              点击上传文件或拖拽文件到这里
            </h5>
            <span className="x-droid-system-ui-upload__subtitle">
              支持 *.apk 类型文件
            </span>
          </Upload>
        </div>
      </Spin>
    </div>
  );
}
