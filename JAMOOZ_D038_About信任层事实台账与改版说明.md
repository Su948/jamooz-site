# D038 About 信任层事实台账与改版说明

## 本次结论

About 页面改为以可追溯的公司事实、项目协作方式和买家可核验信息为主。删除旧页中无法从现有资料确认范围的 ISO 9001、CE、FCC、RoHS 笼统声明，不展示客户 Logo，不发布团队人数、工厂面积、年产能、固定交期或具体出口国家数量。

## 公开事实台账

| 对外表述 | 当前依据 | 页面处理 |
| --- | --- | --- |
| 20+ years manufacturing experience | 首页现有并持续使用的已确认品牌口径 `src/app/preview/page.tsx` | 仅使用“20+ years manufacturing experience”，不推算成立年份 |
| Based in Xiamen, China | 公司统一资料 `src/lib/company.ts` 与 About 元数据 | Hero 与事实卡展示所在地 |
| OEM/ODM project support | 已上线 `/oem-odm` 流程、`/custom` 定制范围及产品页 | 说明从需求、设计、工程、试产到生产与交付支持的协作范围 |
| International B2B product teams | 现有 About 元数据及询盘流程面向全球 B2B 买家 | 使用“international B2B”，不列未经确认的具体国家、区域或客户 |
| Cross-functional project work | `/oem-odm` 中已定义的业务、设计、工程、供应链、质量与交付阶段 | 以职能说明团队协作，不发布人员数量 |

## 暂不公开的内容

- ISO 9001 工厂认证：现有工作区未提供有效证书及认证主体信息。
- “所有产品符合 CE / FCC / RoHS”：不同型号、市场和订单范围不同，不能统一表述。
- 客户 Logo、客户名称、出货国家数量、团队人数、工厂面积、产能与固定交期：待授权或证据齐全后再发布。

## 页面变化

- About 页导航与当前正式网站的紫色 JAMOOZ 导航风格保持一致。
- 新增 20+ 年、厦门、OEM/ODM 三个事实卡。
- 新增业务与产品定义、设计工程、供应生产、质量交付四类协作职能。
- 新增品牌、经销进口商、采购产品团队三类买家场景。
- 新增“Evidence before claims”区块，明确证书、测试报告和市场准入资料按型号与目标市场确认。
- CTA 分别连接产品目录、OEM/ODM 流程与询盘页。
