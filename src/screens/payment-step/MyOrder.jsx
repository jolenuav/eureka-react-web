import React, { Fragment } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import COLORS from '../../assets/styles/Colors';
import '../../assets/styles/Style.scss';
import { Image } from 'react-bootstrap';

const MyOrder = () => {
  // CONSTS
  const history = useHistory();

  return (
    <Fragment>
      <div
        className='dflex flex-column shadow-2'
        style={{ color: COLORS.colorText }}
      >
        <div className='d-flex flex-row justify-content-between align-item-center p-2 '>
          <FiArrowLeft
            size='1.5rem'
            color={COLORS.colorBlack}
            onClick={() => {
              history.goBack();
            }}
          />
          <div>Edit</div>
        </div>
        <div className='d-flex flex-row align-item-center p-3'>
          <Image
            style={{
              width: '3rem',
              height: '3rem',
            }}
            rounded
            src='https://firebasestorage.googleapis.com/v0/b/eureka-d6882.appspot.com/o/catalogue%2Fcommerce%2FAC25040864%2FArcoirisCreams.jpg?alt=media&token=6c7786ee-92a0-42e4-a216-c5e821728cec'
          />
          <div className='pl-3'>
            <h5 className='m-0'>Comercio</h5>
            <span style={{ fontSize: '12px' }}>30-45 min • Envío gratis</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(MyOrder);
