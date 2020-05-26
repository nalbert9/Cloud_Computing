# Cloud Fundamentals Project
The cloud is perfect for hosting static websites that only include HTML, CSS, and JavaScript files that require no server-side processing. In this project, we will deploy a static website to AWS. First, we will create a S3 bucket and upload the website files to our bucket. Next, we will configure the bucket for website hosting and secure it using IAM policies. Next, we will speed up content delivery using AWS’ content distribution network service, CloudFront. Lastly, we will access your website in a browser using the unique CloudFront endpoint.

## Prerequisites:
* [AWS Account](https://aws.amazon.com/)
* [Sample static websites code](https://github.com/nalbert9/Cloud_Computing/tree/master/P1_Deploy_Website_AWS/Website)

## Topics Covered:
* S3 bucket creation
* S3 bucket configuration
* Website distribution via CloudFront
* Access website via web browser

## Dependencies
Cloud Services
* Amazon Web Services S3 - Resource hosting and deployments
* AWS CloudFront - CDN for SPA
* AWS EKS - Backend API
* AWS DynamoDB - Persistent Datastore
* AWS Cognito - User Authentication

Performance Tracking and DevOps Tools:
* AWS CloudWatch - Performance and Health checks
* Sentry - Bug Reporting
  * Alternates:
  * TBD
* Google Analytics - Usage Reporting
  * Alternates:
  * Mixpanel
* Travis (CI/CD)

Frameworks:
* [Ionic (Javascript) (Frontend)](https://ionicframework.com/)
* [Node.js (Javascript) (Backend)](https://nodejs.org/en/)
