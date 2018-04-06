// React
import * as React from 'react';

// Types
import { JobPosts, JobPostSlim } from '~/@types/posts';

// Styles
import '~/resources/assets/scss/pages/home/HomeRecentlyPosted.scss';

// Components
import PostItems from '~/app/partials/posts/post-items';

export const withDisplayPosts = (PostComponent: React.ComponentType, className: string) => {
    return class extends React.Component<JobPosts<JobPostSlim>> {
        render() {
            return (
                <div className={className}>
                    <PostComponent />
                    <PostItems
                        {...this.props}
                    />
                </div>
            );
        }
    };
};