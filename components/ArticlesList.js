"use client";
import Image from 'next/image';

export default function ArticlesList({ articles, config, onArticleClick }) {
    if (!articles || articles.length === 0) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--secondary-text)' }}>
                No articles yet.
            </div>
        );
    }

    return (
        <div className="articles-list">
            {articles.map((article) => (
                <article
                    key={article.slug}
                    className="article-card"
                    onClick={() => onArticleClick(article)}
                >
                    <div className="avatar-col">
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
                    </div>

                    <div className="content-col">
                        <div className="author-header">
                            <span className="author-name">{config.name}</span>
                            {config.verified && (
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--accent)">
                                    <g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-4.23 1.35 1.52-6.08 5.41z"></path></g>
                                </svg>
                            )}
                            <span className="author-username">@{config.username}</span>
                            <span className="dot">·</span>
                            <span className="date">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-description">{article.description}</p>
                    </div>
                </article>
            ))}

            <style jsx>{`
                .articles-list {
                    width: 100%;
                }
                .article-card {
                    padding: 12px 16px;
                    border-bottom: 1px solid var(--border);
                    cursor: pointer;
                    transition: background-color 0.2s;
                    display: flex;
                    gap: 12px;
                }
                .article-card:hover {
                    background-color: var(--hover);
                }
                .avatar-col {
                    flex-shrink: 0;
                }
                .author-avatar {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: relative;
                    background-color: #cfd9de;
                }
                .content-col {
                    flex-grow: 1;
                    min-width: 0;
                }
                .author-header {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    flex-wrap: wrap;
                    margin-bottom: 2px;
                }
                .author-name {
                    font-weight: 700;
                    font-size: 15px;
                }
                .author-username, .date, .dot {
                    color: var(--secondary-text);
                    font-size: 15px;
                }
                .article-title {
                    font-size: 15px;
                    font-weight: 700;
                    margin-bottom: 2px;
                    margin-top: 0;
                    color: var(--foreground);
                    line-height: 20px;
                }
                .article-description {
                    font-size: 15px;
                    color: var(--secondary-text);
                    line-height: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}
