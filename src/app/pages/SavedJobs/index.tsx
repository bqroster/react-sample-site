// React
import * as React from 'react';
import { connect } from 'react-redux';

// Types
import { SavedJobsState } from '~/@types/saved-jobs';

// Containers
import { mapStateToProps } from '~/app/containers/post-slim';

// Components
import SavedJobsPosted from '~/app/pages/SavedJobs/saved-posted';

class SavedJobsComponent extends React.Component<SavedJobsState> {
    render() {
        return <SavedJobsPosted {...this.props.saved_jobs} />;
    }
}

export default connect<SavedJobsState>(mapStateToProps)(SavedJobsComponent);