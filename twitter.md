
I want to make my personal website to look exactly like a twitter profile page. 
It will have several types of contents to get published (such as tweets, highlights, 'now', bookmarks etc). The workflow I want is:
1. I have MD files for each content types open in my IDE
2. I add content to the MD files and push the update to github
3. The site (say, vercel) notices the update on github and automatically updates the website with the new content. So for me, its just typing in my IDE and push to git. (MD is just an example for wherever apt, it can also be some kind of config file thats human readable/editable for non technicals). You help me decice the right file format based for each use case.  

In terms of features, I want to copy the UI to be pixel perfect (i'll mention the deviations) but I want to customise them to my personal website's use cases.

Sidebar (left):
1. Home button: Takes to the homepage of personal website (default landing page)
2. Chat/Message: Opens a simple view of contact me options (links to twitter, email id)
3. Bookmarks: List of articles/blogs I have curated. I want to paste the link and an optional comment. The end result should have a clickable preview (like a tweet with a link) with my comment as a quote above (if any). If clickable preview is tough to implement, the very minimum will be auto fetching the title of the link and adding hyperlink of that page to the page title. 

Main View (center): replicates twitter profile where I will publish my content. 
Contains: Header image, profile pic, blue tick, username, name, bio, location, follow CTA. Later we will add: [follower count, followed count] from actual twitter account. Not in scope for now.

In the main view, there will be these tabs:
1. Tweets. These are tweet like texts I will write an publish. Contains my configured (same as main page) name, username, profile pic, date/time. followed by the tweet content. LATER in scope we will add a real like button that tracks likes (idk how we will do it without a backend but we will see; not in scope for now) 
2. Articles: These are long form articles I want to publish. Contains my configured (same as main page) name, username, profile pic, date/time, followed by an article i will write in markdown and published and rendered as a markdown preview (may need some library for this)


On right side (when on desktop, where actual twitter has 'you might like' or 'trending'), I want a "What's happening now' section. This is a section where I want to write monthly updates on what I am upto that month. It shows the updates for the latest month only by default. User can tap <- and -> arrows somewhere to go to next/prev month updates if available.  

UI:
1. Light mode for now. Make the base such that we can easily extend to dark mode later 
2. Responsive design similar to twitter: 
    2.1. When width is available (say, desktop), design has 3 section: left sidebar (icon + title), main content, and right sidebar (what's happening now)
    2.2. When width reduces (say, tablet size), first reduce the left sidebar to just icons.
    2.3. If width is low (say, mobile), drop the 'whats happening now' section and replace the sidebar with bottom navigation like the twitter mobile app/site

Have pasted the desktop, tablet and mobile screenshots of twitter. These are to help you with layout and UI components. There could be several things that are not valid for us, like search button, tweet CTA, AI bot, or the profile shortcut at bottom left in desktop etc. ignore them. 


Future: 
- **Followers/Following Count**: Fetch and display real counts from Twitter API.
- **Real Like Button**: Tracking likes (likely requires a backend or simplified service).
- **Dark Mode**: Toggle for Twitter's dim/lights-out themes.
- **Bookmark Sections**: Grouping bookmarks by category (e.g., "tech reads", "design reads").
- **Media & Likes Tabs**: Re-enabling these with appropriate content.
- **Search Functionality**: Sidebar search bar.
- **Tweet CTA/Post Button**: Sidebar action button.
- **Profile Shortcut**: Bottom-left profile switcher in desktop sidebar.
- **AI Bot Integration**: Grok-like interface. 
- **Tweet Actions**: Reply, Retweet, Like, Share icons on individual tweets.