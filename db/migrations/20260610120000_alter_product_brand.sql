-- migrate:up

alter table products
  add column brand varchar(50) not null default 'jeeko'
  constraint ck_products_brand check (brand in ('jeeko', 'kishan king'));

-- migrate:down

alter table products drop column brand;
