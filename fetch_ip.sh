#!/bin/bash

# Fetch the public IP address using an external service (e.g., ifconfig.me)
Api_ip=$(curl -s ifconfig.me)

# Interpolate the public IP address into your configuration file
sed -i "s/{{Api_ip}}/$Api_ip/g" ./src/environments/environment.ts

# Start your application with the updated configuration file
exec "$@"
