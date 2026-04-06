# Panshi Restaurants And Hotel - Product Requirements Document

## Original Problem Statement
Build a full-stack restaurant website for "Panshi Restaurants And Hotel" (পানসি রেস্টুরেন্টস অ্যান্ড হোটেল), located at 8 No Road, Dhaka, Bangladesh. Phone: +880 1322-411534.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion + React Helmet Async
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Authentication**: JWT with token stored in localStorage + httpOnly cookies
- **Deployment**: Kubernetes (Emergent Platform)

## User Personas
1. **Restaurant Visitors**: Browse menu, read blogs, contact restaurant, order via WhatsApp
2. **Admin Users**: Manage products, blogs, reviews, and customer messages

## Core Requirements (Static)
- Multi-language support (Bengali + English)
- WhatsApp ordering integration
- SEO optimization with meta tags and JSON-LD schema
- Mobile-first responsive design
- Admin panel for content management

## What's Been Implemented (April 6, 2026)

### Public Pages
- [x] Homepage with parallax hero, featured dishes carousel, reviews, Google Map
- [x] Menu page with category filters, search, WhatsApp order buttons
- [x] Blog listing page with featured images
- [x] Blog post detail with social share buttons
- [x] About page with team section and restaurant story
- [x] Contact page with form submission
- [x] 404 page

### Admin Panel (/admin)
- [x] Admin authentication (email/password login)
- [x] Dashboard with stats and quick actions
- [x] Products Manager (CRUD, stock toggle)
- [x] Blogs Manager (CRUD, publish toggle)
- [x] Reviews Manager (approve/hide, delete)
- [x] Messages viewer (view contact submissions)

### Database Schema
- **products**: id, name_en, name_bn, category, description, price, image_url, in_stock, created_at
- **blog_posts**: id, title, slug, content, thumbnail_url, author, published, created_at
- **reviews**: id, reviewer_name, rating, comment, approved, created_at
- **contacts**: id, name, phone, message, created_at
- **users**: id, email, password_hash, name, role, created_at

### Design Implementation
- Color palette: Deep green (#1B4332), Gold (#F4A623), Cream (#FFF8F0), Dark (#0F1A15)
- Fonts: Playfair Display (headings), Nunito (body)
- Floating WhatsApp button with pulse animation
- Mobile bottom navigation bar
- Glassmorphism header

## Test Credentials
- Admin Email: Admin@restaurant.com
- Admin Password: Admin@123

## Prioritized Backlog

### P0 (Completed)
- All public pages
- Admin CRUD operations
- WhatsApp integration
- Mobile responsiveness

### P1 (Future)
- Image upload functionality (currently uses URLs)
- Blog WYSIWYG editor
- Order tracking via WhatsApp API
- Customer review submission form

### P2 (Nice to have)
- Menu PDF download
- Email notifications for new messages
- Analytics dashboard
- Multi-admin support with roles

## Next Action Items
1. Add real food images from the restaurant
2. Update sample menu items with actual products and prices
3. Consider integrating WhatsApp Business API for order management
4. Add Google Analytics for visitor tracking
