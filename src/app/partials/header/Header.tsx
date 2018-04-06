// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '~/resources/assets/scss/partials/_header.scss';

// Components
import NavMenu from '~/app/partials/header/NavMenu';

export default function Header() {
    return (
        <div className="container">
            <div className="flex-container header">
                <Link to="/" className="logo" />
                <NavMenu />
            </div>
        </div>
    );
}