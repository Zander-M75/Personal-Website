# Contact Form Setup Guide

Your contact form is now ready! Just follow these 3 simple steps to activate it:

## Step 1: Get Your Free Web3Forms Access Key

1. Go to **https://web3forms.com**
2. Click **"Create Access Key"**
3. Enter your email address (marenberg.zander@gmail.com)
4. Click **"Create Access Key"**
5. Check your email and copy the access key they send you

**Note:** No account creation needed! Just your email.

## Step 2: Add Your Access Key

Open `src/components/Contact.jsx` and find line 141:

```jsx
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

Replace `YOUR_ACCESS_KEY_HERE` with your actual access key from Web3Forms.

**Example:**
```jsx
<input type="hidden" name="access_key" value="a1b2c3d4-1234-5678-9abc-def123456789" />
```

## Step 3: Test It!

1. Run your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email (marenberg.zander@gmail.com)
5. You should receive the form submission!

---

## Features Included ✓

- ✅ Form validation (all fields required)
- ✅ Loading state ("Sending..." button)
- ✅ Success message (green checkmark)
- ✅ Error handling (red error message)
- ✅ Auto-reset after 5 seconds
- ✅ Disabled submit during sending
- ✅ Completely free (unlimited submissions)

---

## Alternative Free Options

### Option A: Formspree (50 submissions/month)

1. Sign up at https://formspree.io
2. Create a new form
3. Update form in `Contact.jsx`:

```jsx
<form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option B: EmailJS (200 emails/month)

1. Sign up at https://emailjs.com
2. Create email service & template
3. Install: `npm install @emailjs/browser`
4. Use EmailJS SDK in the form handler

---

## Troubleshooting

**Form not sending?**
- Make sure you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
- Check browser console for errors
- Verify your email in Web3Forms is correct

**Not receiving emails?**
- Check spam folder
- Verify the email address in Web3Forms dashboard
- Test with a different email to rule out spam filters

**Getting CORS errors?**
- This shouldn't happen with Web3Forms, but if it does, make sure you're using `https://api.web3forms.com/submit` (not http)

---

## Need Help?

Web3Forms documentation: https://docs.web3forms.com

Enjoy your working contact form! 🎉

