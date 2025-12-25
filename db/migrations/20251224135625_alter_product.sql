-- migrate:up


alter table products drop column sale_price_in_rupees;

alter table products add column sale_price_in_rupees numeric(12,2) generated always as (round(sale_price / 100, 2)) stored;

-- migrate:down

alter table products drop column sale_price_in_rupees;

alter table products add column sale_price_in_rupees numeric(12,2);

