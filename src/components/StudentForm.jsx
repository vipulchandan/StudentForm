import React, { useState } from 'react'

const StudentForm = () => {
    const [name, setName] = useState('');
    const [roll, setRoll] = useState('');
    const [course, setCourse] = useState('');
    const [phone, setPhone] = useState('');
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newStudent = {
            name,
            roll,
            course,
            phone
        }

        setStudents([...students, newStudent]);

        setName('');
        setRoll('');
        setCourse('');
        setPhone('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Student Form</h2>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={roll} placeholder="Enter Roll" onChange={(e) => setRoll(e.target.value)} />
            <input type="text" value={course} placeholder="Enter Course" onChange={(e) => setCourse(e.target.value)} />
            <input type="text" value={phone} placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>

        {students.length > 0 && (
            <div>
                <h2>Student Information</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Course</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.roll}</td>
                                <td>{student.course}</td>
                                <td>{student.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) }
    </div>
  )
}

export default StudentForm