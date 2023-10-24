import Template from 'components/common/Template'
import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'

type PostTemplateProps = {

}

const PostTemplate: FunctionComponent<PostTemplateProps> = (props) => {
    console.log(props)
    return <Template>Post Template</Template>
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