// // import { useState } from 'react'

// import React, { useState, useEffect } from 'react'

// const FeedbackForm = () => {
//   const [form, setForm] = useState({
//     id: null,
//     name: '',
//     email: '',
//     feedback: '',
//   })

//   const [feedbacks, setFeedbacks] = useState([])

//   const handleInputChange = (event) => {
//     setForm({ ...form, [event.target.name]: event.target.value })
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if (form.id === null) {
//       const newId = Date.now()
//       setFeedbacks([...feedbacks, { ...form, id: newId }])
//       // console.log(newId)
//     } else {
//       setFeedbacks(
//         feedbacks.map((feedback) => {
//           if (feedback.id === form.id) {
//             return form
//           }
//           return feedback
//         })
//       )
//     }

//     setForm({ id: null, name: '', email: '', feedback: '' })
//   }
//   const handleEdit = (id) => {
//     const feedback = feedbacks.find((feedback) => feedback.id === id)
//     setForm(feedback)
//     console.log(feedback.id)
//   }
//   const handleDelete = (id) => {
//     setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
//   }
//   useEffect(() => {
//     if (form.id !== null) {
//       console.log(form.id)
//     }
//   }, [form])

//   return (
//     <div>
//       <form action='' onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type='text'
//             name='name'
//             value={form.name}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />

//         <label>
//           Email:
//           <input
//             type='email'
//             name='email'
//             value={form.email}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />

//         <label>
//           Feedback:
//           <textarea
//             name='feedback'
//             value={form.feedback}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />

//         <button type='submit'>{form.id !== null ? 'submit' : 'update'}</button>
//       </form>
//       <h2>Feedbacks:</h2>
//       {feedbacks.map((feedback) => (
//         <div key={feedback.id}>
//           <h3>{feedback.name}</h3>
//           <p>{feedback.email}</p>
//           <p>{feedback.feedback}</p>
//           <button onClick={() => handleDelete(feedback.id)}>Delete</button>
//           <button onClick={() => handleEdit(feedback.id)}>Edit</button>
//         </div>
//       ))}
//     </div>
//   )
// }
// export default FeedbackForm