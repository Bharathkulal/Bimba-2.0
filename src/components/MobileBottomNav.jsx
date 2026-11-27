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
  activeItem = 'home',
  onNavigate,
  currentUser,
}) {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: LayoutDashboard,
      route: '#home',
    },
    {
      id: 'resume',
      label: 'Resume',
      icon: FileText,
      route: '#resume',
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: BriefcaseBusiness,
      route: '#jobs',
    },
    {
      id: 'companies',
      label: 'Companies',
      icon: Building2,
      route: '#companies',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: UserRound,
      route: currentUser ? '#dashboard' : '#login',
    },
  ];

  const handleItemClick = (e, item) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(item.id, item.route);
    } else {
      window.location.hash = item.route;
    }
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
      }}
      aria-label="Mobile Navigation"
    >
      <div className="w-full max-w-md mx-auto px-1 pt-1.5 pb-1">
        <div className="grid grid-cols-5 w-full items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={(e) => handleItemClick(e, item)}
                whileTap={{ scale: 0.9 }}
                className="relative col-span-1 w-full py-1.5 flex flex-col items-center justify-center cursor-pointer select-none group focus:outline-none"
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Active Indicator Top Accent Bar */}
                {isActive && (
                  <motion.div
                    layoutId="mobileNavTopAccent"
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-[2.5px] bg-[#EA580C] rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                  />
                )}

                {/* Active Soft Orange Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="mobileNavActivePill"
                    className="absolute inset-x-1 inset-y-0.5 bg-orange-50 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}

                {/* Icon with smooth spring animation */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.08 : 1,
                    y: isActive ? -1 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex items-center justify-center relative"
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive ? 'text-[#EA580C]' : 'text-neutral-400 group-hover:text-neutral-600'
                    }`}
                    strokeWidth={isActive ? 2.3 : 1.9}
                  />

                  {/* Profile Authentication Indicator Dot if authenticated */}
                  {item.id === 'profile' && currentUser && (
                    <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-[#EA580C] border-2 border-white ring-1 ring-orange-200" />
                  )}
                </motion.div>

                {/* Small Label below icon */}
                <span
                  className={`text-[10px] tracking-tight mt-1 leading-none font-medium transition-colors duration-200 truncate max-w-full px-0.5 ${
                    isActive
                      ? 'text-[#EA580C] font-semibold'
                      : 'text-neutral-500 group-hover:text-neutral-700'
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
