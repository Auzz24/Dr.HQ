import { gql } from "@apollo/client";

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


