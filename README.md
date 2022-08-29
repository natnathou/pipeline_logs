<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This app is a pipeline that has two functionalities:
 - to get some logs from a queue (kafka), and save them in database (elastic search), 
 - to search logs by some text
 
Why do I choose queue rather than http for logs injection?<br/>
If our server is offline, we lose the messages, but with queue the messages will still be in the queue until we acknowledge them

Why do I use Kafka rather than pub/sub?<br/>
 - Kafka is open source
 - Kafka can implement schema registry
 - Kafka work with partitions and parallelization works better
 - Kafka has retention process for messages, in contrasts with pub/sub when we acknowledge the message, it goes
 
 Why do I choose Elasticsearch:<br/>
  - Elasticsearch is no-sql, so it is perfect for storing unstructured data
  - Elasticsearch is very powerfully for search, and very powerfully for data analyse, so it's perfect for logs<br/>
 (Mongo could be also a good choice)

About support multi databases:<br/>
It yes supports multi databases, we just have to inject a class dbService in LogProvider that satisfy the interface 'DbServiceInterface'


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
You can import logs.postman_collection.json (from root project) to postman to test this server

## Note
I Implemented a producer for kafka just for the dev, so you have a way to produce message to kafka easily

## Architecture Design

![image](https://user-images.githubusercontent.com/42219511/187194427-1f8f44ec-197d-4cca-86b6-1baf535ebf12.png)
![image](https://user-images.githubusercontent.com/42219511/187194566-ba5faeb2-8671-4c04-bb95-5eaa86c81da8.png)

## Scalability
Kafka:<br/>
- if we want to get the correct scale, we have to run load test and increase the number of partition in function of the load test result

Nestjs:<br/>
- we can deploy our server via kubernetes, and choose the right config for HorizontalPodAutoscaler, so we can increase our pod instances in function of cpu or memory utilisation

Elasticsearch:<br/>
- about elasticsearch we could use a managed database




