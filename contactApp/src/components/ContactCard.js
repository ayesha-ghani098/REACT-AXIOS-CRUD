import React from 'react';

// Style
import './css/style.css';

// Linking page
import { Link } from 'react-router-dom';

// Avatar
import user from '../assets/avatar.PNG';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className='row'>
      <div id='subcard' className='col-sm-12 col-md-12 col-lg-12'>
        <img className='img-fluid' src={user} alt='user' />
        <div className='content'>
          <Link
            className='link'
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <h3 className='text'>{name}</h3>
            <p className='subtext'>{email}</p>
          </Link>
        </div>
      </div>
      <div id='subcard2'>
        <i
          id='icon'
          className='far fa-trash-alt'
          style={{}}
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
          <i id='icon' className='far fa-edit'></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
