// Job Types
import { AppliedJobs } from '~/@types/applied-jobs';
import { JobPosts, JobPostSlim } from '~/@types/posts';

// Saved Jobs Types
export type SavedJobs = JobPostSlim;

export type SaveJobsType = JobPosts<SavedJobs>;

// State Type for the container
export type SavedJobsState = {
    saved_jobs: JobPosts<SavedJobs>
    getInSavedJobs: boolean,
    getInAppliedJobs: boolean
};

// Action Type for the container
export interface SavedJobsActions {
    toggleSaveJob: (payload: SavedJobs) => {};
    toggleAppliedJob: (payload: AppliedJobs) => {};
}

// Class Type
export type PostSlimPropsType = SavedJobs & SavedJobsState & SavedJobsActions;
export type PostSlimStateType = {
    postItemJob: SavedJobs
};