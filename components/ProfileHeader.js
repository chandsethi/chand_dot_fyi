"use client";
import Image from 'next/image';

export default function ProfileHeader({ config, activeTab, onTabChange }) {
  const tabs = ['Tweets', 'Articles'];

  return (
    <div className="profile-header">
      <div className="banner-container">
        {config.headerImage && (
          <Image
            src={config.headerImage}
            alt="Profile Banner"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
      </div>

      <div className="profile-info-section">
        <div className="avatar-container">
          {config.profilePic && (
            <Image
              src={config.profilePic}
              alt={config.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
        </div>

        <div className="action-container">
          <a
            href={`https://x.com/${config.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn"
          >
            Follow
          </a>
        </div>

        <div className="bio-container">
          <h1 className="name">
            {config.name}
            {config.verified && (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--accent)" style={{ marginLeft: '4px' }}>
                <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-4.23 1.35 1.52-6.08 5.41z"></path></g>
              </svg>
            )}
          </h1>
          <p className="username">@{config.username}</p>
          <p className="bio">{config.bio}</p>

          <div className="metadata">
            <div className="metadata-item">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.661 11.232 7.989 11.453l.511.347.511-.347c.328-.221 7.989-5.486 7.989-11.453 0-4.687-3.813-8.5-8.5-8.5zm0 17.726C10.43 18.339 5.5 14.509 5.5 10.5 5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.009-4.93 7.839-6.5 9.226z"></path></g></svg>
              <span>{config.location}</span>
            </div>
            <div className="metadata-item">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><g><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V10h14v10H5zm14-12H5V6h14v2z"></path></g></svg>
              <span>Joined {config.joinedDate}</span>
            </div>
            {config.calLink && (
              <div className="metadata-item link">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><g><path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path></g></svg>
                <a href={`https://${config.calLink}`} target="_blank" rel="noopener noreferrer">{config.calLink}</a>
              </div>
            )}
          </div>
        </div>

        <nav className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </nav>
      </div>

      <style jsx>{`
        .profile-header {
          width: 100%;
        }
        .banner-container {
          width: 100%;
          aspect-ratio: 3 / 1;
          background-color: #cfd9de;
          position: relative;
        }
        .profile-info-section {
          padding: 12px 16px 0;
          position: relative;
        }
        .avatar-container {
          width: 25%;
          min-width: 48px;
          margin-top: -15%;
          margin-bottom: 12px;
          border: 4px solid var(--background);
          border-radius: 50%;
          overflow: hidden;
          background-color: #cfd9de;
          aspect-ratio: 1 / 1;
          position: relative;
        }
        .action-container {
          position: absolute;
          top: 12px;
          right: 16px;
        }
        .follow-btn {
          background-color: #0f1419;
          color: white;
          border-radius: 9999px;
          padding: 0 16px;
          height: 36px;
          font-weight: 700;
          font-size: 15px;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .follow-btn:hover {
          background-color: #272c30;
        }
        .bio-container {
          margin-bottom: 16px;
        }
        .name {
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
        }
        .username {
          color: var(--secondary-text);
          font-size: 15px;
          margin-bottom: 12px;
        }
        .bio {
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 12px;
          white-space: pre-wrap;
        }
        .metadata {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: var(--secondary-text);
          font-size: 15px;
        }
        .metadata-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .metadata-item.link a {
          color: var(--accent);
        }
        .metadata-item.link a:hover {
          text-decoration: underline;
        }
        .tabs {
          display: flex;
          border-bottom: 1px solid var(--border);
          margin: 0 -16px;
          margin-top: 16px;
        }
        .tab {
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 16px 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--secondary-text);
          cursor: pointer;
          transition: background-color 0.2s;
          position: relative;
        }
        .tab:hover {
          background-color: var(--hover);
        }
        .tab.active {
          color: var(--foreground);
          font-weight: 700;
        }
        .tab.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 56px;
          height: 4px;
          background-color: var(--accent);
          border-radius: 9999px;
        }

        @media (max-width: 700px) {
          .avatar-container {
            width: 80px;
            margin-top: -40px;
          }
        }
      `}</style>
    </div>
  );
}
