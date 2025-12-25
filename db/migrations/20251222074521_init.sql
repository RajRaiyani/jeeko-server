-- migrate:up

create table files (
  id uuid default gen_random_uuid() not null,
  key text not null,
  size bigint,
  created_at timestamp with time zone default now() not null,
  constraint pk_files primary key (id),
  constraint uk_files_key unique (key)
);


create table users (
  id uuid default gen_random_uuid() not null,
  name varchar(255) not null,
  email varchar(255) not null,
  phone_number varchar(15) not null,
  is_admin boolean default false not null,
  password_hash text not null,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone,
  constraint pk_users primary key (id),
  constraint uk_users_email unique (email),
  constraint uk_users_phone_number unique (phone_number)
);

create table product_categories (
  id uuid default gen_random_uuid() not null,
  name varchar(255) not null,
  description text,
  image_id uuid,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone,
  constraint pk_product_categories primary key (id),
  constraint uk_product_categories_name unique (name),
  constraint fk_product_categories_image_id foreign key (image_id) references files (id)
);

create table products (
  id uuid default gen_random_uuid() not null,
  category_id uuid not null,
  name varchar(255) not null,
  description text,
  tags text[] not null default '{}',
  metadata jsonb not null default '{}',
  sale_price integer not null,
  sale_price_in_rupees numeric(12,2) generated always as (round(sale_price * 100, 2)) stored,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone,
  constraint pk_products primary key (id),
  constraint fk_products_category_id foreign key (category_id) references product_categories (id),
  constraint uk_products_name unique (name)
);

create table product_images (
  product_id uuid not null,
  image_id uuid not null,
  constraint pk_product_images primary key (product_id, image_id)
);

create table inquiries (
  id uuid default gen_random_uuid() not null,
  name varchar(255) not null,
  phone_number varchar(15) not null,
  email varchar(255) not null,
  message text not null,
  status varchar(100) not null default 'pending',
  created_at timestamp with time zone default now() not null,
  constraint pk_inquiries primary key (id)
);

-- migrate:down

