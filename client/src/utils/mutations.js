import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_DOCTOR = gql`
mutation addDoctor($name: String!, $email: String!, $phone: String!, $address: String!, $department: String ) {
    addDoctor(name: $name, email: $email, phone: $phone, address: $address, department: $department) {
      _id
      name
      email
      phone
      department
    }
}
`;
export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;