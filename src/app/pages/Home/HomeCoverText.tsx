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
        text: 'Trucking companies are hiring'
    };

    let subTitle: Title = {
        text: 'CDL Job Now is your connection to CDL jobs'
    };

    let body: Title = {
        text: 'If you are looking for a new trucking job, ' +
        'CDL Job Now is dedicated to helping experienced ' +
        'truck drivers find trucking companies that are hiring. ' +
        'There are many companies with immediate openings for truckers. ' +
        'However, it can be difficult to determine which trucking company is the right fit. ' +
        'That is why we have developed an easy to use, innovative approach for searching CDL driver jobs.'
    };

    return (
        <div className="cover_text--container">
            <CoverText
                title={setTitle}
                subtitle={subTitle}
                body={body}
            />
        </div>
    );
};

export default HomeCoverText;