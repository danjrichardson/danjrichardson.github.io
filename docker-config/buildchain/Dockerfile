#https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
#https://snyk.io/wp-content/uploads/10-best-practices-to-containerize-Node.js-web-applications-with-Docker.pdf

#1. Use deterministic docker base image tags
FROM node:18.3.0-alpine3.16 AS deps

WORKDIR /var/www/project/ui.src/

#COPY --from=deps /app/node_modules ./node_modules
#COPY ./ui.src ./ui.src

USER node

CMD npm install && npm run dev
#ENTRYPOINT ["tail", "-f", "/dev/null"]
