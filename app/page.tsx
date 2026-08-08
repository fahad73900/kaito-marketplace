'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Browse All');
  const [filterType, setFilterType] = useState('All');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeRoleView, setActiveRoleView] = useState<string | null>(null);
  
  const [managingAction, setManagingAction] = useState<any>(null);
  const [actionInput, setActionInput] = useState('');

  const allGeneratedItems = useMemo(() => {
    const list: any[] = [];
    const companies = ['Fahad Afzal Store', 'ArtisanPK', 'Northwind Labs', 'UrbanWear PK', 'Lahore Threads', 'Kashmir Crafts', 'TechNova', 'PixelCraft', 'AlphaWears', 'Zenith Hub'];
    const locations = ['Islamabad, Pakistan', 'Lahore, Pakistan', 'Karachi, Pakistan', 'Remote — Global', 'Faisalabad, Pakistan', 'Peshawar, Pakistan'];

    const catTypes: Record<string, string[]> = {
      'Browse All': ['Clothes', 'Shoes', 'Electronics', 'Watches', 'Frontend', 'Backend', 'Code & Scripts', 'Handmade', 'AI & Data', 'UI Kits', 'Design Assets', 'UI/UX Design', 'Marketing & SEO', 'DevOps & Cloud'],
      'Remote Work': ['Fixed price', 'Hourly', 'Frontend', 'Backend', 'AI & Data'],
      'Digital Products': ['Code & Scripts', 'Design Assets', 'UI Kits', 'Templates'],
      'Made-to-Order Products': ['Clothes', 'Shoes', 'Leather & Wood', 'Textiles', 'Watches'],
      'Digital Services': ['UI/UX Design', 'Marketing & SEO', 'Copywriting', 'DevOps & Cloud']
    };

    const itemCatalog: Record<string, { title: string; image: string; colors: string[]; desc: string; priceBase: number }[]> = {
      'Clothes': [
        { title: 'Designer Summer Lawn Suit 3-Piece', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80', colors: ['Emerald Green', 'Royal Blue', 'Blush Pink'], desc: 'Premium unstitched 3-piece lawn suit featuring delicate thread embroidery and chiffon dupatta.', priceBase: 45 },
        { title: 'Casual Hooded Fleece Sweatshirt', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80', colors: ['Jet Black', 'Heather Grey', 'Charcoal'], desc: 'Ultra-soft fleece fabric hoodie with double-lined hood and kangaroo pocket.', priceBase: 30 }
      ],
      'Shoes': [
        { title: 'Handcrafted Pure Leather Oxford Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80', colors: ['Tan Brown', 'Dark Mahogany', 'Glossy Black'], desc: '100% genuine cowhide leather dress shoes crafted with Goodyear welt construction.', priceBase: 120 }
      ],
      'Electronics': [
        { title: 'Wireless Active Noise-Canceling Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', colors: ['Space Gray', 'Pearl White', 'Matte Black'], desc: 'Over-ear active noise-canceling wireless headphones with 40-hour battery life.', priceBase: 180 }
      ],
      'Watches': [
        { title: 'Luxury Chronograph Stainless Steel Watch', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80', colors: ['Silver & Gold', 'Midnight Blue', 'All Black'], desc: 'Elegant Japanese quartz chronograph watch with sapphire crystal glass.', priceBase: 210 }
      ],
      'Frontend': [
        { title: 'Senior React / Next.js Developer', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', colors: ['Remote Global', 'React', 'Next.js'], desc: 'Build scalable web applications using Next.js, TypeScript, and Tailwind CSS.', priceBase: 2500 }
      ],
      'Backend': [
        { title: 'Full-Stack Node.js & Express Engineer', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', colors: ['Node.js', 'MongoDB', 'PostgreSQL'], desc: 'Develop secure RESTful and GraphQL backend microservices connected with databases.', priceBase: 3200 }
      ],
      'AI & Data': [
        { title: 'AI Integration & LangChain Engineer', image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80', colors: ['OpenAI', 'Python', 'VectorDB'], desc: 'Implement custom AI chatbots, LLM pipelines, and automated data processing scripts.', priceBase: 3400 },
        { title: 'Data Science & Python Automation Expert', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80', colors: ['Pandas', 'Python', 'ML'], desc: 'Model training, dataset preparation, and Python automation workflows.', priceBase: 2900 }
      ],
      'Fixed price': [
        { title: 'E-Commerce Full Website Setup', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', colors: ['Fixed Milestone', 'Full Stack'], desc: 'Complete marketplace setup with payment gateway and user dashboards.', priceBase: 1500 }
      ],
      'Hourly': [
        { title: 'Senior Full-Stack Consultant (Hourly)', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80', colors: ['Flexible Hours', 'Global'], desc: 'Hourly code reviews, architecture planning, and bug fixing.', priceBase: 50 }
      ],
      'Code & Scripts': [
        { title: 'Next.js Multi-Role Marketplace Boilerplate', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', colors: ['TypeScript', 'Tailwind CSS'], desc: 'Production-ready full-stack boilerplate with authentication and database schemas.', priceBase: 49 }
      ],
      'Design Assets': [
        { title: 'Vector Icons & Illustration Pack', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80', colors: ['SVG', 'Figma'], desc: 'Over 1,000+ scalable vector icons and modern digital art assets for web creators.', priceBase: 25 }
      ],
      'UI Kits': [
        { title: 'SaaS Dashboard UI Kit Pro', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80', colors: ['Dark Mode', 'Light Mode'], desc: 'Comprehensive Figma & Tailwind UI component kit for enterprise SaaS web apps.', priceBase: 39 }
      ],
      'Templates': [
        { title: 'Portfolio & Agency Landing Template', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80', colors: ['HTML5', 'Next.js'], desc: 'Clean, responsive multi-page template optimized for high conversion rates.', priceBase: 19 }
      ],
      'UI/UX Design': [
        { title: 'High-Fidelity UI/UX Prototyping Service', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80', colors: ['Figma', 'User Research'], desc: 'Professional UI prototyping with custom user journey mapping and wireframing.', priceBase: 300 }
      ],
      'Marketing & SEO': [
        { title: 'Growth Hacking & SEO Optimization', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80', colors: ['Analytics', 'Ahrefs'], desc: 'Boost organic search traffic with data-driven SEO strategies and content planning.', priceBase: 500 }
      ],
      'Copywriting': [
        { title: 'Professional Technical Copywriting', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80', colors: ['Blogs', 'Docs'], desc: 'High-converting technical writing, blog post creation, and brand messaging.', priceBase: 150 }
      ],
      'DevOps & Cloud': [
        { title: 'AWS / GCP Cloud Infrastructure Setup', image: 'https://images.unsplash.com/photo-1667372335497-681e19441113?auto=format&fit=crop&w=600&q=80', colors: ['AWS', 'Docker', 'CI/CD'], desc: 'Secure cloud server deployment, containerization, and automated CI/CD pipelines.', priceBase: 800 }
      ],
      'Handmade': [
        { title: 'Handcrafted Genuine Leather Journal', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80', colors: ['Vintage Brown', 'Antique Tan'], desc: 'Hand-stitched vintage leather journal with handmade recycled cotton pages.', priceBase: 45 }
      ]
    };

    let idCounter = 1;
    ['Browse All', 'Remote Work', 'Digital Products', 'Made-to-Order Products', 'Digital Services'].forEach((cat) => {
      const types = catTypes[cat];
      for (let i = 0; i < 20; i++) {
        const type = types[i % types.length];
        const variants = itemCatalog[type] || itemCatalog['Clothes'];
        const baseItem = variants[i % variants.length];
        const company = companies[i % companies.length];
        const location = locations[i % locations.length];
        const color = baseItem.colors[i % baseItem.colors.length];

        let priceStr = '$' + (baseItem.priceBase + (i * 3));
        if (cat === 'Remote Work') priceStr = '$' + (baseItem.priceBase + (i * 50)) + ' / proj';
        if (cat === 'Digital Services') priceStr = '$' + (baseItem.priceBase + (i * 10)) + ' / proj';

        list.push({
          id: idCounter++,
          category: cat,
          title: `${baseItem.title} #${i + 1}`,
          type: type,
          company: company,
          image: baseItem.image,
          colorEffect: color,
          desc: baseItem.desc,
          location: location,
          price: priceStr,
          time: `${(i % 4) + 1} days ago`,
          tags: [type, color, 'Verified']
        });
      }
    });

    return list;
  }, []);

  const categoryData: Record<string, {
    title: string;
    subtitle: string;
    bannerImage: string;
    filters: string[];
  }> = {
    'Browse All': {
      title: 'Explore All Verified Marketplace Items',
      subtitle: 'Browse through our massive curated collection featuring digital assets, remote contracts, and custom services.',
      bannerImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      filters: ['All', 'Clothes', 'Shoes', 'Electronics', 'Frontend', 'Backend', 'AI & Data', 'Code & Scripts', 'UI Kits', 'Design Assets', 'UI/UX Design', 'DevOps & Cloud']
    },
    'Remote Work': {
      title: 'Global Remote Job Listings',
      subtitle: 'Secure top international remote contracts including AI & Data engineering, frontend, and backend roles.',
      bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      filters: ['All', 'Fixed price', 'Hourly', 'Frontend', 'Backend', 'AI & Data']
    },
    'Digital Products': {
      title: 'Digital Source Code & UI Kits',
      subtitle: 'Production-ready boilerplates, design assets, UI kits, and templates built by professionals.',
      bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      filters: ['All', 'Code & Scripts', 'Design Assets', 'UI Kits', 'Templates']
    },
    'Made-to-Order Products': {
      title: 'Custom Clothes, Shoes & Crafts',
      subtitle: 'Order bespoke clothing, handmade leather shoes, and artisan goods tailored precisely to your specs.',
      bannerImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      filters: ['All', 'Clothes', 'Shoes', 'Watches']
    },
    'Digital Services': {
      title: 'Professional Freelance Services',
      subtitle: 'Hire verified experts for UI/UX prototyping, digital marketing, copywriting, and AWS cloud deployments.',
      bannerImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      filters: ['All', 'UI/UX Design', 'Marketing & SEO', 'Copywriting', 'DevOps & Cloud']
    }
  };

  const currentCategoryMeta = categoryData[activeTab] || categoryData['Browse All'];

  const displayedItems = useMemo(() => {
    let items = activeTab === 'Browse All' 
      ? allGeneratedItems 
      : allGeneratedItems.filter(item => item.category === activeTab);

    if (filterType !== 'All') {
      items = items.filter(item => item.type === filterType);
    }
    return items;
  }, [allGeneratedItems, activeTab, filterType]);

  const roleDashboards: Record<string, any> = {
    Buyer: {
      tagColor: 'bg-sky-100 text-sky-800 border-sky-200',
      title: '🛍️ Buyer Control Center & Order Tracking',
      subtitle: 'Monitor active parcel shipments, review saved wishlist items, and manage secure escrow payments.',
      stats: [
        { label: 'Active Cart Items', value: '3 Items', icon: '🛒', change: '+1 today' },
        { label: 'Dispatched Orders', value: '5 Deliveries', icon: '📦', change: 'On the way' },
        { label: 'Wishlist Saved', value: '18 Items', icon: '❤️', change: 'Updated' }
      ],
      sections: [
        { name: 'Recent Purchase Delivery', desc: 'Designer Summer Lawn Suit 3-Piece ($45) — Shipped via TCS 🟢', actionType: 'purchases', badge: 'Active Delivery' },
        { name: 'Wishlist Item Alert', desc: 'Handcrafted Pure Leather Oxford Shoes ($120) — Price dropped 5%', actionType: 'wishlist', badge: 'Saved Item' }
      ]
    },
    Seller: {
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      title: '📦 Seller Storefront & Revenue Hub',
      subtitle: 'Manage inventory catalogs, fulfill customer orders, and withdraw store earnings instantly.',
      stats: [
        { label: 'Active Store Listings', value: '45 Products', icon: '🏷️', change: 'Fully Live' },
        { label: 'Monthly Revenue', value: '$3,850', icon: '💰', change: '+18% this month' },
        { label: 'Customer Rating', value: '4.9 ⭐', icon: '🌟', change: 'Top Rated' }
      ],
      sections: [
        { name: 'Storefront Inventory Management', desc: 'Fahad Afzal Store — Clothes, Shoes & Digital Goods Live', actionType: 'inventory', badge: 'Store Live' },
        { name: 'Pending Store Payouts', desc: '$720 ready for instant bank transfer to local account', actionType: 'payouts', badge: 'Ready' }
      ]
    },
    Worker: {
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      title: '💻 Worker & Freelancer Gig Workspace',
      subtitle: 'Track milestone progress, submit completed source code tasks, and communicate with clients.',
      stats: [
        { label: 'Applied Gigs', value: '7 Proposals', icon: '📝', change: 'Pending Review' },
        { label: 'Active Contracts', value: '3 Running', icon: '⚡', change: 'High Priority' },
        { label: 'Completed Jobs', value: '28 Done', icon: '🏆', change: '100% Success' }
      ],
      sections: [
        { name: 'Active Client Assignment', desc: 'AI Integration & LangChain Engineer with Northwind Labs ($3,400)', actionType: 'assignment', badge: 'In Progress' },
        { name: 'Milestone Approval Status', desc: 'Phase 2 completed & submitted, waiting for employer sign-off', actionType: 'milestone', badge: 'Reviewing' }
      ]
    },
    Employer: {
      tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      title: '👔 Employer & Recruiter Management Portal',
      subtitle: 'Publish global remote job openings, review vetted applicant portfolios, and hire elite specialists.',
      stats: [
        { label: 'Active Job Vacancies', value: '5 Openings', icon: '📢', change: 'Accepting CVs' },
        { label: 'Total Candidate Pool', value: '62 Applicants', icon: '👥', change: 'Vetted Profiles' },
        { label: 'Hired Contractors', value: '11 Experts', icon: '🤝', change: 'Active Teams' }
      ],
      sections: [
        { name: 'Active Job Posting', desc: 'AI & Data Engineering Lead (Remote Global - $3,400/proj)', actionType: 'postings', badge: 'Publishing' },
        { name: 'Applicant Pipeline Review', desc: '22 new developer profiles pending technical interview', actionType: 'candidates', badge: 'Action Required' }
      ]
    },
    Admin: {
      tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
      title: '🛡️ Admin Security & Moderation Console',
      subtitle: 'Oversee platform health metrics, resolve user disputes, and approve product listings.',
      stats: [
        { label: 'Registered Users', value: '2,480 Total', icon: '📊', change: '+120 this week' },
        { label: 'Pending Approvals', value: '12 Items', icon: '⏳', change: 'Queue Clear' },
        { label: 'System Health', value: '100% Optimal', icon: '🟢', change: 'Zero Latency' }
      ],
      sections: [
        { name: 'User Role & Permissions Control', desc: 'Manage Buyer, Seller, Worker, and Employer access privileges', actionType: 'users', badge: 'Secure' },
        { name: 'Platform Security Logs', desc: 'All server API endpoints operating with encrypted SSL certificates', actionType: 'security', badge: 'Protected' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-900 font-sans selection:bg-emerald-600 selection:text-white">
      <div className="bg-gradient-to-r from-gray-900 via-emerald-950 to-gray-900 text-emerald-200 text-xs text-center py-2.5 font-medium tracking-wide">
        ✨ No joining fees · No listing fees · Fully interactive dashboard action buttons active
      </div>

      <nav className="flex justify-between items-center px-6 lg:px-12 py-4 border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-6">
          <Link href="/" onClick={() => setActiveRoleView(null)} className="flex items-center space-x-2 cursor-pointer group">
            <span className="bg-gray-900 group-hover:bg-emerald-700 transition text-white font-black px-3 py-1 rounded-lg text-base tracking-wider shadow-sm">KAITO</span>
            <span className="text-xs font-bold tracking-widest text-emerald-700">LTD</span>
          </Link>

          <button
            onClick={() => { setActiveRoleView(null); setActiveTab('Browse All'); setFilterType('All'); }}
            className={`hidden md:flex items-center space-x-1.5 text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer border ${
              activeTab === 'Browse All' && !activeRoleView 
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' 
                : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <span>🛍️ Browse All</span>
          </button>
        </div>

        <div className="hidden md:flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-72 lg:w-96 focus-within:ring-2 focus-within:ring-emerald-600 transition">
          <span className="text-gray-400 mr-2 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Search remote jobs, UI kits, services..." 
            className="bg-transparent text-sm text-gray-900 focus:outline-none w-full"
          />
        </div>

        <div className="flex items-center space-x-3 text-sm font-semibold text-gray-700">
          <div className="hidden xl:flex space-x-1.5 text-xs font-bold">
            {['Buyer', 'Seller', 'Worker', 'Employer', 'Admin'].map((role) => (
              <button
                key={role}
                onClick={() => setActiveRoleView(role)}
                className={`px-3 py-1.5 rounded-xl border transition cursor-pointer shadow-xs ${
                  activeRoleView === role 
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md scale-105' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
          <Link href="/login" className="hover:text-emerald-600 text-xs font-bold">Sign in</Link>
          <Link href="/login" className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition text-xs font-bold shadow-sm">Get Started</Link>
        </div>
      </nav>

      {!activeRoleView && (
        <div className="border-b border-gray-200 bg-white px-6 lg:px-12 flex space-x-8 text-sm font-semibold overflow-x-auto scrollbar-none shadow-xs">
          {Object.keys(categoryData).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setFilterType('All'); }}
              className={`py-4 border-b-2 transition whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                activeTab === tab 
                  ? 'border-emerald-600 text-emerald-700 font-bold' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>{tab === 'Browse All' ? '🌟' : tab === 'Remote Work' ? '💻' : tab === 'Digital Products' ? '⚡' : tab === 'Made-to-Order Products' ? '🧵' : '🛠️'}</span>
              <span>{tab}</span>
            </button>
          ))}
        </div>
      )}

      {activeRoleView && roleDashboards[activeRoleView] ? (
        <div className="px-6 lg:px-12 py-10 max-w-7xl mx-auto space-y-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm gap-4">
            <div className="space-y-2">
              <span className={`text-xs font-black px-3.5 py-1.5 rounded-xl border uppercase tracking-widest inline-block ${roleDashboards[activeRoleView].tagColor}`}>
                {activeRoleView} Operational Mode
              </span>
              <h1 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">{roleDashboards[activeRoleView].title}</h1>
              <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">{roleDashboards[activeRoleView].subtitle}</p>
            </div>
            <button
              onClick={() => setActiveRoleView(null)}
              className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-2xl transition cursor-pointer border border-gray-200 shadow-xs flex items-center space-x-2"
            >
              <span>← Back to Marketplace</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roleDashboards[activeRoleView].stats.map((stat: any, idx: number) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-3 relative overflow-hidden group hover:border-emerald-500 transition duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                  <span className="text-xl p-2 bg-gray-50 rounded-2xl group-hover:scale-110 transition">{stat.icon}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">{stat.value}</h3>
                <div className="text-[11px] font-bold text-emerald-700 bg-emerald-50 inline-block px-2.5 py-1 rounded-lg border border-emerald-200">
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <h3 className="text-lg font-black text-gray-900">Active Workflow & Management Modules</h3>
              <span className="text-xs font-bold text-gray-400">Secured End-to-End</span>
            </div>
            <div className="space-y-4">
              {roleDashboards[activeRoleView].sections.map((sec: any, sIdx: number) => (
                <div key={sIdx} className="p-5 bg-gray-50 hover:bg-white rounded-2xl border border-gray-200/80 hover:border-emerald-400 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xs">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-bold text-gray-900">{sec.name}</h4>
                      <span className="text-[10px] font-black px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">
                        {sec.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{sec.desc}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setManagingAction(sec);
                      setActionInput('');
                    }}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-sm whitespace-nowrap active:scale-95"
                  >
                    Manage Module →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="px-6 lg:px-12 pt-8 pb-4 max-w-7xl mx-auto">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200 uppercase">
                {activeTab} Collection ({displayedItems.length} Available)
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">{currentCategoryMeta.title}</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl leading-relaxed">{currentCategoryMeta.subtitle}</p>
            </div>
          </div>

          <div className="px-6 lg:px-12 py-4 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2.5 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-bold text-gray-500 mr-2 uppercase tracking-wider flex items-center">⚡ Filter By:</span>
              {currentCategoryMeta.filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterType(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shadow-xs ${
                    filterType === filter 
                      ? 'bg-gray-900 text-white shadow-md scale-105' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300'
                  }`}
                >
                  {filter === 'All' ? '🔥 All Items' : `✨ ${filter}`}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 lg:px-12 pb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm sticky top-24">
              <div className="h-80 sm:h-[420px] w-full relative">
                <img src={currentCategoryMeta.bannerImage} alt={activeTab} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-2">
                    <span className="bg-emerald-600 text-[11px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-sm">Verified Hub</span>
                    <h3 className="text-2xl font-black">{activeTab}</h3>
                    <p className="text-xs text-gray-200 leading-relaxed">Explore verified listings with detailed specs and secure checkout.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex justify-between items-center text-xs font-bold text-gray-500 bg-white px-4 py-3 rounded-2xl border border-gray-200">
                <span>Showing {displayedItems.length} items for <strong className="text-gray-900">{filterType}</strong></span>
                <span className="text-emerald-700">Sorted by Popularity ⭐</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {displayedItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between shadow-xs group">
                    <div className="h-52 w-full relative overflow-hidden bg-gray-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-black px-2.5 py-1 bg-white/90 backdrop-blur-md text-emerald-800 rounded-lg shadow-sm uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-black px-2.5 py-1 bg-gray-900/80 backdrop-blur-md text-emerald-300 rounded-lg shadow-sm">
                          🎨 {item.colorEffect}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 transition line-clamp-1">{item.title}</h4>
                          <span className="text-emerald-700 font-black text-base ml-2">{item.price}</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-500 mt-0.5">{item.company}</p>
                        <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-[11px] text-gray-500">
                          <span>📍 {item.location}</span>
                        </div>
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition cursor-pointer shadow-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white border border-gray-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 text-gray-700 hover:text-gray-900 text-base font-black bg-white/90 backdrop-blur-md w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition shadow-md"
            >
              ✕
            </button>

            <div className="h-64 w-full relative">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-black text-gray-900">{selectedItem.title}</h3>
              <p className="text-xs text-gray-600">{selectedItem.desc}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-lg font-black text-emerald-700">{selectedItem.price}</span>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}