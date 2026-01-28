"use client";
import Link from 'next/link';

export default function ChatView({ config }) {
    return (
        <div className="chat-container">
            <div className="header">
                <Link href="/" className="back-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                </Link>
                <div className="header-text">
                    <h2>Contact</h2>
                </div>
            </div>

            <div className="contact-list">
                <a href={`https://x.com/${config.username}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="icon x-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                    </div>
                    <div className="details">
                        <h3>X (Twitter)</h3>
                        <p>@{config.username}</p>
                    </div>
                </a>

                <a href="mailto:chaand.sethi@gmail.com" className="contact-item">
                    <div className="icon email-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><g><path d="M1.75 3C1.06 3 .5 3.56.5 4.25v15.5c0 .69.56 1.25 1.25 1.25h20.5c.69 0 1.25-.56 1.25-1.25V4.25c0-.69-.56-1.25-1.25-1.25H1.75zm19.5 2L12 11.5 3.25 5h18zM3 7.06l8.47 6.23c.15.1.33.16.53.16s.38-.06.53-.16L21 7.06v11.44H3V7.06z"></path></g></svg>
                    </div>
                    <div className="details">
                        <h3>Email</h3>
                        <p>chaand.sethi@gmail.com</p>
                    </div>
                </a>

                {config.calLink && (
                    <a href={`https://${config.calLink}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <div className="icon cal-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><g><path d="M7 4V2h2v2h6V2h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h2zm0 2H5v14h14V6h-2v2h-2V6H9v2H7V6z"></path></g></svg>
                        </div>
                        <div className="details">
                            <h3>Calendar</h3>
                            <p>Schedule a chat</p>
                        </div>
                    </a>
                )}
            </div>

            <style jsx>{`
        .chat-container {
          min-height: 100vh;
          background-color: var(--background);
        }
        .header {
          height: 53px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          position: sticky;
          top: 0;
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          z-index: 2;
          gap: 20px;
        }
        .back-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }
        .back-btn:hover {
          background-color: var(--hover);
        }
        .header-text h2 {
          font-size: 20px;
          font-weight: 700;
        }
        .contact-list {
          padding: 12px 0;
        }
        .contact-item {
          display: flex;
          align-items: center;
          padding: 16px;
          gap: 16px;
          transition: background-color 0.2s;
          color: var(--foreground);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
        }
        .contact-item:hover {
          background-color: var(--hover);
        }
        .icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f7f9f9;
        }
        .details h3 {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
        .details p {
          font-size: 15px;
          color: var(--secondary-text);
          margin: 2px 0 0;
        }
      `}</style>
        </div>
    );
}
