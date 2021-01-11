// React
import * as React from 'react';

// Types
import { PostSlimPropsType, PostSlimStateType } from '~/@types/saved-jobs';

// Styles
import '~/resources/assets/scss/hoc/post-slim.scss';

class PostSlim extends React.Component<PostSlimPropsType, PostSlimStateType> {

    constructor( props: PostSlimPropsType ) {
        super( props );

        this.state = {
            postItemJob: {
                id:           this.props.id,
                companyId:    this.props.companyId,
                companyName:  this.props.companyName,
                companyLogo:  this.props.companyLogo,
                position:     this.props.position
            }
        };
    }

    render() {

        let showDetails;
        let applyNow;

        // Save Jobs Style / Css
        let cssSavedJobsDflt = 'icon-anything-here ';
        let cssSavedJobs = cssSavedJobsDflt +
            (this.props.getInSavedJobs ?
                'icon-save-jobs-saved icon-star' :
                'icon-save-jobs-empty icon-star-empty');

        // Applied Jobs Style / Css
        let cssAppliedJobsDflt = 'apply-now ';
        let cssAppliedJobs = cssAppliedJobsDflt +
            (this.props.getInAppliedJobs ?
                'applied-job' :
                '');

        // Show Details & Apply Now buttons
        if (!((typeof this.props.showDetails !== 'undefined') && (!this.props.showDetails))) {
            showDetails = <button className="show-details">Show Details</button>;
        }

        if (!((typeof this.props.applyNow !== 'undefined') && (!this.props.applyNow))) {
            applyNow = (
                <button
                    className={cssAppliedJobs}
                    onClick={() => this.props.toggleAppliedJob( this.state.postItemJob )}
                >
                    Apply Now
                </button>
            );
        }

        return (
            <div className="post-slim-box flex-container">
                <div className="company-logo"><img src={this.props.companyLogo}/></div>
                <div className="company-info">
                    <h5 className="name">{this.props.companyName}</h5>
                    <p className="position">{this.props.position}</p>
                </div>

                {showDetails}
                {applyNow}
                <i onClick={() => this.props.toggleSaveJob( this.state.postItemJob )} className={cssSavedJobs}/>
            </div>
        );
    }
}

export default PostSlim;