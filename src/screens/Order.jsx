import React, { Fragment } from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { useHistory, withRouter } from 'react-router-dom';
import COLORS from '../assets/styles/Colors';

function Order(props) {
  // HOOKS
  const [opacity1, setOpacity1] = React.useState(1);
  const [opacity2, setOpacity2] = React.useState(0);
  const [marginTop, setMarginTop] = React.useState('0rem');

  // CONSTS
  const history = useHistory();

  // FUNCTIONS
  const handleScroll = () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 25) {
      setOpacity1(0);
      setOpacity2(1);
      setMarginTop('-5rem');
    } else {
      setOpacity1(1);
      setOpacity2(0);
      setMarginTop('0rem');
    }
  };

  React.useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <Fragment>
      <div
        className='p-2 w-100 d-flex flex-row align-items-center position-fixed'
        style={{
          borderBottom: `1px solid ${COLORS.colorGrey}`,
          transition: '0.3s',
          opacity: opacity2,
          top: 0,
          backgroundColor: COLORS.colorWhite,
          zIndex: 999,
        }}
      >
        <FiArrowLeft
          size='1.5rem'
          color={COLORS.colorBlack}
          onClick={() => {
            history.goBack();
          }}
        />
        <h3 className='pl-2'>Big Mac® Combo Meal</h3>
      </div>
      <div
        style={{
          marginTop,
          marginBottom: '4rem',
        }}
      >
        <div
          className='p-2 img-header'
          style={{
            opacity: opacity1,
            backgroundColor: COLORS.colorGrey,
            backgroundImage: `linear-gradient(to bottom, ${COLORS.colorBlack}00, ${COLORS.colorBlack}96 95%), url('https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/AR/sandwiches-de-carne/TripleMcNifica-450x305.png')`,
          }}
        >
          <FiArrowLeft
            size='1.5rem'
            color={COLORS.colorLight}
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
        <div className='p-2'>
          <Col xs='12'>
            <Card className='mb-2'>
              <Card.Body>
                <h4 className='font-weight-bold'>Big Mac® Combo Meal</h4>
                <div className='text-justify'>
                  Elaborada con tomate fresco y lechuga, cebolla, queso cheddar,
                  un toque de ketchup, mostaza y mayonesa,triple carne bien
                  jugosa y esponjoso pan.
                </div>
              </Card.Body>
            </Card>
            <Card className='mb-2'>
              <Card.Body>
                <h4 className='font-weight-bold'>Unidades</h4>
                <div className='d-flex justify-content-center'>
                  <div
                    className='d-flex flex-row justify-content-between align-items-center'
                    style={{
                      border: `1px solid ${COLORS.colorPrimary}`,
                      borderRadius: '50px',
                      height: '3rem',
                      width: '7rem',
                    }}
                  >
                    <button
                      className='btn p-2 d-flex align-items-center font-weight-bold'
                      style={{
                        color: COLORS.colorPrimary,
                        backgroundColor: 'none',
                      }}
                    >
                      <BiMinus size='1.5rem' color={COLORS.colorPrimary} />
                    </button>
                    <div className='d-flex align-items-center'>1</div>
                    <button
                      className='btn p-2 d-flex align-items-center font-weight-bold'
                      style={{
                        color: COLORS.colorPrimary,
                        backgroundColor: 'none',
                      }}
                    >
                      <BiPlus size='1.5rem' color={COLORS.colorPrimary} />
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <h4 className='font-weight-bold'>¿Quiere Aclarar algo?</h4>
                <Form>
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>

      <div
        className='w-100 p-2 d-flex justify-content-center position-fixed'
        style={{
          bottom: 0,
          backgroundColor: COLORS.colorLight2,
          borderTop: `1px solid ${COLORS.colorGrey}`,
        }}
      >
        <Col xs='12' xl='4'>
          <button
            className='btn w-100'
            style={{
              backgroundColor: COLORS.colorPrimary,
              borderRadius: '50px',
            }}
          >
            Agregar a mi pedido ($490)
          </button>
        </Col>
      </div>
    </Fragment>
  );
}

export default withRouter(Order);
