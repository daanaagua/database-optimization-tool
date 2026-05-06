# Database Optimization Tool 长远内容与转化演进 Spec

## 1. 背景

`databaseoptimizationtool.com` 当前定位是 broad SEO 主站：覆盖 `database optimization tool`、`database optimization`、`database optimization audit`、`database performance audit`、`SQL performance tuning`、`index optimization` 等通用搜索意图。

当前已经存在 PostgreSQL 专项承接路径：`/postgresql/`、`/postgresql/collector/`、`/postgresql/sample-report/`、`/postgresql/slow-query-audit/`。这些页面承担“PostgreSQL 已可服务”的证明和下游导流。

当前问题不是 SEO 入口缺失，而是转化信号偏弱：用户看完 broad 页面后，还不够明确知道下一步能拿到什么、多久拿到、需要提供什么、风险边界是什么、什么时候应该进入 `postgresaudit.com`。

## 2. 长远目标

未来 3-6 个月，把主站从“SEO 解释站”演进为“数据库优化需求分流与预转化站”。

目标拆分如下：

1. 用 broad SEO 页面持续获取跨数据库搜索流量。
2. 用高意图页面把用户从“了解概念”推进到“请求审计、查看样例、准备数据”。
3. 用信任资产降低用户对数据库安全、生产风险、交付质量的顾虑。
4. 用转化资产收集最小需求信息，但不在主站构建完整 SaaS。
5. 用产品化资产证明 PostgreSQL 审计路径是可重复交付的流程，而不是一次性咨询文案。
6. 把需要账户、定价、交易、正式 PostgreSQL 服务承接的用户送到 `postgresaudit.com`。

## 3. 站点分工

### 3.1 `databaseoptimizationtool.com` 的职责

主站负责以下事项：

1. 捕获 broad SEO 需求。
2. 解释数据库优化、性能审计、SQL 调优、索引优化、工具选择等通用问题。
3. 判断用户是否适合进入 PostgreSQL 专项路径。
4. 展示安全边界：只读、证据优先、人工复核、不自动改生产。
5. 展示交付物边界：审计摘要、风险排序、证据清单、建议下一步。
6. 提供轻量请求入口，让用户表达需求并进入人工跟进。
7. 为未来 MySQL、SQL Server 等引擎预留路线，但不声明当前已支持。

### 3.2 `postgresaudit.com` 的职责

`postgresaudit.com` 负责以下事项：

1. PostgreSQL 专项服务的正式转化。
2. 账户、价格、付款、订单、服务条款等交易相关流程。
3. 托管报告、正式审计交付、客户项目流程。
4. PostgreSQL 深度内容：例如 autovacuum、bloat、pg_stat_statements、index-only scan、lock wait、replication lag 等专项问题。
5. PostgreSQL 服务品牌信任建设，例如案例、样例报告、服务说明、交付流程。

### 3.3 两站关系

主站是上游需求入口，`postgresaudit.com` 是 PostgreSQL 专项成交和交付入口。

主站可以链接到 `postgresaudit.com`，但不能让用户误以为主站已经包含完整账户、付款、托管审计、自动修复系统。

`postgresaudit.com` 可以反向引用主站的 broad 教育内容，但 PostgreSQL 成交路径应留在 `postgresaudit.com`。

## 4. 今天先做什么基础部分，为什么

今天只做基础版转化补强规划，不做完整 SaaS，不做第三方表单方案，不做后端。

今天优先应该补的基础部分是：

1. 在 `/database-optimization-audit/` 增加统一转化动作。
2. 在 `/postgresql/` 增加统一转化动作。
3. 明确用户下一步能请求什么：数据库优化审计请求或 PostgreSQL 审计请求。
4. 明确最小交付物：审计摘要、优先级发现、证据清单、风险说明、下一步建议。
5. 明确时效预期：人工初步回复和审计范围确认，不承诺即时自动报告。
6. 明确安全边界：只读、最小权限、无生产写入、无自动改库、人工复核。
7. 明确请求入口只是轻量联系入口，不是账户系统、付款系统、上传系统或托管审计系统。

原因：

1. `/database-optimization-audit/` 是 broad 高意图页，用户已经有审计需求。
2. `/postgresql/` 是当前最强可服务页面，用户最接近专项转化。
3. 这两个页面能最快验证“明确 CTA + 明确交付物 + 明确安全边界”是否提升咨询意向。
4. 不先扩全站，可以避免把低意图教育页面过早做成销售页。
5. 不先做完整 SaaS，可以避免在需求、价格、交付格式未验证前投入过重。

## 5. 3-6 个月阶段路线

### 5.1 第 0 阶段：今天到 1 周

阶段目标：补齐基础转化闭环。

