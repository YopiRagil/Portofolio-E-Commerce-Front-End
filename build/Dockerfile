FROM nginx:stable
MAINTAINER yopiragil  "yopi.ragil.yrpp@gmail.com"

RUN mkdir -p /yopi-task/www/Portofolio-E-Commerce-Front-End
RUN mkdir -p /yopi-task/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /yopi-task/www/Portofolio-E-Commerce-Front-End

WORKDIR /yopi-task/www/Portofolio-E-Commerce-Front-End
