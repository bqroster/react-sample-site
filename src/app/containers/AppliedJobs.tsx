// Types
import { StoreType } from '~/store/reducers';

export const AppliedJobsMapStateToProps = (state: StoreType) => {
    return {
        applied_jobs: {...state.appliedJobs},
    };
};