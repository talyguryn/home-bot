FROM node:15

RUN apt update
RUN apt install -y \
    libasound2 alsa-utils alsa-oss

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --prod

COPY . .

CMD ["yarn", "start"]
