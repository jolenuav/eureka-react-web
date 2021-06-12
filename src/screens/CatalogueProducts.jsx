import React, { Fragment } from 'react';
import {
  Card,
  Col,
  Form,
  FormControl,
  Image,
  InputGroup,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AiOutlineShopping } from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import '../assets/styles/catalogue-product.scss';
import COLORS from '../assets/styles/Colors';
import IconSearch from '../components/Icons/IconSearch';
import ClientRepository from '../firebase/repositories/ClientRepository';
import ProductRepository from '../firebase/repositories/ProductRepository';
import Loader from './Loader';

const CatalogueProducts = (props) => {
  // CONST
  const { handleSubmit, register } = useForm();
  const { commerceId } = useParams();
  const heightWindow = window.innerHeight;
  const orderState = useSelector((state) => state.order);

  // HOOKS
  const [allProducts, setAllProducts] = React.useState([]);
  const [clientRepository] = React.useState(new ClientRepository());
  const [commerce, setCommerce] = React.useState(null);
  const [finishLoad, setFinishLoad] = React.useState(false);
  const [imgOpacity, setImgOpacity] = React.useState(1);
  const [marginTop, setMarginTop] = React.useState('15rem');
  const [productRepository] = React.useState(new ProductRepository());
  const [products, setProducts] = React.useState([]);
  const [tabsOpacity, setTabsOpacity] = React.useState(0);
  const [height, setHeight] = React.useState(heightWindow);

  // FUNCTIONS
  const search = ({ value }) => {
    if (!value || value.trim() === '') {
      setProducts([...allProducts]);
    } else {
      const listProducts = [];
      allProducts.forEach((item, i) => {
        if (
          item.products.some((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          )
        ) {
          listProducts.push({
            section: item.section,
            products: item.products.filter((product) =>
              product.name.toLowerCase().includes(value.toLowerCase())
            ),
          });
        }
        if (i === allProducts.length - 1) {
          setProducts([...listProducts]);
        }
      });
    }
  };

  const goToCatalogue = () => {
    props.history.push('/catalogue');
  };

  const goToOrder = (productId) => {
    props.history.push(`/catalogue/order/${commerceId}/${productId}`);
  };

  const handleScroll = (e) => {
    let heigthTotal = heightWindow;
    if (orderState.orders.length > 0) {
      heigthTotal = heightWindow - 58.3;
    }
    if (document.getElementById('list-container').scrollTop > 50) {
      setImgOpacity(0);
      setTabsOpacity(1);
      setMarginTop('10rem');
      const remPx = 9.5 / 0.06;
      setHeight(heigthTotal - remPx);
    } else {
      setImgOpacity(1);
      setTabsOpacity(0);
      setMarginTop('15rem');
      const remPx = 14.5 / 0.06;
      setHeight(heigthTotal - remPx);
    }
  };

  const linkActive = (id) => {
    const links = document.getElementsByClassName('link-active');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('link-active');
    }
    document.getElementById(id).classList.add('link-active');
  };

  // EFFECT
  React.useEffect(() => {
    const loadData = async () => {
      const commerceById = await clientRepository.findById(commerceId);
      setCommerce(commerceById);
      const listProducts = [];
      commerceById.data.sections.forEach(async (section, index) => {
        const resp = await productRepository.findByCommerceAndSection(
          commerceId,
          section
        );
        if (resp.length > 0) {
          listProducts.push({
            section,
            products: resp,
          });
        }
        if (index === commerceById.data.sections.length - 1) {
          setAllProducts(listProducts);
          setProducts([...listProducts]);
        }
        setFinishLoad(true);
      });
    };
    loadData();
  }, [
    clientRepository,
    commerceId,
    height,
    heightWindow,
    orderState,
    productRepository,
    setAllProducts,
  ]);

  if (!finishLoad) {
    return <Loader />;
  } else if (!commerce || allProducts.length === 0) {
    return <></>;
  } else {
    return (
      <Fragment>
        <div className='w-100 position-fixed' style={{ top: 0, zIndex: 99 }}>
          <div
            className='p-3 img-header d-flex flex-column justify-content-end'
            style={{
              opacity: imgOpacity,
              backgroundImage: `linear-gradient(to bottom, ${COLORS.colorBlack}00, ${COLORS.colorBlack}96 95%), url(${commerce.data.image})`,
            }}
          >
            <FiArrowLeft
              className='position-absolute'
              style={{
                top: '0.5rem',
                left: '0.5rem',
              }}
              size='1.5rem'
              color={COLORS.colorLight2}
              onClick={goToCatalogue}
            />
            <div
              className='txt-light font-weight-bold d-flex flex-row align-items-center'
              style={{
                display: imgOpacity === 0 ? 'none' : 'block',
              }}
            >
              <h2 className='pr-2 m-0'>{commerce.data.name}</h2>
              <div className='pr-2'>4.5</div>
              <FaStar size='1rem' color={COLORS.colorLight2} />
            </div>
            <div
              className='pb-2 txt-light d-flex flex-row align-items-center'
              style={{
                fontSize: '0.8rem',
                lineHeight: '1.2rem',
                display: imgOpacity === 0 ? 'none' : 'block',
              }}
            >
              <div className='pr-3'>{commerce.data.duration} min</div>
              <BsCreditCard size='1rem' color={COLORS.colorLight2} />
              <div className='pl-2'>Acepta transferencia</div>
            </div>
            <Form onChange={handleSubmit(search)}>
              <Form.Row className='align-items-center'>
                <Col xs='12'>
                  <InputGroup className='mb-2'>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <IconSearch
                          width='1rem'
                          height='1rem'
                          color={COLORS.colorBlack}
                        />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name='value'
                      placeholder='Buscar producto por nombre'
                      ref={register}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form>
          </div>
          <div
            className='p-2 categories d-flex flex-column position-absolute shadow-4 '
            style={{
              opacity: tabsOpacity,
            }}
          >
            <div className='d-flex flex-row align-items-center'>
              <FiArrowLeft
                size='1.5rem'
                color={COLORS.colorBlack}
                onClick={goToCatalogue}
              />
              <div className='pl-2 font-weight-bold'>{commerce.data.name}</div>
            </div>
            <Form className='pt-3'>
              <Form.Row className='align-items-center'>
                <Col xs='12'>
                  <InputGroup className='mb-2'>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <IconSearch
                          width='1rem'
                          height='1rem'
                          color={COLORS.colorBlack}
                        />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder='Buscar productos por nombre' />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form>

            <div
              className='d-flex flex-nowrap'
              style={{
                overflowX: 'auto',
              }}
            >
              {products.map((product, i) => (
                <div key={i} className='card-block p-3'>
                  <a
                    className='link'
                    href={'#' + i}
                    id={'link' + i}
                    onClick={() => linkActive('link' + i)}
                  >
                    {product.section}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          onScroll={(e) => handleScroll(e)}
          id='list-container'
          className='w-100 d-flex flex-column position-fixed'
          style={{
            height: `${height}px`,
            overflow: 'auto',
            marginTop,
          }}
        >
          {products.map((section, i) => (
            <Fragment key={i}>
              <div className='pl-3'>
                <h3 id={i}>{section.section}</h3>
              </div>
              <div className='w-100 d-flex flex-wrap'>
                {section.products.map((product) => (
                  <Col
                    key={product.id}
                    xs='12'
                    xl='6'
                    className='my-2 p-xs-0'
                    onClick={() => {
                      goToOrder(product.id);
                    }}
                  >
                    <Card>
                      <Card.Body className='d-flex flex-row justify-content-between'>
                        <Col
                          xs='3'
                          className='d-flex align-items-center justify-content-center'
                          style={{ width: '20%' }}
                        >
                          <Image
                            style={{
                              width: '5rem',
                              height: '5rem',
                            }}
                            roundedCircle
                            src={
                              product.image
                                ? product.image
                                : commerce.data.image
                            }
                          />
                        </Col>
                        <Col
                          xs='9'
                          className='d-flex flex-column align-items-start'
                          style={{ width: '80%' }}
                        >
                          <div
                            className='font-weight-bold m-0'
                            style={{ fontSize: '1.5rem' }}
                          >
                            {product.name}
                          </div>
                          <div
                            className='txt-grey'
                            style={{ fontSize: '0.8rem' }}
                          >
                            {product.description}
                          </div>
                          <div>{product.price} $</div>
                        </Col>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
        {orderState.orders.length > 0 ? (
          <div
            className='w-100 p-2 d-flex justify-content-center position-fixed shadow-top'
            style={{
              height: '3.5rem',
              bottom: 0,
              backgroundColor: COLORS.colorWhite
            }}
          >
            <Col xs='12' xl='4'>
              <button
                className='btn w-100 d-flex flex-row justify-content-between alignt-item-center'
                style={{
                  backgroundColor: COLORS.colorPrimary,
                  borderRadius: '50px',
                  color: COLORS.colorWhite,
                  fontWeight: 'bold',
                }}
                type='submit'
                onClick={() => {
                  props.history.push(`/catalogue/myorder`);
                }}
              >
                <span className='d-flex flex-row'>
                  <AiOutlineShopping size='1.5rem' />
                  <div className='counter-circle'>
                    {orderState.orders.length}
                  </div>
                </span>
                Ver mi pedido
                <span style={{ fontWeight: 'normal' }}>
                  ${orderState.totalAmount}
                </span>
              </button>
            </Col>
          </div>
        ) : (
          <></>
        )}
      </Fragment>
    );
  }
};

export default withRouter(CatalogueProducts);
