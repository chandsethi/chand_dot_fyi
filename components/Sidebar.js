"use client";
import Link from 'next/link';

const NavItem = ({ href, icon, label, collapsed = false }) => (
  <Link href={href} className="nav-item">
    <span className="icon">{icon}</span>
    {!collapsed && <span className="label">{label}</span>}
  </Link>
);

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <nav className="nav-menu">
          <NavItem href="/" icon={<HomeIcon />} label="Home" />
          <NavItem href="/chat" icon={<ChatIcon />} label="Chat" />
          <NavItem href="/bookmarks" icon={<BookmarkIcon />} label="Bookmarks" />
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
        :global(.nav-item .icon) {
          width: 26.25px;
          height: 26.25px;
          display: flex;
          align-items: center;
          justify-content: center;
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

// Simple SVG Icons
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="26.25" height="26.25" fill="currentColor"><g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g></svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="26.25" height="26.25" fill="currentColor"><g><path d="M1.75 3C1.06 3 .5 3.56.5 4.25v15.5c0 .69.56 1.25 1.25 1.25h20.5c.69 0 1.25-.56 1.25-1.25V4.25c0-.69-.56-1.25-1.25-1.25H1.75zm19.5 2L12 11.5 3.25 5h18zM3 7.06l8.47 6.23c.15.1.33.16.53.16s.38-.06.53-.16L21 7.06v11.44H3V7.06z"></path></g></svg>
);
const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" width="26.25" height="26.25" fill="currentColor"><g><path d="M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.28 0-.5.22-.5.5v15.44l6-4.29 6 4.29V4.5c0-.28-.22-.5-.5-.5h-11z"></path></g></svg>
);
