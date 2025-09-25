## 📂 Component Structure

- `src/components/emails/EmailItem.jsx`  
  Renders a single email row with status badges (Primary / Verified / Unverified) and a dropdown menu.

- `src/components/emails/EmailList.jsx`  
  Wraps multiple `EmailItem` components inside a styled list.

- `src/components/settings/EmailSettings.jsx`  
  Provides settings for **Primary email**, **Backup email**, and a **Privacy toggle** with responsive layout.

---

## 💡 Implementation Notes
- **Accessibility:** Semantic HTML (`<ul>`, `<li>`, ARIA roles) and keyboard-focusable dropdowns/switch.  
- **Responsiveness:** Mobile-first, `flex-col` on small screens, `flex-row` on larger screens.  
- **UI Library:** Built with [shadcn/ui](https://ui.shadcn.com/) + TailwindCSS.  
- **Interactivity:** Dropdown menus, switch toggle, and state management with React hooks.  

---


## 🚀 Steps to Run the Project

   ```bash
   
   cd email-settings-ui

   npm install

   npm run dev

   The app will be available at http://localhost:5173



