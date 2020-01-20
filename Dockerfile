FROM node:12-alpine

RUN mkdir -p /var/publish/front
ADD . /var/publish/front

WORKDIR /var/publish/front
ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

CMD [ "npm","run","start" ]