"use client";
import { useState } from 'react';
import ProfileHeader from "@/components/ProfileHeader";
import TweetsList from "@/components/TweetsList";
import ArticlesList from "@/components/ArticlesList";
import ArticleView from "@/components/ArticleView";

export default function FeedContainer({ config, tweets, articles }) {
    const [activeTab, setActiveTab] = useState('Tweets');
    const [selectedArticle, setSelectedArticle] = useState(null);

    // If an article is selected, show the ArticleView (Full Page)
    if (selectedArticle) {
        return (
            <ArticleView
                article={selectedArticle}
                config={config}
                onBack={() => setSelectedArticle(null)}
            />
        );
    }

    return (
        <div>
            <ProfileHeader
                config={config}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {activeTab === 'Tweets' && (
                <TweetsList tweets={tweets} config={config} />
            )}

            {activeTab === 'Articles' && (
                <ArticlesList
                    articles={articles}
                    config={config}
                    onArticleClick={setSelectedArticle}
                />
            )}
        </div>
    );
}
