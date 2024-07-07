#!/bin/bash

# Add changes to git
git add .

# Amend the previous commit without changing its commit message
git commit --amend --no-edit

# Force push to the master branch
git push origin main --force

# Set GIT_USER environment variable and deploy
export GIT_USER="iamkhajan"
yarn deploy
