FROM node:9.7.1-alpine

# get system updates and applications we need
RUN apk update

# install yarn globally
RUN npm i -g yarn

# Create app directory
RUN mkdir -p /var/component-catalog
WORKDIR /var/component-catalog

# install dependencies
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

#copy over sourcefiles (will not need this when we use volumes)
COPY ./ ./

# expose the API port to the host
EXPOSE 3000
