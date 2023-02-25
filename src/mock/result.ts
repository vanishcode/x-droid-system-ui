export const RESULT_TITLE = "检测结果";

export const RESULT_SUB_TITLE = new Date().toLocaleDateString();

export const TABS_DATA = ["详情", "关于", "社区"];

export const FILE_SCORE = 97;

export const FIRE_TITLE = "score: 97";

export const FILE_RESULT = {
  PASS: "var(--semi-color-success)",
  NOT_PASS: "var(--semi-color-danger)",
};

export const FILE_COLOR = FILE_RESULT.PASS;

export const FILE_INFO_LIST = [
  {
    key: "MD5",
    value: "194ce5d0b89c47ff6b30bfb491f9dc26",
  },
  {
    key: "SHA_256",
    value: "5e793a946e316b581728ec808ce78584719cd23f824b2ac028042f87caf28554",
  },
  {
    key: "API",
    value: "Android 11（30）",
  },
];

export const TABLE_COLUMNS = [
  {
    title: "项目",
    dataIndex: "name",
  },
  {
    title: "结果",
    dataIndex: "result",
  },
];

export const TABLE_DATA = [
  {
    key: 1,
    name: "恶意软件检测",
    result: "通过",
  },
];
