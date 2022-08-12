import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHICS_ENDPOINT;

export const getAllPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            title
            slug
            excerpt
            content {
              raw
            }
            image {
              url
            }
            createdAt

            categories {
              name
              slug
            }
            author {
              name
              bio
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC, last: 3) {
        title
        slug
        image {
          url
        }
        createdAt
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String = "slug") {
      post(where: { slug: $slug }) {
        id
        author {
          bio
          id
          name
          avatar {
            url
          }
        }
        categories {
          name
          id
          slug
        }
        content {
          html
        }
        createdAt
        image {
          id
          url
        }
        slug
        title
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};
