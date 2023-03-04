build:
	docker compose build
	docker compose run --rm app npm install
	docker compose run --rm app npm run export
run:
	docker compose up app
down:
	docker compose down
