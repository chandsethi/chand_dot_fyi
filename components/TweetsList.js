import TweetCard from "./TweetCard";

export default function TweetsList({ tweets, config }) {
    if (!tweets || tweets.length === 0) {
        return (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--secondary-text)' }}>
                No tweets yet.
            </div>
        );
    }

    return (
        <div className="tweets-list">
            {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} config={config} />
            ))}
        </div>
    );
}
