// React
import * as React from 'react';
import { Link } from 'react-router-dom';

const TopFooter = () => {
    return (
        <div className="top-footer">
            <div className="flex-container container">
                <div className="left-side">
                    <div className="logo" />
                    <p>
                        Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.
                        Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at.
                    </p>
                    <h4>Call Us 888-ANY-ENDING-HERE</h4>
                </div>

                <div className="flex-container right-side">
                    <div className="list-column">
                        <h5>For Drivers</h5>
                        <p>Best IT Jobs</p>
                        <p>IT Companies</p>
                        <p>Resume Builder</p>
                        <p>Find IT Jobs</p>
                    </div>

                    <div className="list-column">
                        <h5>For IT</h5>
                        <p>Post Jobs</p>
                        <p>Add Your Company</p>
                    </div>

                    <div className="list-column">
                        <h5>Connect</h5>
                        <p>Industry & Stories</p>
                        <p>Full Stack Dev</p>
                        <div className="social-icons-container">
                            <Link
                                className="icon-facebook cnb-facebook"
                                to="http://www.facebook.com/any-facebook-here/"
                                target="_blank"
                            />
                            <Link
                                className="icon-twitter cnb-twitter"
                                to="http://www.twitter.com/any-twitter-here/"
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFooter;