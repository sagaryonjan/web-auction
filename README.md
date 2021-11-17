# Web Auction

Welcome to webauction. This platform is built on laravel, node js, react js, socket io

## Requirements

Using `docker-compose` and `make` for the local development is recommended.
Check out the links below for the setup instructions.

- [Make (google search results)](https://www.google.com/search?q=how%20to%20install%20make)
  *(Usually just running `sudo apt install make` is enough.)*
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)

## Getting Started
Clone the repository.
```
git clone git@github.com:sagaryonjan/web-auction.git

cd web-auction

```
Setup the environment variables for laravel application.
```
cp .env.example .env
```
Update the .env file as required. Pay special attention to the missing fields.

ENV Credentials:
```$xslt
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:pfzxy5ksJdGPpokp7aqDz79JVxVLkI162rCSfZ1SEvI=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=webauction-db
DB_PORT=3306
DB_DATABASE=webauction-app
DB_USERNAME=root
DB_PASSWORD=root

BROADCAST_DRIVER=redis
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_CLIENT=predis
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

Set up the app. The following command does a lot of things behind the scenes. If
you think you messed up, just run the command again. Docker magic!
```
make dco/setup
```

## Available Make Commands

```bash
# Run a few essential docker compose services
$ make dco/up

# Shutdown and remove any running docker containers
$ make dco/down

# stop any running docker containers
$ make dco/stop

# To see the logs
$ make dco/logs/api

# To see the running containers
$ make dco/ps

# To run migration
$ make dco/migrate

# To run seeder
$ make dco/seed
```

There are lots of shorthand commands available in make file. Do check it out ;) 
