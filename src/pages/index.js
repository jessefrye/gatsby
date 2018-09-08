import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.map(({ node: post }, key) => {
        const { frontmatter } = post;

        return (
          <div key={key}>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map((tag, key) => {
                return (
                  <li key={key}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
