# GymGuy
GymGuy App for gym guys and Trainers

# Docker Commands

docker build -t gymguy .
docker run -d -p 8080:8080  --name gymguy gymguy 

docker logs gymguy 
docker exec -it gymguy /bin/bash

docker rm -f gymguy 
docker rmi gymguy 