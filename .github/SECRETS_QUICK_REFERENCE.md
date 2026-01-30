# GitHub Secrets Quick Reference

## Required Secrets

Add these in: **GitHub Repository → Settings → Secrets and variables → Actions → New repository secret**

### 1. AWS_ACCESS_KEY_ID
- **Type:** Secret
- **Value:** Your IAM user's Access Key ID
- **Example:** `AKIAIOSFODNN7EXAMPLE`
- **Required:** ✅ Yes

### 2. AWS_SECRET_ACCESS_KEY
- **Type:** Secret
- **Value:** Your IAM user's Secret Access Key
- **Example:** `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
- **Required:** ✅ Yes

### 3. CLOUDFRONT_DISTRIBUTION_ID
- **Type:** Secret
- **Value:** Your CloudFront Distribution ID (starts with `E`)
- **Example:** `E1234567890ABC`
- **Required:** ⚠️ Optional (workflow will skip invalidation if not set)

## How to Get AWS Credentials

1. **AWS Console** → **IAM** → **Users**
2. Select your IAM user (or create a new one)
3. **Security credentials** tab
4. **Create access key** → **Application running outside AWS**
5. Copy **Access Key ID** and **Secret Access Key**

## How to Get CloudFront Distribution ID

1. **AWS Console** → **CloudFront**
2. Find your distribution for `fincare.com`
3. Copy the **Distribution ID** (starts with `E`)

## Security Notes

- ⚠️ Never commit these values to git
- ✅ Always use GitHub Secrets
- ✅ Use IAM user with minimal permissions (not root account)
- ✅ Rotate keys regularly
