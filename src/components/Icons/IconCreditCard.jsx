import React from 'react';

export default function IconCreditCard(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      style={{ fill: props.color }}
      viewBox='0 0 16 16'
      className='bi bi-credit-card'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z'
      ></path>
      <path d='M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z'></path>
    </svg>
  );
}
