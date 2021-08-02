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
    <div>
      <h2>Edit Contact</h2>
      <form className='ui form' onSubmit={update}>
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
        <button className='ui button blue'>Update</button>
      </form>
    </div>
  );
};

export default UpdateContact;
