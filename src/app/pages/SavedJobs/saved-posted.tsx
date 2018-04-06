// React
import * as React from 'react';

// Types
// import { SavedJobsState } from '~/@types/saved-jobs';

// Containers
import { withDisplayPosts } from '~/hoc/show-posts';

class SavedJobsPosted extends React.Component {
    render() {
        return <h3 className="title">Saved Posted</h3>;
    }
}

export default withDisplayPosts(SavedJobsPosted, 'recently-post-container');