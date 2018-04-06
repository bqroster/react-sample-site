// React
import * as React from 'react';

// Fake Data, todo data should come from Rx.Ajax
import { RecentlyJobPosts } from '~/fakeFactory/recentlyJobPosts';

// Components
import HomeCoverText from '~/app/pages/Home/HomeCoverText';
import HomeRecentlyPosted from '~/app/pages/Home/HomeRecentlyPosted';

const Home = function() {

    return (
        <>
            <HomeCoverText />
            <HomeRecentlyPosted {...RecentlyJobPosts} />
        </>
    );
};

export default Home;