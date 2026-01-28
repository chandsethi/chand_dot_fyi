"use client";
import Image from 'next/image';

export default function TweetCard({ tweet, config }) {
  // Simple relative date formatter
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s`;

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d`;

    // Older dates: Jan 28, 2026 or Jan 28
    const options = { month: 'short', day: 'numeric' };
    if (date.getFullYear() !== now.getFullYear()) {
      options.year = 'numeric';
    }
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="tweet-card">
      {tweet.pinned && (
        <div className="pinned-badge">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><g><path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v6.44l3 3.37v1.19h-7V22h-2v-6.5H4v-1.19l3-3.37V4.5zM9.5 4c-.28 0-.5.22-.5.5v7l-2 2.25v.25h10v-.25l-2-2.25v-7c0-.28-.22-.5-.5-.5h-5z"></path></g></svg>
          <span>Pinned</span>
        </div>
      )}

      <div className="tweet-content-wrapper">
        <div className="avatar-side">
          <div className="avatar">
            <Image
              src={config.profilePic}
              alt={config.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="content-side">
          <div className="tweet-header">
            <span className="name">{config.name}</span>
            {config.verified && (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--accent)" style={{ margin: '0 2px' }}>
                <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-4.23 1.35 1.52-6.08 5.41z"></path></g>
              </svg>
            )}
            <span className="username">@{config.username}</span>
            <span className="dot">·</span>
            <span className="date">{formatDate(tweet.date)}</span>
          </div>

          <div className="tweet-text">
            {tweet.content}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tweet-card {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .tweet-card:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }
        .pinned-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 32px;
          margin-bottom: 4px;
          color: var(--secondary-text);
          font-size: 13px;
          font-weight: 700;
        }
        .tweet-content-wrapper {
          display: flex;
          gap: 12px;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
        }
        .tweet-header {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 2px;
        }
        .name {
          font-weight: 700;
          font-size: 15px;
        }
        .username, .date, .dot {
          color: var(--secondary-text);
          font-size: 15px;
        }
        .tweet-text {
          font-size: 15px;
          line-height: 20px;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
