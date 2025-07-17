# ⚡️ React + Vite Static Website Deployment with GitHub Actions & AWS S3

This project demonstrates a **CI/CD pipeline** for deploying a Vite + React app to **Amazon S3** using **GitHub Actions**.

## 📌 Overview

Every time you push code to the `main` branch, GitHub Actions automatically:
- Installs dependencies
- Builds the project using Vite
- Uploads the final static files (`dist/`) to an S3 bucket
- Makes it available as a static website

## 🛠️ Setup Steps

### 1. 📦 Create S3 Bucket
1. Create a new S3 bucket in AWS Console
2. Go to **Properties** → **Static website hosting**
3. Enable static website hosting
4. Set `index.html` as index document
5. Go to **Permissions** → **Block public access** and disable it
6. Add this bucket policy in **Permissions** → **Bucket policy**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowGitHubActionsDeploy",
      "Effect": "Allow",
      "Principal": {
        "AWS": "<IAM user ARN"
      },
      "Action": "s3:*",
      "Resource": "<Bucket ARN>"
    },
    {
      "Sid": "PublicReadAccess",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::production-bucket-aaryankumar19/*"
    }
  ]
}

```

### 2. 🔐 Create IAM User
1. Go to **IAM** → **Users** → **Create user**
2. Give programmatic access (Access key)
3. Attach **AmazonS3FullAccess** policy
4. Save the **Access Key ID** and **Secret Access Key**

### 3. 🧪 Add GitHub Secrets
1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Add these repository secrets:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key | `abcd1234...` |
| `AWS_S3_BUCKET` | S3 bucket name | `your-bucket-name` |
| `AWS_REGION` | AWS region | `us-east-1` |

### 4. 🧬 GitHub Actions Workflow
Create `.github/workflows/main.yml` in your repository:
Refer this yml file: [deploy.yml](/.github/workflows/deploy.yml)

## 🚀 Result
After pushing to `main` branch, your site will be automatically deployed and available at:
```
http://your-bucket-name.s3-website-your-region.amazonaws.com
```
**Note**: Replace `your-bucket-name` with your actual bucket name and `your-region` with your AWS region (e.g., `us-east-1`).

or

To get this link, head to your Buckets > your-bucket > Properties.
In static website hosting, click on the link.
