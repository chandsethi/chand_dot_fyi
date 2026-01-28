"use client";
import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link href="/" className="nav-item">
        <HomeIcon />
      </Link>
      <Link href="/chat" className="nav-item">
        <ChatIcon />
      </Link>

      <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 53px;
          background-color: var(--background);
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 1000;
          display: none;
        }
        .nav-item {
          padding: 12px;
          color: var(--foreground);
        }
        @media (max-width: 700px) {
          .bottom-nav {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="26.25" height="26.25" fill="currentColor"><g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g></svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="26.25" height="26.25" fill="currentColor"><g><path d="M1.75 3C1.06 3 .5 3.56.5 4.25v15.5c0 .69.56 1.25 1.25 1.25h20.5c.69 0 1.25-.56 1.25-1.25V4.25c0-.69-.56-1.25-1.25-1.25H1.75zm19.5 2L12 11.5 3.25 5h18zM3 7.06l8.47 6.23c.15.1.33.16.53.16s.38-.06.53-.16L21 7.06v11.44H3V7.06z"></path></g></svg>
);
