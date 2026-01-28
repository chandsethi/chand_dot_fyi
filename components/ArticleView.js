"use client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

const formatFullDate = (dateString) => {
    const date = new Date(dateString);
    const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return `${time} · ${day}`;
};

export default function ArticleView({ article, config, onBack }) {
    if (!article) return null;

    return (
        <div className="article-view">
            <div className="article-header-sticky">
                <button className="back-button" onClick={onBack}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g>
                    </svg>
                </button>
                <h2 className="header-title">Article</h2>
            </div>

            <div className="article-container">
                <h1 className="article-title">{article.title}</h1>

                <div className="author-row">
                    <div className="author-avatar">
                        {config.profilePic && (
                            <Image
                                src={config.profilePic}
                                alt={config.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        )}
                    </div>
                    <div className="author-details">
                        <div className="author-header-info">
                            <span className="author-name">{config.name}</span>
                            {config.verified && (
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--accent)">
                                    <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-4.23 1.35 1.52-6.08 5.41z"></path></g>
                                </svg>
                            )}
                        </div>
                        <span className="author-username">@{config.username}</span>
                    </div>
                </div>

                <div className="article-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {article.content}
                    </ReactMarkdown>
                </div>

                <div className="article-footer">
                    <div className="article-timestamp">{formatFullDate(article.date)}</div>
                </div>
            </div>

            <style jsx>{`
                .article-view {
                    width: 100%;
                    background: var(--background);
                    min-height: 100vh;
                }
                .article-header-sticky {
                    position: sticky;
                    top: 0;
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    padding: 0 16px;
                    height: 53px;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(12px);
                    z-index: 10;
                    border-bottom: 1px solid var(--border);
                }
                .back-button {
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }
                .back-button:hover {
                    background: var(--hover);
                }
                .header-title {
                    font-size: 20px;
                    font-weight: 700;
                }
                .article-container {
                    padding: 24px 16px;
                }
                .article-title {
                    font-size: 32px;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 24px;
                }
                .author-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 24px;
                }
                .author-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: relative;
                    flex-shrink: 0;
                    background-color: #cfd9de;
                }
                .author-header-info {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                .author-name {
                    font-weight: 700;
                    font-size: 15px;
                }
                .author-username {
                    color: var(--secondary-text);
                    font-size: 15px;
                    display: block;
                    margin-top: -2px;
                }
                .article-body {
                    font-size: 18px;
                    line-height: 1.6;
                    color: var(--foreground);
                }
                .article-body :global(h2) {
                    font-size: 24px;
                    font-weight: 700;
                    margin: 32px 0 16px;
                }
                .article-body :global(p) {
                    margin-bottom: 16px;
                }
                .article-body :global(pre) {
                    background: #0f1419;
                    color: white;
                    padding: 16px;
                    border-radius: 12px;
                    overflow-x: auto;
                    margin: 24px 0;
                }
                .article-footer {
                    padding-top: 24px;
                    margin-top: 24px;
                    border-top: 1px solid var(--border);
                    color: var(--secondary-text);
                    font-size: 15px;
                }
            `}</style>
        </div>
    );
}
