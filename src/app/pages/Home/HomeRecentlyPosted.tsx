// React
import * as React from 'react';

// Types
import { JobPosts, JobPostSlim } from '~/@types/posts';

// Styles
import '~/resources/assets/scss/pages/home/HomeRecentlyPosted.scss';

// Containers
import { withDisplayPosts } from '~/hoc/show-posts';

class HomeRecentlyPosted extends React.Component<JobPosts<JobPostSlim>> {
    render() {
        return <h3 className="title">Recently Posted</h3>;
    }
}

export default withDisplayPosts(HomeRecentlyPosted, 'recently-post-container');