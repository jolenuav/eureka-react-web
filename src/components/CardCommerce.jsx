import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import COLORS from '../assets/styles/Colors';
import IconCreditCard from './Icons/IconCreditCard';
import IconStar from './Icons/IconStar';

export default function CardCommerce(props) {
  return (
    <Card>
      <Card.Body
        className='d-flex flex-row justify-content-between'
        style={{ height: '8rem', maxHeight: '8rem' }}
      >
        <Col
          xs='3'
          className='d-flex align-items-center justify-content-center'
          style={{ width: '20%' }}
        >
          <Image
            style={{
              maxWidth: '5rem',
              maxHeight: '5rem',
            }}
            roundedCircle
            src={props.commerce.image}
          />
        </Col>
        <Col
          xs='9'
          className='d-flex flex-column align-items-start'
          style={{ width: '80%' }}
        >
          <div className='font-weight-bold m-0' style={{ fontSize: '1.5rem' }}>
            {props.commerce.name}
          </div>
          {props.commerce.payGeneric ? (
            <div className='d-flex flex-row align-items-center txt-grey'>
              <IconCreditCard
                width='1rem'
                height='1rem'
                color={COLORS.colorGrey}
              />
              <div className='pl-2' style={{ fontSize: '0.7rem' }}>
                Acepta transferencia
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className='txt-grey' style={{ fontSize: '0.8rem' }}>
            {props.commerce.duration}
          </div>
          <div className='d-flex flex-row align-items-center txt-primary'>
            <div className='pr-2'>{props.commerce.rate}</div>
            <IconStar width='1rem' height='1rem' color={COLORS.colorPrimary} />
          </div>
        </Col>
      </Card.Body>
    </Card>
  );
}
