import React from 'react'
interface User {
  id: number
  name: string
  email: string
}
const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {next : {revalidate: 10}})
  const users: User[] = await response.json()
  return (
    <>
      <h1>Users</h1>
        {/* {users.map(user => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))} */}
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage