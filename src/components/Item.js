import React from 'react';
import '../components/item.css';

export default function Item(props) {
  return (
    <>
          <div className="card-body">
            <h3 className='title'>{props.title}</h3>
            <p className='educator'>{props.edu}</p>
            <p className='desc'>
              Description : Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Recusandae, molestiae.
            </p>
            <a rel="noreferrer" href={props.url} target='blank' className="course-btn">Start</a>
          </div>
    </>
  );
}
