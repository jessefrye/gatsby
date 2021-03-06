import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const Template = ({ data, pathContext }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { title, date } = frontmatter;
  const { next, prev } = pathContext;

  return (
    <div>
      <Helmet title={`${frontmatter.title} - Jesse's Gatsby Blog`} />

      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <p>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous Post: {prev.frontmatter.title}
            </Link>
          )}
        </p>
        <p>
          {next && (
            <Link to={next.frontmatter.path}>
              Next Post: {next.frontmatter.title}
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.object,
  pathContext: PropTypes.object,
};

export default Template;
