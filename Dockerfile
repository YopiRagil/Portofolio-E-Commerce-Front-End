FROM nginx:stable
MAINTAINER yopiragil  "yopi.ragil.yrpp@gmail.com"

RUN mkdir -p /yopi-task/www/Portofolio-E-Commerce-Front-End
RUN mkdir -p /yopi-task/logs/nginx
#RUN mkdir -p /yopi-task/cert

COPY default.conf /etc/nginx/conf.d/
COPY . /yopi-task/www/Portofolio-E-Commerce-Front-End
#COPY yopiragil_my_id.crt /yopi-task/cert/
#COPY yopiragil_my_id.key /yopi-task/cert/

WORKDIR /yopi-task/www/Portofolio-E-Commerce-Front-End
