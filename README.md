Lesotho Mission 2025 Website
A beautiful, modern website for the Every Nation Campus (ENC) WITS Lesotho Mission 2025 - showcasing our 10-day outreach bringing hope, faith, and transformative support to students and families across Lesotho.
Show Image
Show Image
🌟 Features

Responsive Design - Beautiful on all devices (mobile, tablet, desktop)
Dynamic Image Gallery - 31 mission photos with lightbox viewer
Interactive Navigation - Smooth page transitions between Home and Gallery
Rotating Bible Verses - Inspirational scriptures that change every 6 seconds
Partnership Section - Clear ways to support the mission (Prayer, Donations, Financial)
Banking Details - Easy-to-find donation information
Modern UI/UX - Gradient backgrounds, smooth animations, hover effects

🚀 Quick Start
1. Clone the Repository
bashgit clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
2. Set Up Your Images
Create an images folder and add your mission photos:
your-repo/
├── index.html
├── images/
│   ├── IMG-20251109-WA0016.jpg
│   ├── IMG-20251109-WA0021.jpg
│   └── ... (all your images)
└── README.md
3. Update Image List (if needed)
If you want to add/remove images, edit the galleryImages array in index.html:
javascriptconst galleryImages = [
    'IMG-20251109-WA0016.jpg',
    'IMG-20251109-WA0021.jpg',
    // Add your images here
];
4. Deploy to GitHub Pages
Option A: GitHub Settings

Push your code to GitHub
Go to your repository Settings
Navigate to Pages (in the sidebar)
Under "Source", select your main branch
Click Save
Your site will be live at https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

Option B: Command Line
bashgit add .
git commit -m "Initial commit"
git push origin main
Then follow Option A steps 2-6.
📁 Project Structure
lesotho-mission/
│
├── index.html          # Main website file
├── images/             # All mission photos
│   ├── IMG-*.jpg
│   └── ...
└── README.md          # This file
🎨 Customization
Change Colors
Edit the CSS variables in index.html:
css:root {
    --blue: #0047AB;    /* Primary blue */
    --green: #009543;   /* Primary green */
    --dark: #1a1a2e;    /* Dark text */
}
Update Banking Details
Find the "Banking Details" section in the HTML and update:
html<div class="bank-row">
    <span class="label">Account Number:</span>
    <span class="value strong">YOUR-ACCOUNT-NUMBER</span>
</div>
Add/Edit Bible Verses
Find the verse slider section and modify:
html<div class="verse">
    <p class="verse-text">"Your verse here"</p>
    <p class="verse-reference">Book Chapter:Verse</p>
</div>
🖼️ Gallery Features

Click any image to view full-screen
Arrow navigation - Click arrows or use keyboard ← → keys
Close lightbox - Click X or press Escape key
Responsive grid - Automatically adjusts to screen size
Full images - No cropping, shows complete photos

🔧 Troubleshooting
Images Not Loading on GitHub Pages?

Check case sensitivity - GitHub Pages is case-sensitive

Folder must be named images (lowercase)
Image filenames must match exactly


Verify files are pushed

bash   git add images/
   git commit -m "Add mission photos"
   git push

Test image path - Try accessing directly:

   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/images/IMG-20251109-WA0016.jpg

Check browser console (F12) for error messages

Still Having Issues?

Make sure index.html is in the root directory
Wait 5-10 minutes after pushing for GitHub Pages to update
Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

📱 Browser Support

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

🤝 Contributing
This is a mission website for ENC WITS. To contribute:

Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Open a Pull Request

📄 License
This project is for the Every Nation Campus WITS Lesotho Mission 2025.
📞 Contact
Every Nation Campus WITS

Website: [Your GitHub Pages URL]
Mission: Lesotho 2025

💝 Support the Mission
Banking Details

Account Name: ENC Wits Leaders
Bank: Capitec
Account Number: 1611867329
Branch Code: 470010
Reference: Your Name + Lesotho


Made with ❤️ for the Lesotho Mission 2025 | ENC WITS
"Ask the Lord of the harvest, therefore, to send out workers into his harvest field." - Matthew 9:38
