"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      <Link href="/" className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
        <HomeIcon />
      </Link>
      <Link href="/chat" className={`nav-item ${pathname === '/chat' ? 'active' : ''}`}>
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
        .nav-item.active img {
          filter: brightness(0) saturate(100%);
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
  <Image src="/images/house.svg" alt="Home" width={26} height={26} priority />
);
const ChatIcon = () => (
  <Image src="/images/mail.svg" alt="Chat" width={26} height={26} priority />
);
