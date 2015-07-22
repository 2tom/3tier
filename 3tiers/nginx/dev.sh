#!/bin/sh

sudo docker run --rm --link dockerfiles_node_1:node_1 -it dockerfiles_nginx /bin/bash
