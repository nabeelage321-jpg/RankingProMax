export interface QuickWin {
  num: number;
  name: string;
  price: 30 | 50;
  monthly?: boolean;
  desc: string;
}

export const QUICK_WINS: QuickWin[] = [
  { num: 1, name: 'Auto-Reply Agent for Google Business Messages', price: 30, monthly: true, desc: 'Automatically responds to customer messages on your Google Business Profile so you never miss an inquiry.' },
  { num: 2, name: 'Auto-Reply Bot for Facebook Messenger', price: 30, monthly: true, desc: 'Instant automated replies to Facebook Messenger inquiries, even when you\'re closed for the day.' },
  { num: 3, name: 'Auto-Reply Bot for Instagram DMs', price: 30, monthly: true, desc: 'Keeps your Instagram DMs answered around the clock with a friendly, automatic first response.' },
  { num: 4, name: 'Google Review Request SMS Template Pack (10 templates)', price: 30, desc: 'Ten ready-to-send text templates that make asking happy customers for reviews quick and natural.' },
  { num: 5, name: 'WhatsApp Business Setup & Auto-Greeting Message', price: 30, desc: 'We set up your WhatsApp Business profile with a custom auto-greeting so new contacts get an instant reply.' },
  { num: 6, name: 'Google Business Profile Audit Report (PDF)', price: 30, desc: 'A clear PDF report showing what\'s helping or hurting your Google Business Profile, with fixes explained simply.' },
  { num: 7, name: 'Competitor Analysis Mini-Report (3 competitors)', price: 30, desc: 'A short report comparing your online presence to three local competitors, so you know where you stand.' },
  { num: 8, name: '5 Social Media Post Templates (Canva, branded)', price: 30, desc: 'Five branded, ready-to-edit Canva templates so posting looks professional without starting from scratch.' },
  { num: 9, name: 'Business Bio Writing (Google, Instagram, Facebook)', price: 30, desc: 'Clean, consistent bio copy written for your Google, Instagram, and Facebook profiles.' },
  { num: 10, name: 'Keyword Research Report (Top 10 local keywords)', price: 30, desc: 'A simple report listing the ten local search terms most worth targeting for your business.' },
  { num: 11, name: 'Google Maps Embed + Click-to-Call Button for Website', price: 30, desc: 'We add a Google Maps embed and a one-tap call button to your website so customers reach you faster.' },
  { num: 12, name: '"Near Me" SEO Checklist Audit', price: 30, desc: 'A checklist review of how well your business shows up for "near me" style searches, with next steps.' },
  { num: 13, name: 'Monthly Review Monitoring & Alert Service', price: 30, monthly: true, desc: 'We watch your review platforms and alert you the moment a new review comes in.' },
  { num: 14, name: 'QR Code Menu or Service List (PDF + QR)', price: 30, desc: 'A clean PDF menu or service list with a scannable QR code customers can pull up instantly.' },
  { num: 15, name: 'Facebook/Instagram Profile Optimization', price: 30, desc: 'We clean up your profile info, categories, links, and photos so both platforms work harder for you.' },
  { num: 16, name: 'TikTok Business Account Setup', price: 30, desc: 'Full setup of a TikTok Business account, ready for you to start posting.' },
  { num: 17, name: 'Monthly Rank Tracking Report (5 keywords, monthly)', price: 30, monthly: true, desc: 'A monthly report tracking where you rank for five keywords you choose.' },
  { num: 18, name: 'Google Business Q&A Setup (10 pre-loaded Q&As)', price: 30, desc: 'We write and load ten common questions and answers directly onto your Google Business Profile.' },
  { num: 19, name: 'Contact Page + Google Form Lead Capture Setup', price: 30, desc: 'A simple contact page with a connected Google Form so leads land straight in your inbox.' },
  { num: 20, name: 'AI-Generated "About Us" Page Content Writing', price: 30, desc: 'A written "About Us" page that tells your business story clearly and professionally.' },
  { num: 21, name: 'Simple Appointment Booking Page (Calendly setup + branding)', price: 50, desc: 'A branded Calendly booking page so customers can grab a time slot without calling.' },
  { num: 22, name: 'Google Calendar Booking Link with Confirmation Email', price: 50, desc: 'A booking link tied to your Google Calendar that sends an automatic confirmation email.' },
  { num: 23, name: 'WhatsApp Booking Flow Setup (with auto-confirmation)', price: 50, desc: 'Customers book through WhatsApp and get an instant auto-confirmation, no back-and-forth required.' },
  { num: 24, name: 'Mini Landing Page for One Service (with booking button)', price: 50, desc: 'A focused one-page site for a single service, built to drive bookings.' },
  { num: 25, name: 'Facebook Appointment Tab Setup', price: 50, desc: 'We add and configure a booking tab directly on your Facebook Page.' },
  { num: 26, name: 'Email Capture Form + Welcome Email Automation', price: 50, desc: 'A signup form paired with an automatic welcome email for every new contact.' },
  { num: 27, name: 'SMS Appointment Reminder Setup (monthly)', price: 50, monthly: true, desc: 'Automatic text reminders sent before appointments to help cut down on no-shows.' },
  { num: 28, name: '"Request a Quote" Form + Email Notification Setup', price: 50, desc: 'A quote request form that emails you instantly whenever someone fills it out.' },
  { num: 29, name: 'Online Payment Link Setup (Stripe or PayPal)', price: 50, desc: 'A ready-to-use payment link through Stripe or PayPal so you can get paid without an invoice.' },
  { num: 30, name: 'Simple Referral Program Page ("Refer a friend, get $X")', price: 50, desc: 'A simple page explaining your referral offer, built to encourage word-of-mouth business.' },
];
