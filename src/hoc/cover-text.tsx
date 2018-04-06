// React
import * as React from 'react';

// Types
import { CoverText } from '~/@types/cover-text';

// Styles
// The component that calls this `CONTAINER` must define / declare its own style

const SplashCoverText = (props: CoverText) => {

    // Default TAG Values if not present on the props
    let titleTag        = props.title.tag    || 'h2';
    let subTitleTag     = props.subtitle.tag || 'h4';
    let bodyTag         = props.body.tag     || 'p';

    let title    = React.createElement  ( titleTag,     { className: 'title'     }, props.title.text    );
    let subTitle = React.createElement  ( subTitleTag,  { className: 'sub-title' }, props.subtitle.text );
    let body     = React.createElement  ( bodyTag,      { className: 'paragraph' }, props.body.text     );

    return (
        <div className="splash-cover-text">
            {title}
            {subTitle}
            {body}
        </div>
    );
};

export default SplashCoverText;