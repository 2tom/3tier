#!/bin/sh

sudo docker run --rm -v `pwd`/src:/src -p 3000:3000 -it dockerfiles_node /bin/bash
