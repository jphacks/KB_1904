# by :(){:|:&};:

## Build Setup
```shell
> source aliases.sh
> build
> rails db:create
> psql -h localhost -d development -U postgres -c 'create extension "pgcrypto";'
> ridgepole -c config/database.yml -E development --apply -f db/Schemafile --allow-pk-change
# or
> source setup.sh
```

## Run Server
```shell
> up
```
