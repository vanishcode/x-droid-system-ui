import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import { IconLink } from "@douyinfe/semi-icons";

import "./index.scss";

import Upload from "./page/Upload";
import Result from "./page/Result";
import NoMatch from "./components/NoMatch";

import { ReactComponent as LogoIcon } from "./components/Icon/logo.svg";

const { Header } = Layout;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout className="x-droid-system-ui">
        <Header className="x-droid-system-ui__header">
          <div className="x-droid-system-ui__logo">
            <LogoIcon />
          </div>
          <Link to="/" className="x-droid-system-ui__home">
            XDroid System
          </Link>
          <Link
            to="https://www.virustotal.com/"
            className="x-droid-system-ui__link"
            target={"_blank"}
          >
            {/* @ts-ignore */}
            <IconLink /> 使用 virustotal 检测
          </Link>
        </Header>
      </Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Upload />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
