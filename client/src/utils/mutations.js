import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
  mutation addUser($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    addUser(firstname: $username, lastname: $lastname, email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;