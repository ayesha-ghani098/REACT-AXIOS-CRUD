import React, { useState } from 'react';

// Style
import './css/style.css';

const AddContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Kindly fill all the fields carefully!');
      return;
    }
    const state = {
      name,
      email,
    };

    props.addContact(state);
    setName('');
    setEmail('');
    props.history.push('/');
  };

  return (
    <div className='main'>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h2>Add Contact</h2>
        </div>

        <form className='form' onSubmit={add}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='field'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
