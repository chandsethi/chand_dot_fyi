"use client";
import Image from 'next/image';

export default function ProfileHeaderPlaceholder() {
    return (
        <div className="profile-header">
            <div className="banner-container">
                <div className="banner-placeholder"></div>
            </div>

            <div className="profile-info-section">
                <div className="avatar-container">
                    <div className="avatar-placeholder"></div>
                </div>

                <div className="edit-profile-container">
                    <button className="edit-btn">Follow</button>
                </div>

                <div className="bio-container">
                    <h1 className="name">chand <span className="verified-badge">✓</span></h1>
                    <p className="username">@Publisethi</p>
                    <p className="bio">everybody will be dancing if we are doing it right :: bits goa :: jiohotstar</p>

                    <div className="metadata">
                        <span className="location">Bangalore, India</span>
                        <span className="join-date">Joined December 2009</span>
                    </div>
                </div>

                <nav className="tabs">
                    <div className="tab active">Posts</div>
                    <div className="tab">Highlights</div>
                    <div className="tab">Articles</div>
                    <div className="tab disabled">Media</div>
                    <div className="tab disabled">Likes</div>
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
        }
        .banner-placeholder {
          width: 100%;
          height: 100%;
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
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
        }
        .edit-profile-container {
          position: absolute;
          top: 12px;
          right: 16px;
        }
        .edit-btn {
          border: 1px solid #cfd9de;
          border-radius: 9999px;
          padding: 0 16px;
          height: 36px;
          font-weight: 700;
          font-size: 15px;
          transition: background-color 0.2s;
        }
        .edit-btn:hover {
          background-color: rgba(15, 20, 25, 0.1);
        }
        .bio-container {
          margin-bottom: 16px;
        }
        .name {
          font-size: 20px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .verified-badge {
          color: var(--accent);
          font-size: 18px;
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
        }
        .metadata {
          display: flex;
          gap: 12px;
          color: var(--secondary-text);
          font-size: 14px;
        }
        .tabs {
          display: flex;
          border-bottom: 1px solid var(--border);
          margin: 0 -16px;
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
        .tab:hover:not(.disabled) {
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
        .tab.disabled {
          cursor: default;
          opacity: 0.5;
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
