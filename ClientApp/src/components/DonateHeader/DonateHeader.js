import React, { Component } from 'react';
import { Container } from '../Base/Container';
import { CTALink } from '../CTALink/CTALink';
import './DonateHeader.css';

export class DonateHeader extends Component {
    render() {
        return (
            <div className="donate-header">
                <Container>
                    <div className="donate-header__text"><img src="/images/icon-star.png" alt=""/> Support Our Mission <img src="/images/icon-star.png" alt=""/></div>
                    <div className="donate-header__donate">
                        <CTALink
                            link='#members'
                            title='Donate'
                            type='secondary'
                        />
                    </div>

                    <div className="donate-header__text"><img src="/images/icon-star.png" alt=""/> Begins Nov. 2nd at 8:00 AM <img src="/images/icon-star.png" alt=""/></div>
                </Container>
            </div>
        );
    }
}
