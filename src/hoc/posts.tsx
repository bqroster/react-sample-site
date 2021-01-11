// // React
// import * as React from 'react';
// import { Component, ReactChildren } from 'react';
//
// // Types
// import { JobPosts, JobPostSlim } from '~/@types/posts';
// type PostsType = JobPosts<JobPostSlim> & { children: React.ReactElement<ReactChildren> };
//
// // Styles
// import '~/resources/assets/scss/pages/home/HomeRecentlyPosted.scss';
//
// // Components
// import { withDisplayPosts } from '~/hoc/show-posts';
//
// class Posts extends Component<PostsType> {
//     render() {
//         return React.createElement('div', this.props, this.props.children);
//     }
// }
//
// export default withDisplayPosts( Posts, 'recently-post-container');