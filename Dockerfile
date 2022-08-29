FROM node:16.3.0-alpine
WORKDIR '/app'
RUN npm i -g @nestjs/cli

COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .

CMD ["nest", "start", "--debug", "0.0.0.0:9229", "--watch"]
