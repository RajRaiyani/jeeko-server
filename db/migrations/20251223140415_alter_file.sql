-- migrate:up


alter table files add column _status varchar(100) not null default 'pending';

-- migrate:down

alter table files drop column _status;
