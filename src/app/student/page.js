import React from 'react'
const student = [
    {
        name: 'John Doe',
        age:
        20
    },
    {
        name: 'Jane Doe',
        age: 21
    },
    {
        name: 'Mike Smith',
        age: 22
    },
    {
        name: 'Burce Lee',
        age: 23
    }
]

export default function page() {
  return (
    <div>
      Student page

      <ul>
        {student && student.map((student, index) => (
            <li key={index}>
            {student.name} - {student.age}
          </li>
        ))}
      </ul>
    </div>
  )
}
