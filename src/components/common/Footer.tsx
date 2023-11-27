import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
    display: grid;
    place-items: center;
    margin-top: auto;
    padding: 50px 0px;
    font-size: 5px;
    text-align: center;
    line-height: 1.5;
`;

const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            Thank You for visiting my tech blog, Have a Good one!
            <br /> © 2023 Developer Chaeyeon, Powered By Gatsby.
        </FooterWrapper>
    )
}

export default Footer;