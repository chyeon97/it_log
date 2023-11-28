import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
// Render Style
    display: flex;
    flex-direction: column;
    width: 768px;
    margin: 0 auto;
    padding: 100px 0;

// Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

// Apply Padding Attribute to All Elements
  p {
    padding: 1px 0;
  }

// Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 10px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

// Adjust Quotation Element Style
  blockquote {
    margin-top: 3px;
    margin-bottom: 3px;
    padding: 5px 10px;
    border-left: 2px solid #000000;
    font-weight: 800;
    background: rgba(0,0,0,0.03);
  }

// Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

// Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

// Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

// Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return (
    <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default PostContent;
