#! /bin/bash

secrets=$(ls /secrets)
for file in $secrets
do
    export $file=$(cat /secrets/$file)
done
exec "$@"