页面范围：

1. `/database-optimization-audit/`
2. `/postgresql/`

内容资产：

1. “请求审计”统一 CTA 文案。
2. “你会得到什么”交付物说明。
3. “我们不会做什么”安全边界说明。
4. “适合谁”与“不适合谁”判断。
5. “需要准备什么信息”最小清单。

转化资产：

1. 最小请求入口。
2. 可复制的请求模板。
3. 面向 broad 用户的 “Start database optimization audit” CTA。
4. 面向 PostgreSQL 用户的 “Request PostgreSQL audit scope” CTA。

验收标准：

1. 两个页面都有首屏可见的明确下一步。
2. 两个页面都有中段或底部重复 CTA。
3. 两个页面都说明交付物、时效、安全边界。
4. 文案没有声称自动修复生产数据库。
5. 文案没有声称 MySQL、SQL Server 当前已支持。

### 5.2 第 1 阶段：第 2-4 周

阶段目标：把 broad SEO 内容变成分流路径。

应补页面：

1. `/database-optimization-checklist/`
2. `/database-optimization-report/`
3. `/database-audit-template/`
4. `/slow-database-checklist/`
5. `/database-index-audit/`
6. `/query-performance-audit/`

页面意图：

1. checklist 页面服务准备型用户。
2. report 页面服务交付物对比型用户。
3. template 页面服务下载或复制模板型用户。
4. slow database 页面服务症状型用户。
5. index audit 页面服务索引审查高意图用户。
6. query performance audit 页面服务慢查询高意图用户。

内链顺序：

1. 症状页先链接到 `/database-performance-audit/`。
2. 审计页链接到 `/database-optimization-audit/`。
3. 查询和索引页链接到 `/postgresql/slow-query-audit/` 和 `/postgresql/`。
4. PostgreSQL 明确用户链接到 `postgresaudit.com`。

本阶段不做：

1. 不做登录。
2. 不做上传。
3. 不做自动报告生成。
4. 不做支付。
5. 不做第三方表单方案。

### 5.3 第 2 阶段：第 2-3 个月

阶段目标：建立信任资产，降低数据库安全顾虑。

应补信任资产：

1. `/security/`：安全边界说明。
2. `/read-only-database-audit/`：只读审计方法说明。
3. `/sample-database-optimization-report/`：通用样例报告。
4. `/postgresql/sample-report/` 扩展为更具体的 PostgreSQL 样例报告。
5. `/how-it-works/`：从症状到审计到建议的流程说明。
6. `/faq/`：集中回答权限、数据、生产风险、交付物、时效、支持范围。

每个信任资产必须明确：

1. 是否需要数据库凭据。
2. 是否读取生产数据。
3. 是否保存用户数据。
4. 是否会执行写操作。
5. 是否会自动创建索引。
6. 是否会自动修改 SQL。
7. 哪些内容需要人工批准。

信任资产的文案边界：

1. 可以说“read-only evidence collection”。
2. 可以说“human-reviewed recommendations”。
3. 可以说“no production writes by default”。
4. 不能说“fully automated optimization”。
5. 不能说“guaranteed performance improvement”。
6. 不能说“safe for every production database”。

### 5.4 第 3 阶段：第 3-4 个月

阶段目标：把转化入口从单一联系动作演进为多入口选择。

应补转化资产：

1. 审计请求页：说明用户提交什么信息、收到什么回复、后续如何确认范围。
2. 需求分流问题组：数据库类型、问题症状、业务影响、是否 PostgreSQL、是否能提供只读指标。
3. 邮件请求模板：用户可复制并发送，不依赖第三方表单。
4. 报告样例下载或静态查看入口。
5. “适合现在请求审计吗”判断块。
6. “如果你已经确定是 PostgreSQL 问题”导向 `postgresaudit.com`。

转化入口按用户阶段分层：

1. 低确定性用户：进入 checklist 或 performance audit 页面。
2. 中确定性用户：请求 broad database optimization audit。
3. PostgreSQL 高确定性用户：进入 `/postgresql/` 或 `postgresaudit.com`。
4. 已准备购买或正式服务用户：进入 `postgresaudit.com`。

本阶段仍不做：

1. 不做完整 CRM。
2. 不做自动报价。
3. 不做自助支付。
4. 不做用户上传数据库 dump。
5. 不做生产数据库远程连接托管服务。

### 5.5 第 4 阶段：第 4-6 个月

阶段目标：建立产品化资产，为后续 SaaS 或半自动审计工具做验证。

应补产品化资产：

