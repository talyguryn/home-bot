FROM node:15

RUN apt update
RUN apt install -y \
    libasound2 alsa-utils alsa-oss

