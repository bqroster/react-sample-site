// React
import * as React from 'react';

// Types
import { Title } from '~/@types/cover-text';

// Styles
import '~/resources/assets/scss/pages/home/HomeCoverText.scss';

// Components
import CoverText from '~/hoc/cover-text';

const HomeCoverText = function() {

    let setTitle: Title = {
        text: 'IT companies are hiring'
    };

    let subTitle: Title = {
        text: 'IT Leibitz is your connection to IT jobs'
    };

    let body: Title = {
        text: 'If you are looking for a new IT job, ' +
        'IT Leibitz is dedicated to helping experienced ' +
        'full stack developers find IT companies that are hiring. ' +
        'There are many companies with immediate openings for Developers. ' +
        'However, it can be difficult to determine which IT company is the right fit. ' +
        'That is why we have developed an easy to use, innovative approach for searching IT Dev jobs.'
    };

    return (
        <CoverText
            title={setTitle}
            subtitle={subTitle}
            body={body}
        />
    );
};

export default HomeCoverText;