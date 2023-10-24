import { FunctionComponent, ReactNode } from "react"
import styled from "@emotion/styled";
import GlobalStyle from 'components/common/GlobalStyle';
import Footer from 'components/common/Footer';


type TemplateProps = {
    children: ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;


const Template: FunctionComponent<TemplateProps> = ({ children }) => {
    return (
        <Container>
            <GlobalStyle />
            {children}
            <Footer />
        </Container>
    )
}

export default Template