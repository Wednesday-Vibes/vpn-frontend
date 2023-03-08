FROM node:19.5.0 as requirements
WORKDIR /build
COPY ./package.json ./package-lock.json ./
RUN apt update -y && \
    apt upgrade -y
RUN npm install

FROM node:19.5.0 as development
WORKDIR /vpn-frontend
COPY --from=requirements /build/node_modules ./node_modules
COPY ./src ./src
COPY ./public ./public
COPY ./package.json ./package-lock.json ./tsconfig.json ./tsconfig.node.json vite.config.ts index.html ./ 
COPY ./scripts/source.sh ./source.sh
ENTRYPOINT ["./source.sh","npm","run","dev"]