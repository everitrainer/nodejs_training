curl -X POST http://localhost:3000/game -H "Content-Type: application/json" -d '{ "name": "Super Fun Kids 2", "category": "kids", "price": 29.99, "quantity": 4 }'

curl  http://localhost:3000/games

curl -X PUT http://localhost:3000/game/1 -H "Content-Type: application/json" -d '{"name": "Super Fun Kids 4"}'

curl -X DELETE http://localhost:3000/game/1

curl -X PATCH http://localhost:3000/game/1 -H "Content-Type: application/json" -d '{"name": "Updated Name"}'
