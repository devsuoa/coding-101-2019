# coding-101
Library used for the DEVS coding 101 workshop. The library consists of two
parts. The `api` directory contains a REST API used to interact with AWS
services such as Comprehend. The `client` directory contains a
node module which acts as an SDK for the API.


## JavaScript Resources

Interested in learning more JavaScript? Take a look at the following links:

- https://watchandcode.com/ (One of the best beginner JavaScript resources out there)
- https://www.sololearn.com/Play/JavaScript (Great beginner JavaScript resource that you can use from your phone)
- https://github.com/getify/You-Dont-Know-JS (One of the best intermediate->advanced JavaScript resources)

---

## API
The API is hosted on AWS using the AWS Serverless Application Model (SAM) which
is a superset of CloudFormation. The API uses make to handle build and
deployment steps.

### Documentation
API documenation is written using swagger (Open Api). View the raw
specification `api/swagger.yaml` or use the swagger-ui for a more readable
format on `localhost:80`

```bash
docker-compose up
```

### Dependencies
To build/run/deploy the API, the awscli and aws-sam-cli must first be
installled. Note that python 2.7, 3.6 or 3.7 must be installed as well as
Docker.

```bash
pip install --user --upgrade awscli
pip install --user --upgrade aws-sam-cli
```

### Local Testing
The API can be tested locally at `localhost:3000`. 

```bash
make local
```

### Deployment
The API can be deployed as follows.

```bash
make package deploy
```

### Undeployment
Similarly, the API can be undeployed.

```bash
make undeploy
```

## Module
The Node Module is published using npm.
