FROM node:alpine AS build

WORKDIR /future

# RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
# RUN apt-get install -y nodejs

COPY package*.json ./

RUN npm install

copy . .

RUN npm run build

FROM nginx


# RUN rm -r /usr/share/nginx/html/*

# RUN cp -a build/. /usr/share/nginx/html

COPY --from=build /future/build /usr/share/nginx/html