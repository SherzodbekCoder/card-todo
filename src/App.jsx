// import { useState } from 'react'
// import './App.css'
// import Header from './components/Header'

// function App() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [languages, setLanguages] = useState([]);

//   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

//   function getData() {
//     let data = [];
//     if (localStorage.getItem('todos')) {
//       data = JSON.parse(localStorage.getItem('todos'))
//     }

//     return data;
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!name || !age || !gender || languages.length === 0) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const todo = {
//       id: Date.now(),
//       name: name,
//       age: age,
//       gender: gender,
//       languages: languages
//     }

//     let old = getData();
//     old.push(todo);
//     localStorage.setItem('todos', JSON.stringify(old));
//     setName('');
//     setAge('');
//     setGender('');
//     setLanguages([]);
//     setTodos(old);
//   }

//   function handleDelete(id) {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   }

//   function confirmDelete(id) {
//     if (window.confirm('Are you sure you want to delete this item?')) {
//       handleDelete(id);
//     }
//   }

//   return (
//     <>
//       <div className="todo w-50 mx-auto border border-2 rounded mt-4">
//         <Header />
//         <div className='p-3'>
//           <form className='d-flex w-100 my-4' onSubmit={handleSubmit}>
//             <div className=''>
//               <input type="text" className='form-control w-100 mb-4' placeholder='Enter name...' value={name} onChange={(e) => setName(e.target.value)} />
//               <input type="number" className='form-control w-100 mb-4' placeholder='Enter age...' value={age} onChange={(e) => setAge(e.target.value)} />

//               <select className="form-select" aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
//                 <option disabled selected>Jinsingizni tanlang</option>
//                 <option value="erkak">Erkak</option>
//                 <option value="ayol">Ayol</option>
//               </select><br />

//               <div className="form-check">
//                 <p>Qaysi tillarni bilasiz</p>

//                 <input className="form-check-input" type="checkbox" id="uzbek" value="uzbek" onChange={(e) => {
//                   if (e.target.checked) {
//                     setLanguages([...languages, 'Uzbek']);
//                   } else {
//                     setLanguages(languages.filter(lang => lang !== 'Uzbek'));
//                   }
//                 }} />
//                 <label className="form-check-label" htmlFor="uzbek">Uzbek</label>
//               </div>

//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="english" value="english" onChange={(e) => {
//                   if (e.target.checked) {
//                     setLanguages([...languages, 'English']);
//                   } else {
//                     setLanguages(languages.filter(lang => lang !== 'English'));
//                   }
//                 }} />
//                 <label className="form-check-label" htmlFor="english">English</label>
//               </div>

//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="russian" value="russian" onChange={(e) => {
//                   if (e.target.checked) {
//                     setLanguages([...languages, 'Russian']);
//                   } else {
//                     setLanguages(languages.filter(lang => lang !== 'Russian'));
//                   }
//                 }} />
//                 <label className="form-check-label" htmlFor="russian">Russian</label>
//               </div> <br />

//               <div className="form-floating">
//                 <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
//               </div>

//               <button type="submit" className='btn btn-primary w-25'>Submit</button>
//             </div>
//           </form>
//           <div className="todo-wrapper">
//             {todos.map((el, index) => (
//               <div key={index} className="todo-item d-flex align-items-center justify-content-between mb-3 border border-2 rounded p-2" >
//                 <div className='d-flex align-items-center gap-2'>
//                   <input type="checkbox" name="" id="" />
//                   <h5>{el.name}</h5>
//                 </div>
//                 <div className='actions d-flex gap-2'>
//                   <i className=" edite fa-regular fa-pen-to-square" style={{ cursor: 'pointer' }}></i>
//                   <i className="delete fa-solid fa-trash-can" style={{ cursor: 'pointer' }} onClick={() => confirmDelete(el.id)}></i>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


import { useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [languages, setLanguages] = useState([]);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleSave = () => {
    const userData = { name, age, gender, languages };
    const updatedUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setName('');
    setAge('');
    setGender('');
    setLanguages([]);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((user, i) => i !== index);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="mx-auto w-50">
      <div className="">
        <label>Name:</label>
        <input type="text" value={name} className='form-control w-100 mb-2' onChange={(e) => setName(e.target.value)} />

        <label>Age:</label>
        <input type="number" value={age} className='form-control w-100 mb-2' onChange={(e) => setAge(e.target.value)} />

        <label>Gender:</label>
        <select className="form-select" aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label >Languages:</label><br />
        <input  type="radio" value="English" onChange={(e) => setLanguages([...languages, e.target.value])} />
        <label>English</label><br />
        <input type="radio" value="Spanish" onChange={(e) => setLanguages([...languages, e.target.value])} />
        <label className="mb-3">Spanish</label>
        <br />
        <button className=" btn btn-primary" onClick={handleSave}>Save</button>
      </div>
      <table className="mt-100">
        <thead  >
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Languages</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.languages.join(', ')}</td>
              <td><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
