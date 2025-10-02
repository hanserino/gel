# Custom Domain Setup for gelcalculator.com

## 🌐 Setting Up Your Custom Domain

### **1. GitHub Pages Configuration**

1. **Upload CNAME file** (already created):
   - File: `CNAME`
   - Content: `gelcalculator.com`

2. **Enable GitHub Pages**:
   - Go to your repository → Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: "main", Folder: "/ (root)"
   - Click "Save"

### **2. DNS Configuration at Your Domain Provider**

Configure these DNS records at your domain provider (where you bought gelcalculator.com):

#### **Option A: Apex Domain (Recommended)**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 300

Type: A
Name: @
Value: 185.199.109.153
TTL: 300

Type: A
Name: @
Value: 185.199.110.153
TTL: 300

Type: A
Name: @
Value: 185.199.111.153
TTL: 300
```

#### **Option B: CNAME (Alternative)**
```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 300
```

### **3. Verify Domain Configuration**

1. **Check DNS propagation**:
   - Visit: https://dnschecker.org
   - Enter: `gelcalculator.com`
   - Verify all 4 IP addresses are listed

2. **Test your domain**:
   - Visit: `https://gelcalculator.com`
   - Should redirect to your PWA

3. **Check HTTPS**:
   - GitHub Pages automatically provides SSL
   - Should show green lock in browser

### **4. Generate New Icons**

1. **Visit icon generator**: `https://gelcalculator.com/generate-icons-gc.html`
2. **Download all icons** (16x16 to 512x512)
3. **Upload to icons/ folder** in your repository
4. **Commit and push** changes

### **5. Update All References**

✅ **Completed Updates**:
- App name: "Gel Calculator"
- Domain: gelcalculator.com
- CNAME file created
- Manifest updated
- HTML title updated
- Google Analytics updated
- Deployment script updated

### **6. Test Your Live PWA**

1. **Visit**: `https://gelcalculator.com`
2. **Test installation** on mobile
3. **Verify offline functionality**
4. **Check all calculators work**
5. **Test settings persistence**

## 🚀 **Deployment Commands**

```bash
# Deploy to GitHub Pages
./deploy.sh

# Or manually:
git add .
git commit -m "Update for gelcalculator.com domain"
git push origin main
```

## 📱 **PWA Features on Custom Domain**

✅ **Custom Domain**: gelcalculator.com
✅ **HTTPS**: Automatically provided by GitHub Pages
✅ **PWA Installation**: Works on mobile devices
✅ **Offline Functionality**: Full service worker support
✅ **Custom Icons**: "GC" branded icons
✅ **Analytics**: Google Analytics tracking
✅ **SEO Optimized**: Proper meta tags and titles

## 🔧 **Troubleshooting**

### **Domain Not Working?**
- Check DNS propagation (can take 24-48 hours)
- Verify CNAME file is in repository root
- Check GitHub Pages settings

### **HTTPS Issues?**
- GitHub Pages provides SSL automatically
- May take a few minutes to activate
- Clear browser cache and try again

### **PWA Not Installing?**
- Ensure HTTPS is working
- Check manifest.json is accessible
- Verify all icons are uploaded

## 🎉 **You're Live!**

Your professional gel calculator PWA is now live at:
**https://gelcalculator.com**

Athletes worldwide can now:
- Visit your custom domain
- Install your PWA on their phones
- Use it offline during training
- Share it with other athletes

## 📊 **Next Steps**

1. **Monitor Analytics**: Check Google Analytics for usage data
2. **Share Your PWA**: Promote gelcalculator.com
3. **Collect Feedback**: See how athletes use your calculator
4. **Iterate**: Improve based on real usage data

Your gel calculator is now a professional, branded PWA with its own domain! 🏃‍♂️💪
