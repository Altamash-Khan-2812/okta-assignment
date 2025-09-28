# Emails Dashboard

This is a static UI assignment built with React and Tailwind CSS.
It represents an email settings dashboard, where users can view and manage their email addresses and configure preferences.

## Preview

Click <a href="https://okta-assignment.vercel.app/">HERE</a> to see a live demo.

## Features (UI only)

- Display multiple email addresses with status badges (Primary, Verified, Unverified)
- Dropdown options for selecting Primary and Backup emails
- Toggle option to keep email addresses private
- Clean, modern layout styled with Tailwind CSS

## Tech Stack

- React – UI components
- Tailwind CSS – Styling

##  Project Structure

okta-assignment/
├── public/ # Static assets
├── src/
│ ├── components/
│ │ ├── emails/ # Email-related components
│ │ │ ├── EmailItem.jsx
│ │ │ ├── EmailList.jsx
│ │ ├── settings/ # Settings components
│ │ │ └── EmailSettings.jsx
│ │ └── ui/ # (Optional) Generic UI components
│ ├── pages/
│ │ └── PersonalAccountPage.jsx
│ ├── App.css
│ ├── App.jsx # Root app component
│ ├── main.jsx # Entry point
│ └── index.html
├── package.json
├── vite.config.js
└── README.md



##  Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/emails-dashboard.git
   cd emails-dashboard
2. npm install
3. npm run dev
4. Open http://localhost:5173 in your browser.