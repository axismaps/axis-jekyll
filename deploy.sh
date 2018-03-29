jekyll build
aws s3 sync _site s3://www.axismaps.com --exclude="Gemfile*" --exclude="deploy.sh" --delete
aws cloudfront create-invalidation --distribution-id E3UDPY742B4M5R --paths /\*