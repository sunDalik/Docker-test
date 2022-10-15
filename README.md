## Build docker image
docker build . -t dalinesterov/docker-test

## Run
(Optionally pull) docker pull dalinesterov/docker-test
docker run -d -p 8000:8000 dalinesterov/docker-test
