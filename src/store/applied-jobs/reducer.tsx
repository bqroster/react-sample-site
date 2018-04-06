// Lodash
import * as _ from 'lodash';

// Utilities
import { toggleValueFromArray } from '~/shared/utilities/general';

// Types
import { ReducerActions } from '~/@types/reducers';
import { AppliedJobs, AppliedJobsType } from '~/@types/applied-jobs';

// Initial State for the Store
const initialState: AppliedJobsType = {
    items: []
};

// Add a Job to the 'savedJob' store
const toggleApplyJob = (state: AppliedJobsType, payload: AppliedJobs) => {

    // CloneDeep the object to keep immutability
    const _clone = _.cloneDeep( state );

    return {
        ..._clone,
        items: toggleValueFromArray(_clone.items, payload)
    };
};

export const AppliedJobsReducer = (state = initialState, actions: ReducerActions<AppliedJobs>) => {

    switch (actions.type) {
        case 'APPLIED_JOB': return toggleApplyJob( state, actions.payload);

        default:
            return state;
    }
};