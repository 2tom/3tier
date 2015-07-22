FROM ubuntu:14.04

MAINTAINER 2tom <tera1215@gmail.com>

# TZ set
RUN echo "Asia/Tokyo" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

RUN apt-get update && apt-get install -y\
 curl\
 git\
 wget\
 libcurl4-openssl-dev\
 && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y\
 nginx\
 && rm -rf /var/lib/apt/lists/*

ADD node.conf /tmp/node.conf

RUN sed -i -e s:/var/log/nginx/error.log:/dev/fd/2:g /etc/nginx/nginx.conf\
 && sed -i -e s:/var/log/nginx/access.log:/dev/fd/1:g /etc/nginx/nginx.conf\
 && sed -i '1s/^/daemon off;\n/' /etc/nginx/nginx.conf

VOLUME /contents

ADD start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]
