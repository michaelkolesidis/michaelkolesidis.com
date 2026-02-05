# 🎨 Portfolio Customization Guide

This guide walks you through turning this project into **your own personalized portfolio website**.


## 📋 Quick Checklist

- [ ] Update `package.json` with your information  
- [ ] Update HTML meta tags and page title  
- [ ] Replace personal content in data files  
- [ ] Update social media links  
- [ ] Add your own projects  
- [ ] Replace images and assets  
- [ ] Update copyright headers  
- [ ] Configure analytics (optional)  
- [ ] Update `README.md`  
- [ ] Test and deploy  

## 🔧 Step-by-Step Customization

### 1. Basic Information

#### Update `package.json`

```json
{
  "name": "your-portfolio",
  "url": "https://yourdomain.com",
  "description": "Your personal portfolio website",
  "author": "Your Name",
  "email": "you@example.com",
  "repository": "https://github.com/yourusername/your-repo.git",
  "homepage": "https://github.com/yourusername/your-repo"
}
```

Replace all values with your own project details.

#### Update `index.html` meta tags
- Update author, description, and title
- Update Open Graph (og:*) properties
- Replace keywords with your own

### 2. Personal Content

#### Update `src/data/texts.ts`
- **Intro Section**: Update with your name and short introduction
- **Contact Section**: Update with your email
- **About Section**: Write your own story, skills, and background

#### Update `src/data/social.ts`
- Replace all social media URLs with your own
- Add or remove platforms as needed
- Keep the same filename structure for icons

### 3. Projects

#### Update `src/data/projects.ts`
- Replace all existing projects with your own
- Follow the provided structure
- Add project images to `public/images/`
- Set `visible: false` to hide projects without deleting them


**Project Template:**
```typescript
{
  name: "Your Project Name",
  image: "../../images/your-project.png",
  technologies: "React, TypeScript, etc.",
  summary: "Brief description",
  description: "Detailed description",
  repository: "https://github.com/yourusername/project",
  deployment: "https://your-project.com",
  video: "", // Optional
  visible: true,
}
```

### 4. Awards Section

If you have awards you would like to display:

- Add your awards data in `src/data/awards.ts` 

If you would like to hide this section

- Remove the awards section from the the HTML structure
- Remove the awards import and function call from main.ts

### 5. Assets & Images

#### Replace Images
- **Favicon**: `public/assets/icons/favicon.ico`
- **Project Images**: Add to `public/images/`
- **Screenshots**: Update `screenshots/` folder
- **Social Icons**: Icons are in `public/assets/icons/social/`

#### Update Screenshots
- Take new screenshots of your customized site
- Replace files in `screenshots/` folder
- Update screenshots in `README.md`  

### 6. Styling & Colors

#### Color Palette (`src/data/colors.ts`)
- The site uses a predefined color palette
- Modify colors to match your brand
- Colors are referenced by index (`0-6`)

### 7. Analytics (Optional)

#### Google Analytics
- Create a `.env` file in the root
- Add: `VITE_GA_TRACKING_ID=your-ga-tracking-id`
- The site will automatically use your analytics

### 8. Copyright & Legal

#### Update Copyright Headers
- Files contain placeholder copyright information
- Replace `Michael Kolesidis` and `michael.kolesidis@gmail.com` globally
- The AGPL-3.0 license requires source code availability

### 9. README & Documentation

#### Update `README.md`

- Replace all references to the original author
- Update the project description and features
- Add your own screenshots
- Update contact information
- Remove the awards section if not applicable

### 10. Final Steps

#### Test Everything

```bash
pnpm run dev
```

- Ensure all sections load correctly
- Verify all links and images
- Test responsive behavior
- Check different browsers

#### Deploy

- Push to your GitHub repository
- Deploy to Vercel, Netlify, or your preferred platform
- Update domain in `package.json` and meta tags

## 🎯 Key Files to Customize

### Essential 

- `package.json` - Project metadata
- `index.html` - Meta tags and title
- `src/data/texts.ts` - Text content
- `src/data/social.ts` - Social links
- `src/data/projects.ts` - Projects
- `README.md` - Documentation

### Optional

- `src/data/colors.ts` - Color palette
- `.env` - Analytics configuration

## 🚀 Quick Start Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 💡 Tips

1. **Start Small**: Begin with basic info and gradually add projects
2. **Images**: Optimize images for web (WebP format recommended)
3. **Content**: Keep descriptions concise but informative
4. **Testing**: Test on different devices and browsers
5. **SEO**: Update meta tags for better search visibility

## 🆘 Need Help?

- Review examples in the data files
- Check TypeScript interfaces for structure
- Test changes incrementally
- Refer to the main `README.md`

## 📜 License Note

This project is licensed under the **GNU AGPL-3.0**, which means:

- The complete corresponding source code must be made available
- Modified versions and derivative works must remain Free Software under the same license
- The original license and copyright notices must be preserved
- Commercial use is allowed, provided all AGPL-3.0 obligations are met

Please ensure you understand and comply with the terms of the GNU Affero General Public License when using, modifying, or deploying this project.

## 🤝 Contributions & Feedback

Thanks for checking out my portfolio!

If you find bugs, have improvements that could apply to the original project, or want to discuss ideas, feel free to open an issue or start a discussion.  

Contributions that respect the scope and intent of the project are always welcome.
