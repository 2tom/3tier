#!/bin/sh

sed -i -e s/NODE01_ADDR/$NODE_PORT_3000_TCP_ADDR/g /tmp/node.conf
sed -i -e s/NODE01_PORT/$NODE_PORT_3000_TCP_PORT/g /tmp/node.conf

mv /tmp/node.conf /etc/nginx/sites-available/default

nginx
