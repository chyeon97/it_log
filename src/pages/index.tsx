import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
import Introduction from 'components/main/Introduction';
import Footer from 'components/common/Footer';
import CategoryList from 'components/main/CategroyList';
import PostList from 'components/main/PostList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />

      <CategoryList  selectedCategory='Web' categoryList={CATEGORY_LIST}/>
      <PostList/>
      <Footer />
    </Container>
  )
}

export default IndexPage
