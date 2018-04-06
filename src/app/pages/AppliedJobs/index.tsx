// React
import * as React from 'react';
import { connect } from 'react-redux';

// Types
import { AppliedJobsState } from '~/@types/applied-jobs';

// Containers
import { AppliedJobsMapStateToProps } from '~/app/containers/AppliedJobs';

// Components
import AppliedJobsPosted from '~/app/pages/AppliedJobs/applied-posted';

class AppliedJobsComponent extends React.Component<AppliedJobsState> {
    render() {
        return <AppliedJobsPosted {...this.props.applied_jobs} />;
    }
}

export default connect<AppliedJobsState>(AppliedJobsMapStateToProps)(AppliedJobsComponent);
