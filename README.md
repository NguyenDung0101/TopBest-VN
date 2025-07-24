# Top Best Việt Nam - CMS Project

A complete Next.js application for managing and showcasing the best localities in Vietnam.

## Features

### Public Features
- 🏠 Beautiful responsive landing page
- 🗺️ Region cards showcasing Vietnamese localities
- 📱 Mobile-friendly design
- 🎨 Vietnamese cultural design elements

### Admin Features
- 🔐 Secure admin authentication
- 📊 Admin dashboard with statistics
- ✏️ CRUD operations for regions
- ⚙️ System settings management
- 🎛️ Clean admin interface

### Technical Features
- ⚡ Next.js 14 with App Router
- 🎨 TailwindCSS for styling
- 🔒 Authentication middleware
- 📦 Component-based architecture
- 🗄️ Mock data with Supabase-ready structure

## Quick Start

### 1. Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd top-best-vietnam

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local
\`\`\`

### 2. Initialize Sample Data

\`\`\`bash
# Run the initialization script
node scripts/init-data.js
\`\`\`

### 3. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit:
- Public site: http://localhost:3000
- Admin panel: http://localhost:3000/admin

### 4. Admin Login

Use these credentials to access the admin panel:
- **Email**: admin@topbest.vn
- **Password**: 123456

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   │   ├── login/         # Admin login
│   │   ├── edit/          # Region management
│   │   └── settings/      # System settings
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── Header.tsx         # Public header
│   ├── Footer.tsx         # Public footer
│   ├── RegionCard.tsx     # Region display card
│   └── AdminSidebar.tsx   # Admin navigation
├── lib/                   # Utilities and services
│   ├── auth.ts           # Authentication utilities
│   ├── config.ts         # App configuration
│   └── data-service.ts   # Data management service
├── data/                  # Mock data storage
│   └── regions.json      # Regions data
└── scripts/              # Utility scripts
    └── init-data.js      # Data initialization
\`\`\`

## Configuration

### Mock Data vs Supabase

The application supports both mock data and Supabase integration:

\`\`\`typescript
// lib/config.ts
export const config = {
  useSupabase: false, // Toggle between mock data and Supabase
  mockUser: {
    email: "admin@topbest.vn",
    password: "123456"
  }
}
\`\`\`

### Supabase Integration (Optional)

To enable Supabase:

1. Set up a Supabase project
2. Create a `regions` table with columns: `id`, `region`, `description`
3. Update `.env.local` with your Supabase credentials
4. Set `useSupabase: true` in `lib/config.ts`

## Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Utilities
node scripts/init-data.js  # Initialize sample data
\`\`\`

## Admin Panel Features

### Dashboard (`/admin`)
- Overview statistics
- Recent regions list
- Quick action buttons

### Region Management (`/admin/edit`)
- Add new regions
- Edit existing regions
- Delete regions
- Real-time form validation

### Settings (`/admin/settings`)
- Database configuration
- Security settings
- System information

## Authentication

The admin panel uses a simple authentication system:

- **Login**: `/admin/login`
- **Session**: Stored in localStorage
- **Middleware**: Protects admin routes
- **Logout**: Clears session and redirects

## Customization

### Adding New Regions

1. Use the admin panel at `/admin/edit`
2. Or directly edit `data/regions.json`
3. Or use the data service API

### Styling

The project uses TailwindCSS with Vietnamese cultural colors:
- Primary: Red (#DC2626)
- Secondary: Yellow (#D97706)
- Gradients: Red to Yellow

### Components

All components are modular and reusable:
- `RegionCard`: Display region information
- `AdminSidebar`: Admin navigation
- `Header/Footer`: Public site navigation

## Future Enhancements

- [ ] Supabase integration
- [ ] Image upload for regions
- [ ] User roles and permissions
- [ ] Email notifications
- [ ] Advanced search and filtering
- [ ] Multi-language support
- [ ] SEO optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
