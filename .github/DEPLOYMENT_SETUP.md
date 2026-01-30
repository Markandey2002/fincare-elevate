# GitHub Actions CI/CD Setup Guide

This guide will help you configure GitHub Actions to automatically deploy your website to AWS S3 and invalidate CloudFront cache.

## Prerequisites

1. **AWS Account** with:
   - An S3 bucket named `fincare.com` (or update the bucket name in the workflow)
   - CloudFront distribution configured (optional but recommended)
   - IAM user with appropriate permissions

2. **GitHub Repository** with Actions enabled

## Step 1: Create IAM User in AWS

1. Go to AWS IAM Console → Users → Create User
2. Name: `github-actions-deploy` (or any name you prefer)
3. **Attach Policies:**
   - `AmazonS3FullAccess` (or create a custom policy with only necessary permissions)
   - `CloudFrontFullAccess` (or create a custom policy for invalidation only)

### Custom IAM Policy (Recommended - More Secure)

Instead of full access, create a custom policy with minimal permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::fincare.com",
        "arn:aws:s3:::fincare.com/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

4. **Create Access Key:**
   - Go to Security credentials tab
   - Click "Create access key"
   - Choose "Application running outside AWS"
   - Save the **Access Key ID** and **Secret Access Key** (you'll need these for GitHub Secrets)

## Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following:

### Required Secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user access key ID | `AKIAIOSFODNN7EXAMPLE` |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret access key | `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
| `CLOUDFRONT_DISTRIBUTION_ID` | Your CloudFront distribution ID (optional) | `E1234567890ABC` |

### How to Find CloudFront Distribution ID:

1. Go to AWS CloudFront Console
2. Find your distribution for `fincare.com`
3. Copy the **Distribution ID** (starts with `E`)

## Step 3: Update Workflow Configuration (if needed)

Edit `.github/workflows/deploy.yml` and update:

- `AWS_REGION`: Change from `us-east-1` to your AWS region (e.g., `us-west-2`, `eu-west-1`, `ap-south-1`)
- `S3_BUCKET`: Already set to `fincare.com`, change if different
- `CLOUDFRONT_DISTRIBUTION_ID`: Leave empty if you don't use CloudFront

## Step 4: Configure S3 Bucket

Ensure your S3 bucket is configured for static website hosting:

1. **Bucket Policy** (for public read access):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::fincare.com/*"
    }
  ]
}
```

2. **Block Public Access:** Disable "Block all public access" (or configure selectively)

3. **Static Website Hosting:** Enable if using S3 directly (not required if using CloudFront)

## Step 5: Test the Workflow

1. Make a small change to your code
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "test: trigger deployment"
   git push origin main
   ```

3. Go to GitHub → **Actions** tab
4. Watch the workflow run
5. Check your website after deployment completes

## Troubleshooting

### Workflow fails with "Access Denied"
- Check IAM user permissions
- Verify AWS credentials in GitHub Secrets
- Ensure bucket name matches exactly

### CloudFront invalidation fails
- Verify `CLOUDFRONT_DISTRIBUTION_ID` secret is set correctly
- Check IAM user has CloudFront permissions
- Distribution ID should start with `E`

### Build fails
- Check Node.js version compatibility
- Verify `package-lock.json` is committed
- Review build logs in GitHub Actions

### Files not updating on website
- Check CloudFront invalidation completed
- Verify S3 sync completed successfully
- Clear browser cache
- Check CloudFront cache behavior settings

## Security Best Practices

1. ✅ Use IAM user with minimal required permissions (not root account)
2. ✅ Rotate access keys regularly
3. ✅ Use GitHub Secrets (never commit credentials)
4. ✅ Enable S3 bucket versioning for rollback capability
5. ✅ Monitor CloudTrail for access logs
6. ✅ Use CloudFront for better security and performance

## Manual Deployment

You can also trigger deployment manually:
1. Go to GitHub → **Actions** → **Deploy to AWS S3 and CloudFront**
2. Click **Run workflow** → **Run workflow**

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify AWS credentials and permissions
3. Review S3 bucket configuration
4. Check CloudFront distribution status