1. 公开的报告结构：Executive Summary、Findings、Evidence、Risk、Recommendation、Validation Plan。
2. PostgreSQL collector 输出字段说明。
3. 慢查询审计评分维度。
4. 索引候选评分维度。
5. 表健康检查维度。
6. 容量和成本风险判断维度。
7. 审计任务状态说明：requested、scoped、evidence needed、reviewing、delivered。

产品化资产目的：

1. 让用户理解审计不是黑箱。
2. 让后续人工交付有统一格式。
3. 让后续自动化只围绕已验证字段扩展。
4. 让 `postgresaudit.com` 可以承接更正式的 PostgreSQL 服务流程。

可规划但不立即实施的产品能力：

1. 静态 report preview。
2. 本地 collector 输出校验器。
3. 审计请求状态说明页。
4. PostgreSQL 指标解释库。
5. 只读权限生成器。

仍然不进入的能力：

1. 自动改库。
2. 自动创建索引。
3. 自动重写查询并部署。
4. 托管生产连接。
5. 多租户 SaaS 后台。
6. 计费系统。

## 6. 页面路线图

### 6.1 Broad SEO 页面

优先级 P0：

1. `/database-optimization-audit/`
2. `/database-performance-audit/`
3. `/sql-performance-tuning/`
4. `/index-optimization/`
5. `/query-optimization/`

优先级 P1：

1. `/database-optimization-checklist/`
2. `/slow-database-checklist/`
3. `/database-audit-template/`
4. `/database-optimization-report/`
5. `/database-index-audit/`
6. `/query-performance-audit/`

优先级 P2：

1. `/database-tuning-services/`
2. `/database-consultant-vs-tool/`
3. `/database-monitoring-vs-audit/`
4. `/small-business-database-optimization/`
5. `/startup-database-performance-audit/`

### 6.2 PostgreSQL 承接页面

优先级 P0：

1. `/postgresql/`
2. `/postgresql/collector/`
3. `/postgresql/sample-report/`
4. `/postgresql/slow-query-audit/`

优先级 P1：

1. `/postgresql/index-audit/`
2. `/postgresql/query-performance-report/`
3. `/postgresql/read-only-role/`
4. `/postgresql/autovacuum-audit/`
5. `/postgresql/bloat-check/`

优先级 P2：

1. `/postgresql/pg-stat-statements/`
2. `/postgresql/lock-wait-audit/`
3. `/postgresql/connection-pool-audit/`
4. `/postgresql/replication-lag-audit/`
5. `/postgresql/launch-readiness-audit/`

### 6.3 Roadmap 引擎页面

当前只保持 roadmap 说明：

1. `/mysql/`
2. `/sql-server/`

未来只有满足以下条件，才扩展 MySQL 或 SQL Server 内容：

1. 已有明确 collector 证据模型。
2. 已有样例报告结构。
3. 已有安全边界说明。
4. 已有人工复核流程。
5. 不会稀释 PostgreSQL 当前可服务定位。

## 7. 信任资产路线图

必须逐步补齐的信任资产：

1. 安全边界页。
2. 只读审计说明页。
3. 样例报告。
4. 审计流程页。
5. 数据处理说明。
6. 权限准备说明。
7. FAQ。
8. PostgreSQL 专项样例。
9. PostgreSQL 只读角色说明。
10. 客户或场景案例。

信任资产优先顺序：

1. 先解释“不做什么”：不写入、不自动修改、不保存敏感业务数据。
2. 再解释“做什么”：收集指标、分析证据、排序风险、给出建议。
3. 再解释“怎么交付”：报告结构、时效、复核方式。
4. 最后解释“为什么可信”：样例、方法论、案例、限制说明。

## 8. 转化资产路线图

必须逐步补齐的转化资产：

1. 统一 CTA 文案。
2. 审计请求入口。
3. 可复制邮件模板。
4. 请求前准备清单。
5. 交付物说明。
6. 时效说明。
7. 适合/不适合判断。
8. PostgreSQL 专项导流块。
9. 样例报告查看入口。
10. 请求后的下一步说明。

转化动作优先级：

1. P0：请求审计范围确认。
2. P0：查看样例报告。
3. P0：进入 PostgreSQL 专项路径。
4. P1：复制请求模板。
5. P1：查看只读权限准备说明。
6. P2：查看 checklist。
7. P2：阅读 FAQ。

不使用的转化动作：

1. 不使用第三方表单方案作为长期核心依赖。
2. 不用弹窗拦截用户阅读。
3. 不用虚假的“免费自动扫描”承诺。
4. 不用倒计时、虚假稀缺、虚假案例。

## 9. 产品化资产路线图

产品化资产不是 SaaS 本体，而是可重复交付的公开结构。

优先补齐：

1. 报告字段定义。
2. 风险等级定义。
3. 审计证据类型定义。
4. PostgreSQL collector 输出说明。
5. 审计范围确认模板。
6. 发现项优先级规则。
7. 人工复核标准。
8. 验证计划模板。

