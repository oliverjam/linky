import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: {
    allDataJson: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <h1>{title}</h1>
    <ul>{edges.map(({ link }) => <li key={link.id}>{link.url}</li>)}</ul>
  </>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allDataJson {
      edges {
        link: node {
          id
          url
          read
        }
      }
    }
  }
`;
