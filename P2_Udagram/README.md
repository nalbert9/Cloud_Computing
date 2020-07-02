# Udagram Image Filtering Microservice

Udagram is a simple cloud application. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Frontend](https://github.com/nalbert9/Cloud_Computing/tree/master/P2_Udagram/Frontend), a basic Ionic client web application which consumes the RestAPI Backend. 
2. [The RestAPI Backend](https://github.com/nalbert9/Cloud_Computing/tree/master/P2_Udagram/Backend), a Node-Express server which can be deployed to a cloud service.
3. [The Image Filtering Microservice](https://github.com/nalbert9/Cloud_Computing/tree/master/P2_Udagram/Udagram_Image_Filtering), a Node-Express application which runs a simple script to process images.

## Tasks

### Setup Node Environment

To create a new node server, open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

`./src/server.ts` uses query parameter to download an image from a public URL, filter the image, and return the result.

Few helper functions are import at the top of the `./src/server.ts`  file to handle some of these concepts.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying the system

* `eb init` a new application and `eb create` a new environment to deploy our image-filter service
* `eb deploy` to push changes.

### Elastic Beanstalk Deployment
 [Elastic Beanstalk Link](Udagram-env.eba-gvcx36ef.us-east-2.elasticbeanstalk.com)
