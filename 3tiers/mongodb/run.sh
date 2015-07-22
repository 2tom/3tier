#!/bin/sh

docker run\
 -d\
 --name mongo01\
 -p 27017:27017\
 -t 3tier/mongodb --noprealloc --smallfiles
