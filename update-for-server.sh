#!/bin/bash
# My first script


git pull
ng build
rsync -avu --delete "/home/o40-florianduehring/Projects/yeasm/yeasm-fe/dist/yeasm-fe/" "/var/www/html/yeasm-fe"

