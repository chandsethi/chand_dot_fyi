import FeedContainer from "@/components/FeedContainer";
import { getConfig, getTweets, getArticles } from "@/lib/config";

export default function Home() {
  const config = getConfig();
  const tweets = getTweets();
  const articles = getArticles();

  return (
    <FeedContainer
      config={config}
      tweets={tweets}
      articles={articles}
    />
  );
}
