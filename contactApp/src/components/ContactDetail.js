import React from 'react';

// Style
import './css/style.css';

// Linking
import { Link } from 'react-router-dom';

// Avatar
import user from '../assets/avatar.PNG';

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className='card-detail'>
      <div className=''>
        <div className='image'>
          <img src={user} className='img-fluid' alt='user' />
        </div>
        <div style={{ margin: '20px 0' }}>
          <h1 className='textpart'>{name}</h1>
          <h5 className='textpart'>{email}</h5>
        </div>

        <div
          className='detail'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Link to='/'>
            <button>Back to Contact List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
