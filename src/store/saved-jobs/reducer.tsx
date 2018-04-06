// Lodash module
import * as _ from 'lodash';

// Utilities
import { toggleValueFromArray } from '~/shared/utilities/general';

// Types
import { SaveJobsType, SavedJobs } from '~/@types/saved-jobs';
import { ReducerActions } from '~/@types/reducers';

// Initial State for the Store
const initialState: SaveJobsType = {
    items: []
};

// Add a Job to the 'savedJob' store
const toggleSaveJob = (state: SaveJobsType, payload: SavedJobs) => {

    // CloneDeep the object to keep immutability
    const _clone = _.cloneDeep( state );

    return {
        ..._clone,
        items: toggleValueFromArray(_clone.items, payload)
    };
};

export const SavedJobsReducer = (state = initialState, actions: ReducerActions<SavedJobs>) => {

    switch (actions.type) {
        case 'SAVE_JOB': return toggleSaveJob( state, actions.payload);

        default: return state;
    }
};