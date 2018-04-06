// React
import * as React from 'react';

// Styles
import '~/resources/assets/scss/partials/_form-find-jobs.scss';

const FormFindJobs = () => {

    return (
        <div className="splash-form">
            <form action="" className="flex-container">
                <div className="form-control-input">
                    <div className="icon-location location" />
                    <input id="zipcode" name="zipcode" type="text" placeholder="Enter your zip" />
                </div>
                <div className="form-control">
                    <button>Find Jobs</button>
                </div>
            </form>
        </div>
    );
};

export default FormFindJobs;