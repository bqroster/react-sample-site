// Applied Jobs
import { JobPosts, JobPostSlim } from '~/@types/posts';

export interface AppliedJobs extends JobPostSlim {

}

export type AppliedJobsType = JobPosts<AppliedJobs>;

// State Type for the container
export type AppliedJobsState = {
    applied_jobs: AppliedJobsType
};

// Action Type for the container
export interface AppliedJobsActions {
    toggleAppliedJob: (payload: AppliedJobs) => {};
}

// Class Type
export type PostSlimPropsType = AppliedJobs & AppliedJobsState & AppliedJobsActions;
export type PostSlimStateType = {
    postItemJob: AppliedJobs
};