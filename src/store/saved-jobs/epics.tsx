// Types
import { ReducerActions } from '~/@types/reducers';
import { SavedJobs } from '~/@types/saved-jobs';

// Redux-RxJs
import { ActionsObservable } from 'redux-observable';

// RxJs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';

export const saveJobsEpics = (action$: ActionsObservable<ReducerActions<SavedJobs>>) =>
    action$.ofType('REQUEST_SAVE_JOB')
        .map( (loginCall: ReducerActions<SavedJobs>) => loginCall.payload )
        .delay(1000) // change for a HTTP Request
        .mergeMap( (payload: SavedJobs) => {
            return [
                {
                    type: 'SAVE_JOB',
                    payload: payload
                }
            ];
        });