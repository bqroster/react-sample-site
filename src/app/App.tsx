// React
import * as React from 'react';
import { BrowserRouter as RouterWrapper } from 'react-router-dom';

// Routes
import { Routes } from '~/routes';

// Types
import { LoginPropsType } from '~/@types/login';

// Styles
import '~/resources/assets/scss/App.scss';

// Components
import TopHeader from '~/app/partials/header/TopHeader';
import Header from '~/app/partials/header/Header';
import Splash from '~/app/partials/splash';
import Footer from '~/app/partials/footer/Footer';

// Stateful Component
class App extends React.Component<LoginPropsType> {

    render() {

        return (
            <RouterWrapper>
                <div className="main-container">
                    <TopHeader {...this.props} />
                    <Header />
                    <Splash />
                        <Routes />
                    <Footer />
                </div>
            </RouterWrapper>
        );
    }
}

export default App;