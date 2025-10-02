#!/bin/bash

# GitHub Pages PWA Deployment Script
# Run this script to deploy your gel calculator PWA

echo "🚀 Deploying Gel Calculator PWA to GitHub Pages..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Update PWA: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository found!"
    echo "Please add your GitHub repository as origin:"
    echo "git remote add origin https://github.com/hanserino/gel.git"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your PWA should be available at:"
echo "https://$(git remote get-url origin | sed 's/.*github.com\///' | sed 's/\.git$//' | sed 's/.*\///')/gel/"
echo ""
echo "📱 Test your PWA:"
echo "1. Open the URL on mobile"
echo "2. Look for 'Add to Home Screen' prompt"
echo "3. Test offline functionality"
echo ""
echo "🔧 If you need to generate icons:"
echo "Visit: https://$(git remote get-url origin | sed 's/.*github.com\///' | sed 's/\.git$//' | sed 's/.*\///')/gel/generate-icons-simple.html"
