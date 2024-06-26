import React from 'react'
import Header from '../components/ui/Header'
import Sidebar from '../components/ui/Sidebar'
import AddUserForm from '../components/users/AddUserForm'

const AddUser = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <AddUserForm />
    </div>
  )
}

export default AddUser
