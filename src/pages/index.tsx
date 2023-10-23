import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
import Introduction from 'components/main/Introduction';
import Footer from 'components/common/Footer';
import CategoryList from 'components/main/CategroyList';
import PostList from 'components/main/PostList';
import { graphql } from 'gatsby';
import { PostType } from 'components/main/PostList';

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[]
    }
  }
}


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

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  }
}) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />

      <CategoryList  selectedCategory='Web' categoryList={CATEGORY_LIST}/>
      <PostList posts={edges}/>
      <Footer />
    </Container>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
              childImageSharp {
                gatsbyImageData(width:768, height:400)
              }
            }
          }
        }
      }
    }
  }
`
