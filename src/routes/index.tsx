// React
import * as React from 'react';
import { Switch as Router, Route } from 'react-router-dom';

// Components
import HomeComponent from '~/app/pages/Home/Home';
import SignUpComponent from '~/app/pages/SignUp';

import SavedJobsComponent from '~/app/pages/SavedJobs';
import AppliedJobsComponent from '~/app/pages/AppliedJobs';
// import { cnntSavedJobs as SavedJobsComponent } from '~/app/containers/post-slim';

export const Routes = () => (
        <Router>
            <Route exact    path="/"            component={HomeComponent}               />
            <Route          path="/signup"      component={SignUpComponent}             />
            <Route          path="/login"       render={() => <div>LOGIN PATH</div>}    />
            <Route          path="/profile"     render={() => <div>USER PROFILE</div>}  />
            <Route          path="/saved-jobs"  component={SavedJobsComponent}         />
            <Route          path="/applied-jobs"  component={AppliedJobsComponent}         />
        </Router>
);