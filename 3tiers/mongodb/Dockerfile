FROM ubuntu:14.04

MAINTAINER 2tom <tera1215@gmail.com>

# TZ set
RUN echo "Asia/Tokyo" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

# common pkg
RUN apt-get update && apt-get install -y\
 build-essential\
 git\
 wget\
 curl\
 libcurl4-openssl-dev\
 && rm -rf /var/lib/apt/lists/*

# Import MongoDB public GPG key and make list file
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10\
 && echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list

# Install couchbase
RUN apt-get update && apt-get install -y\
 mongodb-org\
 && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /data/db
VOLUME /data/db

EXPOSE 27017
EXPOSE 28017

ENTRYPOINT ["/usr/bin/mongod"]
