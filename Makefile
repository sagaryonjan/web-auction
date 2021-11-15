DCO ?=  docker-compose

dco/up: 
	@$(DCO) up -d

dco/down: 
	@$(DCO) down 
	
dco/stop: 
	@$(DCO) stop 

dco/ps: 
	@$(DCO) ps

dco/build:
	@$(DCO) build --no-cache

dco/migrate:
	@$(DCO) exec api php artisan migrate

dco/seed:
	@$(DCO) exec api php artisan db:seed

dco/rollback:
	@$(DCO) exec api php artisan db:rollback

dco/setup:
	@make dco/up
	@make dco/migrate
	@make dco/seed

dco/refresh:
	@make dco/down
	@make dco/up
	@make dco/migrate
	@make dco/seed

dco/api/logs: 
	@$(DCO) logs -f --tail 100 api

dco/app/logs: 
	@$(DCO) logs -f --tail 100 app

dco/api/cmd:
	@$(DCO) exec api sh

dco/app/cmd:
	@$(DCO) exec app sh

dco/app/yarn:
	@$(DCO) exec app yarn
