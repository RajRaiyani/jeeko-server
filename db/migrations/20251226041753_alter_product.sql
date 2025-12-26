-- migrate:up


alter table products add column points text[] not null default '{}';

-- migrate:down

alter table products drop column points;
