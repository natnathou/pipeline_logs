<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This app is a pipeline that has two functionality:
 - get some logs from queue (kafka), and save them in database (elastic search), 
 - search logs by some text
 
Why I choose queue rather than http for logs injection?
If our server is offline, we lose the messages, but with queue the messages will still be in the queue until we acknowledge them

Why I use Kafka rather than pub/sub?
 - Kafka is open source
 - Kafka can implement schema registry
 - Kafka work with partitions and parallelization works better
 - Kafka has retention process for messages, in contrasts with pub when we acknowledge the message, it goes
 
 Why I choose Elasticsearch:
  - Elasticsearch is no-sql so it is perfect for storing unstructured data
  - Elasticsearch is very powerfull for search, and very powerfull for data analyse so it's perfect for logs
 But Mongo could be also a good choise


## Installation
No installation is needed if you're running the app via docker. If not you can run:
```bash
npm ci
```

## Important
Be careful to increase your memory in docker desktop up to 4Gb to avoid crashing of elastic search container

## Running the app
```bash
docker compose up --build
```
## Postman
You can import logs.postman_collection.json (from root project ) to postman to test this server

## Note
I Implemented a producer for kafka just for the dev, so you have a way to produce message to kafka easily

## Architecture Design

![image](https://user-images.githubusercontent.com/42219511/187194427-1f8f44ec-197d-4cca-86b6-1baf535ebf12.png)
![image](https://user-images.githubusercontent.com/42219511/187194566-ba5faeb2-8671-4c04-bb95-5eaa86c81da8.png)

## Scalability
Kafka:
- if we want to get the correct scale we have to run load test and increase the number of partition in function of the load test result

Nestjs:
- we can deploy our server via kubernetes, and choose the right config for HorizontalPodAutoscaler, so we can can increase our pod instance in function of cpu or memory utilisation

Elasticsearch:
- about elasticsearch we could use a managed database




