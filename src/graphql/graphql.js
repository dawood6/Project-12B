import gql from "graphql-tag";

export const READ_OPERATION = gql`
  {
    read {
      id
      wish
    }
  }
`;

export const ADD_OPERATION = gql`
  mutation addCrud($wish: String!) {
    addCrud(wish: $wish) {
      wish
    }
  }
`;

export const REMOVE_OPERATION = gql`
  mutation removeCrud($id: ID!) {
    removeCrud(id: $id) {
      id
    }
  }
`;

export const UPDATE_OPERATION = gql`
  mutation updateCrud($id: ID!, $wish: String!) {
    updateCrud(id: $id, wish: $wish) {
      wish
    }
  }
`;
