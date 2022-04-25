import { gql } from "@apollo/client";

export const ALL_DOCTORS = gql`
    {
        allDoctors {
            _id
            name
            email
            phone
            address
            department
        }
    }
`