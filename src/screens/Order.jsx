import React, { Fragment } from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import COLORS from '../assets/styles/Colors';
import ClientRepository from '../firebase/repositories/ClientRepository';
import ProductRepository from '../firebase/repositories/ProductRepository';
import { addtoOrder, updateOrder } from '../redux/ducks/OrderDucks';
import Loader from './Loader';

function Order(props) {
  // CONST
  const { handleSubmit, register, setValue } = useForm();
  const { commerceId, productId } = useParams();
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.order);

  // HOOKS
  const [commerce, setCommerce] = React.useState(null);
  const [counter, setCounter] = React.useState(1);
  const [finishLoad, setFinishLoad] = React.useState(false);
  const [clientRepository] = React.useState(new ClientRepository());
  const [productRepository] = React.useState(new ProductRepository());
  const [marginTop, setMarginTop] = React.useState('0rem');
  const [opacity1, setOpacity1] = React.useState(1);
  const [opacity2, setOpacity2] = React.useState(0);
  const [product, setProduct] = React.useState(null);

  // CONSTS
  const history = useHistory();

  // FUNCTIONS
  const addOrder = (data) => {
    const order = {
      product: product,
      qty: Number(data.counter),
      amount: Number(data.counter) * product.data.price,
      observation: data.observation,
    };
    const orderExist = orderState.orders.find(
      (order) => order.product.id === productId
    );
    if (orderExist) {
      dispatch(updateOrder(order));
    } else {
      dispatch(addtoOrder(order));
    }
    history.goBack();
  };

  const handleScroll = () => {
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

  const handlerCounter = (minus) => {
    if (minus && counter > 1) {
      setCounter(counter - 1);
      setValue('counter', counter - 1);
    }
    if (!minus) {
      setCounter(counter + 1);
      setValue('counter', counter + 1);
    }
  };

  React.useEffect(() => {
    const loadData = async () => {
      const commerceById = await clientRepository.findById(commerceId);
      const productById = await productRepository.findById(productId);
      setCommerce(commerceById);
      setProduct(productById);
      setFinishLoad(true);
      const order = orderState.orders.find(
        (order) => order.product.id === productId
      );
      if (order) {
        setValue('observation', order.observation);
        setCounter(order.qty);
        setValue('counter', order.qty);
      }
    };
    loadData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    clientRepository,
    commerceId,
    orderState.orders,
    productId,
    productRepository,
    setValue,
  ]);

  if (!finishLoad) {
    return <Loader />;
  } else if (!commerce || !product) {
    return <></>;
  } else {
    return (
      <Fragment>
        <Form onSubmit={handleSubmit(addOrder)}>
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
            <h3 className='pl-2'>{product.data.name}</h3>
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
                backgroundImage: `linear-gradient(to bottom, ${
                  COLORS.colorBlack
                }00, ${COLORS.colorBlack}96 95%), url(${
                  product.data.image ? product.data.image : commerce.data.image
                })`,
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
                    <h4 className='font-weight-bold'>{product.data.name}</h4>
                    <div className='text-justify'>
                      {product.data.description}
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
                          type='button'
                          onClick={() => handlerCounter(true)}
                        >
                          <BiMinus size='1.5rem' color={COLORS.colorPrimary} />
                        </button>
                        <Form.Control
                          className='d-flex align-items-center p-0 text-center'
                          name='counter'
                          defaultValue={1}
                          readOnly
                          ref={register}
                        />
                        <button
                          className='btn p-2 d-flex align-items-center font-weight-bold'
                          style={{
                            color: COLORS.colorPrimary,
                            backgroundColor: 'none',
                          }}
                          type='button'
                          onClick={() => handlerCounter(false)}
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
                    <Form.Group controlId='exampleForm.ControlTextarea1'>
                      <Form.Control
                        as='textarea'
                        rows={3}
                        name='observation'
                        ref={register}
                      />
                    </Form.Group>
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
                  color: COLORS.colorWhite,
                  fontWeight: 'bold',
                }}
                type='submit'
              >
                Agregar a mi pedido (${product.data.price * counter})
              </button>
            </Col>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default withRouter(Order);
