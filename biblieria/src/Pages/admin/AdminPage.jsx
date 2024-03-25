import React from 'react'
import { Container } from 'react-bootstrap'
import { AddUserForm } from '../../Components/AdminPageComp/AddUserForm'
import { Link } from 'react-router-dom'
import AllUsersAdmin from '../../Components/AdminPageComp/AllUsersAdmin'

export default function AdminPage() {
  return (
    <Container>
        <Link to={'/admin/createUser'} className='bg-white  mt-5'>
          Add User
        </Link>
        <AllUsersAdmin />
    </Container>
  )
}
