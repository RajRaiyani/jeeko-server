-- migrate:up

alter table product_images
add column is_primary boolean not null default false;


-- migrate:down

alter table product_images
drop column is_primary;
