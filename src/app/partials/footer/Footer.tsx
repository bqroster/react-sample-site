// React
import * as React from 'react';

// Styles
import '~/resources/assets/scss/partials/_footer.scss';

// Components
import TopFooter from '~/app/partials/footer/TopFooter';
import BottomFooter from '~/app/partials/footer/BottomFooter';

const Footer = () => {
    return (
        <div className="footer">
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Footer;