import React from 'react'

const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                {author.username}
            </td>
            <td>
                {author.firstname}
            </td>
            <td>
                {author.lastname}
            </td>
            <td>
                {author.email}
            </td>
        </tr>
    )
}

const AuthorList = ({authors}) => {
    return (
        <table border="1" cellspacing="0" cellpadding="0" bgcolor="#00ced1">
            <th>
                Position
            </th>
            <th>
                First Name
            </th>
            <th>
                Last Name
            </th>
            <th>
                Email
            </th>
            {authors.map((author) => <AuthorItem author={author} />)}
        </table>
    )
}

export default AuthorList