# Database Optimization Tool Site Spec

## Goal

Build the first public website for `databaseoptimizationtool.com` to capture `database optimization tool` and related `database optimization` traffic while honestly stating current support: PostgreSQL first, other SQL engines planned.

## Audience

The primary user is a small business, local shop, or small software team that depends on a database but does not have a dedicated DBA. The site should speak to owners, operators, and technical founders who need a cautious way to understand slow queries, missing indexes, growth risk, and hosting limits before changing production.

## Positioning

Use `Database Optimization Tool` as the brand and product category. Use `read-only`, `evidence-backed`, `PostgreSQL available now`, and `human review required` to avoid implying an automatic tuning system.

## Pages

- `/`: main product and category page for `database optimization tool`.
- `/postgresql/`: current support page and strongest conversion surface.
- `/database-optimization/`: light educational page for the broad keyword.
- `/database-optimization-audit/`: audit-intent page.
- `/sample-database-optimization-report/`: broad sample report page showing deliverables, evidence, safety boundaries, and next-step expectations before a request.
- `/read-only-database-audit/`: safety boundary page explaining access, data, production-write, storage, and approval limits for evidence-first audits.
- `/database-optimization-checklist/`: request preparation checklist for symptoms, engine context, safe evidence, constraints, and route selection.
- `/database-performance-audit/`: broad supporting page for performance-audit symptoms before engine-specific work.
- `/sql-performance-tuning/`: broad supporting page for SQL tuning concepts before PostgreSQL slow-query work.
- `/index-optimization/`: broad supporting page for index planning before PostgreSQL-specific index review.
- `/query-optimization/`: query-intent page.
- `/tools/`: tool and service comparison page.
- `/mysql/`: planned-support page.
- `/sql-server/`: planned-support page.

## Internal Linking

保持 broad -> PostgreSQL 的内链方向：通用数据库优化、性能审计、SQL 调优、索引优化页面先解释跨数据库问题，再自然承接到 `/postgresql/` 或 `/postgresql/slow-query-audit/`。首页只把 broad supporting pages 和基础转化资产作为辅助入口展示，不改变首页 `Database Optimization Tool` 的 H1 和主定位。样例报告、只读边界、请求清单应回链 `/database-optimization-audit/`，并在 PostgreSQL 适配时自然导向 `/postgresql/` 或 `/postgresql/collector/`。

## Non-Goals

- Do not claim all databases are supported today.
- Do not claim automatic production fixes.
- Do not build auth, billing, upload, collector, or LLM back-end in this first site.
- Do not redirect `postgresaudit.com` to the new domain.
