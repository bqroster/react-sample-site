// Redux-Observable
import { combineEpics } from 'redux-observable';

// Epics
import { saveJobsEpics } from '~/store/saved-jobs/epics';

export default combineEpics(
    saveJobsEpics
);