这些资产服务三个目的：

1. 提高用户信任。
2. 降低人工交付成本。
3. 为未来自动化提供稳定输入输出。

## 10. 阶段指标

第 0 阶段指标：

1. `/database-optimization-audit/` CTA 点击数。
2. `/postgresql/` CTA 点击数。
3. 从 broad 页面进入 `/postgresql/` 的点击数。
4. 样例报告点击数。

第 1 阶段指标：

1. 新 checklist/template/report 页的自然流量。
2. 新页面进入高意图页的点击率。
3. 高意图页 CTA 点击率。

第 2 阶段指标：

1. 安全页访问量。
2. 样例报告访问量。
3. FAQ 访问量。
4. 从信任资产回到请求入口的点击率。

第 3-4 阶段指标：

1. 审计请求数量。
2. 请求信息完整率。
3. PostgreSQL 用户占比。
4. 进入 `postgresaudit.com` 的外链点击数。
5. 人工跟进后可成交机会数量。

## 11. 非目标

未来 3-6 个月内，主站不做以下事项：

1. 不做完整 SaaS。
2. 不做登录系统。
3. 不做支付系统。
4. 不做用户账户后台。
5. 不做多租户数据存储。
6. 不做生产数据库托管连接。
7. 不做自动生产写入。
8. 不做自动创建索引。
9. 不做自动 SQL 重写并部署。
10. 不声称 MySQL 或 SQL Server 当前已支持。
11. 不把 `postgresaudit.com` 重定向到主站。
12. 不让主站承接 PostgreSQL 正式交易流程。
13. 不把第三方表单方案作为规划前提。

## 12. 风险

### 12.1 定位稀释风险

如果主站过早扩展 MySQL、SQL Server、Oracle 等内容，会削弱“PostgreSQL 当前可服务”的可信度。

控制方式：roadmap 页面只能说 planned，不能说 available now。

### 12.2 转化过重风险

如果过早做完整请求流程、账户、上传、支付，会把资源消耗在未验证的产品形态上。

控制方式：先验证 CTA、请求模板、样例报告、人工范围确认。

### 12.3 安全承诺过度风险

数据库优化涉及生产风险。任何“自动优化”“保证安全”“保证提速”都会带来信任和责任风险。

控制方式：所有页面必须保留只读、人工复核、无自动生产变更的边界。

### 12.4 两站分工混乱风险

如果主站和 `postgresaudit.com` 都承接 PostgreSQL 成交流程，用户会不知道在哪里请求正式服务。

控制方式：主站负责教育、分流、预转化；`postgresaudit.com` 负责 PostgreSQL 正式服务、账户、价格、交易。

### 12.5 内容堆砌风险

如果只扩页面数量，不补交付物、样例、流程、边界，流量可能增加但转化仍弱。

控制方式：每新增 2-3 个 SEO 页面，必须至少补 1 个信任资产或转化资产。

### 12.6 伪产品化风险

如果只写“工具”文案但没有报告结构、字段定义、评分维度，用户会认为产品不存在。

控制方式：优先发布报告结构、样例、collector 输出说明、评分维度。

## 13. 内容发布顺序

推荐顺序：

1. 补 `/database-optimization-audit/` 和 `/postgresql/` 的基础转化块。
2. 补通用样例报告页。
3. 补只读安全边界页。
4. 补请求前准备清单。
5. 补 checklist/template/report 类 broad 高意图页面。
6. 扩展 PostgreSQL 专项页面。
7. 补 FAQ。
8. 补产品化字段定义和评分维度。
9. 再评估是否扩 MySQL 或 SQL Server。

不得颠倒的顺序：

1. 不得先扩 MySQL/SQL Server，再补 PostgreSQL 信任资产。
2. 不得先做支付或账户，再验证审计请求质量。
3. 不得先承诺自动报告，再定义报告字段。
4. 不得先承诺自动优化，再建立安全边界。

## 14. 后续 worker 实施边界

后续 worker 拿本 spec 实施时，应遵守：

1. 每次只改一个阶段或一组强相关页面。
2. 每次修改必须保持 broad -> PostgreSQL -> `postgresaudit.com` 的路径清晰。
3. 每个新增页面必须有明确搜索意图、目标用户、下一步动作。
4. 每个转化块必须说明交付物、时效、安全边界。
5. 每个 PostgreSQL 相关页面必须说明只读、无生产写入、人工复核。
6. 每个 roadmap 引擎页面必须说明 planned，不得暗示当前支持。
7. 每次发布前运行站点检查命令。

站点检查命令：

```bash
npm run check
```

