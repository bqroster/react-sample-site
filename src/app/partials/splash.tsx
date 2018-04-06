// React
import * as React from 'react';

// Styles
import '~/resources/assets/scss/partials/_splash.scss';

// Components
import FormFindJobs from '~/app/partials/widget/FormFindJobs';

const Splash = () => {

    return (
        <div className="splash">
            <div className="splash-container">
                <h1>Find CDL jobs near you</h1>
                <FormFindJobs />
            </div>
        </div>
    );
};

export default Splash;