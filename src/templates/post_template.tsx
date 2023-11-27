import PostContent from 'components/Posts/PostContent'
import PostHead from 'components/Posts/PostHead'
import Template from 'components/common/Template'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { PostPageItemType } from 'types/PostItem.type'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[],
    }
  }
  location: {
    href: string
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = ({
  data: {
    allMarkdownRemark: { edges }
  },
  location: { href }
}) => {
  const { node: { html, frontmatter: { title, summary, date, categories, thumbnail: { childImageSharp: { gatsbyImageData }, publicURL } } } } = edges[0];
  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumnail={gatsbyImageData}
      />
      <PostContent html={html} />
    </Template>
  )
}

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String = "slug") {
      allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
        edges {
          node {
            html
            frontmatter {
              categories
              date(formatString: " YYYY.MM.DD.")
              title
              summary
              thumbnail {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `