// React-Redux
import { connect } from 'react-redux';

// Types
import { StoreType } from '~/store/reducers';
import { Dispatch } from 'react-redux';
import { AppliedJobs } from '~/@types/applied-jobs';
import { SavedJobs, SavedJobsState, SavedJobsActions, PostSlimPropsType } from '~/@types/saved-jobs';

// Class to Connect
import PostSlim from '~/hoc/post-slim';

export const mapStateToProps = (state: StoreType, ownProps: PostSlimPropsType) => {
    return {
        saved_jobs: {...state.savedJobs},
        getInSavedJobs: ((state.savedJobs.items.find( item => item.id === ownProps.id ) || false) && true),
        getInAppliedJobs: ((state.appliedJobs.items.find( item => item.id === ownProps.id ) || false) && true)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<StoreType>) => {
    return {
        toggleSaveJob: (payload: SavedJobs) => dispatch({type: 'SAVE_JOB', payload: payload}),
        toggleAppliedJob: (payload: AppliedJobs) => dispatch({type: 'APPLIED_JOB', payload: payload})
    };
};

export const cnntPostSlim = connect<SavedJobsState, SavedJobsActions>(mapStateToProps, mapDispatchToProps)(PostSlim);