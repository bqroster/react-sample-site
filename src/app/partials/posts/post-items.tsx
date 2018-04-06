// React
import * as React from 'react';

// Types
import { JobPosts, JobPostSlim } from '~/@types/posts';

// PostSlim Container
import { cnntPostSlim as PostSlim } from '~/app/containers/post-slim';

const PostItems = (props: JobPosts<JobPostSlim>) => {

    // convert the object to original array
    let propValues = props.items;

    // loop map for the List of posts
    let PostItemsRender = propValues.map(( PostItem: JobPostSlim ) => (
                <PostSlim
                    key={PostItem.id}
                    {...PostItem}
                />
            )
        );

    return (
        <>
            {PostItemsRender}
        </>
    );
};

export default PostItems;