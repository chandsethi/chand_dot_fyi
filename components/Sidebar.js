"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, icon, label, collapsed = false, isActive = false }) => (
  <Link href={href} className={`nav-item ${isActive ? 'active' : ''}`}>
    <span className="icon">{icon}</span>
    {!collapsed && <span className="label">{label}</span>}
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <nav className="nav-menu">
          <NavItem href="/" icon={<HomeIcon />} label="Home" isActive={pathname === '/'} />
          <NavItem href="/chat" icon={<ChatIcon />} label="Chat" isActive={pathname === '/chat'} />
        </nav>
      </div>

      <style jsx>{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          justify-content: flex-end;
          padding: 0 12px;
        }
        .sidebar-inner {
          width: 100%;
          max-width: 275px;
          display: flex;
          flex-direction: column;
          padding-top: 48px;
        }
        .logo-container {
          padding: 12px;
        }
        .twitter-logo {
          width: 30px;
          height: 30px;
          fill: var(--foreground);
        }
        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        :global(.nav-item) {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 9999px;
          color: var(--foreground);
          transition: background-color 0.2s;
          width: fit-content;
        }
        :global(.nav-item:hover) {
          background-color: var(--hover);
        }
        :global(.nav-item.active .icon svg) {
          filter: brightness(0) saturate(100%);
        }
        :global(.nav-item .icon) {
          width: 26.25px;
          height: 26.25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :global(.nav-item .icon svg) {
          width: 26.25px;
          height: 26.25px;
        }
        :global(.nav-item .label) {
          margin-left: 20px;
          margin-right: 16px;
          font-size: 20px;
          font-weight: 400;
        }

        @media (max-width: 1000px) {
          .sidebar {
            width: var(--sidebar-collapsed-width);
          }
          :global(.nav-item .label) {
            display: none;
          }
           :global(.nav-item) {
            padding: 12px;
          }
          .sidebar-inner {
            align-items: center;
          }
          .logo-container {
            align-self: center;
          }
        }

        @media (max-width: 700px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}

const HomeIcon = () => (
  <Image src="/images/house.svg" alt="Home" width={26} height={26} priority />
);
const ChatIcon = () => (
  <Image src="/images/mail.svg" alt="Chat" width={26} height={26} priority />
);
