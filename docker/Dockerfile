FROM node:10.11.0-alpine AS build

WORKDIR /app/frontend

ADD ./package.json /app/frontend/package.json
ADD ./package-lock.json /app/frontend/package-lock.json
RUN npm install

ADD ./config /app/frontend/config
ADD ./src /app/frontend/src
ADD ./tsconfig.json /app/frontend/tsconfig.json
ADD ./webpack.config.js /app/frontend/webpack.config.js
ADD ./tslint.json /app/frontend/tslint.json
ADD ./.env /app/frontend/.env

RUN npm run-script build

FROM nginx AS nginx

COPY ./docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/frontend/dist /app/frontend

ADD ./docker/sites-enabled/ /etc/nginx/sites-enabled/
RUN usermod -u 1000 www-data

CMD getent hosts $URL_API | cut -d' ' -f1 | awk '{print $1" backend-api.lab"}' >> /etc/hosts && \
 nginx;
