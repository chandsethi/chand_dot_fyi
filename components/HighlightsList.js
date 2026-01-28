"use client";
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default function HighlightsList({ highlights }) {
  if (!highlights || highlights.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: 'var(--secondary-text)' }}>
        No highlights yet.
      </div>
    );
  }

  // Helper to extract ID from URL
  const getTweetId = (url) => {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.split('?')[0];
  };

  return (
    <div className="highlights-list">
      {highlights.map((highlight, index) => (
        <div key={index} className="highlight-item">
          <TwitterTweetEmbed
            tweetId={getTweetId(highlight.url)}
            options={{ theme: 'light', width: '600' }}
          />
        </div>
      ))}

      <style jsx>{`
        .highlights-list {
          padding: 0;
          width: 100%;
        }
        .highlight-item {
          margin-bottom: 0;
          width: 100%;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }
        /* Override Twitter widget constraints */
        :global(.twitter-tweet) {
          margin: 0 !important;
          max-width: 100% !important;
          min-width: 100% !important;
          width: 100% !important;
        }
        :global(.twitter-tweet-rendered) {
          max-width: 100% !important;
          width: 100% !important;
        }
        /* Target the iframe injected by Twitter */
        :global(.twitter-tweet iframe) {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          border-radius: 0 !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}
