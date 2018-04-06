// React
import * as React from 'react';

// Containers
import { withDisplayPosts } from '~/hoc/show-posts';

class AppliedJobsPosted extends React.Component {
    render() {
        return <h3 className="title">Applied Jobs</h3>;
    }
}

export default withDisplayPosts(AppliedJobsPosted, 'recently-post-container');