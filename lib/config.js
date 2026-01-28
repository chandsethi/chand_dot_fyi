import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';

export function getConfig() {
    const configPath = path.join(process.cwd(), 'content/config.yaml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    return yaml.load(fileContents);
}

export function getTweets() {
    const tweetsPath = path.join(process.cwd(), 'content/tweets.yaml');
    if (!fs.existsSync(tweetsPath)) return [];

    const fileContents = fs.readFileSync(tweetsPath, 'utf8');
    const data = yaml.load(fileContents);
    const tweets = data.tweets || [];

    return tweets.sort((a, b) => {
        // Pinned tweets first
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        // Then by date descending
        return new Date(b.date) - new Date(a.date);
    });
}

export function getArticles() {
    const articlesDirectory = path.join(process.cwd(), 'content/articles');
    if (!fs.existsSync(articlesDirectory)) return [];

    const filenames = fs.readdirSync(articlesDirectory);
    const articles = filenames.map((filename) => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            ...data,
            content,
            slug: filename.replace(/\.md$/, ''),
        };
    });

    return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getNowData() {
    const nowPath = path.join(process.cwd(), 'content/now.yaml');
    if (!fs.existsSync(nowPath)) return [];

    const fileContents = fs.readFileSync(nowPath, 'utf8');
    return yaml.load(fileContents) || [];
}
