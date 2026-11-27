import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  BriefcaseBusiness,
  Building2,
  UserRound,
} from 'lucide-react';

export default function MobileBottomNav({
  activeRoute = '/home',
  onNavigate,
  currentUser,
}) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: LayoutDashboard,
      route: '/home',
    },
    {
      id: 'resume',
      label: 'Resume',
      icon: FileText,
      route: '/resume',
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: BriefcaseBusiness,
      route: '/jobs',
    },
    {
      id: 'companies',
      label: 'Companies',
      icon: Building2,
      route: '/companies',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: UserRound,
      route: '/profile',
    },
  ];

  const handleItemClick = (e, item) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(item.route);
    } else {
      window.history.pushState(null, '', item.route);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111111] border-t border-[#292929] shadow-[0_-8px_30px_rgba(0,0,0,0.6)] select-none"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
      }}
      aria-label="Mobile Bottom Navigation"
    >
      <div className="w-full max-w-lg mx-auto h-[76px] px-2 flex items-center">
        <div className="grid grid-cols-5 w-full items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Match if activeRoute starts with or equals item.route
            const isActive =
              activeRoute === item.route ||
              activeRoute.startsWith(item.route) ||
              (item.route === '/home' && (activeRoute === '/' || activeRoute === '#home'));

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={(e) => handleItemClick(e, item)}
                whileTap={{ scale: 0.92 }}
                className="col-span-1 w-full flex flex-col items-center justify-center cursor-pointer group focus:outline-none relative py-1"
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active Indicator Top Accent Glow */}
                {isActive && (
                  <motion.div
                    layoutId="mobileNavTopGoldBar"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#E5C34B] rounded-full shadow-[0_0_8px_rgba(229,195,75,0.6)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}

                {/* Icon Container: Rounded Box (#292315 for active, transparent for inactive) */}
                <div className="relative flex items-center justify-center">
                  {isActive ? (
                    <motion.div
                      layoutId="activeIconContainer"
                      className="w-11 h-8 rounded-xl bg-[#292315] border border-[#E5C34B]/25 flex items-center justify-center shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    >
                      <Icon
                        className="w-[18px] h-[18px] text-[#E5C34B]"
                        strokeWidth={2.4}
                      />
                    </motion.div>
                  ) : (
                    <div className="w-11 h-8 rounded-xl flex items-center justify-center transition-colors">
                      <Icon
                        className="w-[18px] h-[18px] text-[#888888] group-hover:text-neutral-300 transition-colors"
                        strokeWidth={1.8}
                      />
                    </div>
                  )}

                  {/* Profile Indicator Dot */}
                  {item.id === 'profile' && currentUser && (
                    <span
                      className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${
                        isActive ? 'bg-[#E5C34B]' : 'bg-[#E5C34B]/70'
                      }`}
                    />
                  )}
                </div>

                {/* Small Label below icon */}
                <span
                  className={`text-[11px] font-medium tracking-tight mt-1 leading-none transition-colors duration-200 truncate ${
                    isActive
                      ? 'text-[#E5C34B] font-semibold'
                      : 'text-[#888888] group-hover:text-neutral-300'
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
