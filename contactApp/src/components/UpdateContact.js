import React, { useState } from 'react';

// Style
import './css/style.css';

const UpdateContact = (props) => {
  const { id, nname, eemail } = props.location.state.contact;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const update = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Kindly fill all the fields carefully!');
      return;
    }
    const state = {
      id,
      name,
      email,
    };

    props.updateContact(state);
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
          <h2>Update Contact</h2>
        </div>

        <form className='form' onSubmit={update}>
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
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
