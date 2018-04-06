// make an object of all the stores
import { combineReducers } from 'redux';

// Types
import { LoginType } from '~/@types/login';
import { SaveJobsType } from '~/@types/saved-jobs';
import { AppliedJobsType } from '~/@types/applied-jobs';

// Store Modules
import { LoginReducers } from '~/store/login/reducer';
import { SavedJobsReducer } from '~/store/saved-jobs/reducer';
import { AppliedJobsReducer } from '~/store/applied-jobs/reducer';

export interface StoreType {
    savedJobs: SaveJobsType;
    login: LoginType;
    appliedJobs: AppliedJobsType;
}

const storeReducers = {
    savedJobs: SavedJobsReducer,
    login: LoginReducers,
    appliedJobs: AppliedJobsReducer
};

export default combineReducers( storeReducers );