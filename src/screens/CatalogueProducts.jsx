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
import { BsCreditCard } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { withRouter } from 'react-router-dom';
import '../assets/styles/catalogue-product.scss';
import COLORS from '../assets/styles/Colors';
import IconSearch from '../components/Icons/IconSearch';

const listProducts = [
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
  {
    section: 'Hamburguesas',
    products: [
      {
        image: '',
        name: 'GRAND DOBLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
      {
        image: '',
        name: 'GRAND TRIPLE MCBACON',
        description:
          'Elaborada con láminas de bacon crocante, queso cheddar, pepino, cebolla fresca con un toque de mostaza y ketchup, doble carne bien jugosa y esponjoso pan.',
        price: 360,
      },
    ],
  },
  {
    section: 'Bebidas',
    products: [
      {
        image: '',
        name: 'COCA-COLA',
        description: 'Gaseosa',
        price: 360,
      },
      {
        image: '',
        name: 'COCA-COLA LIGHT',
        description: 'Gaseosa',
        price: 360,
      },
    ],
  },
];

const CatalogueProducts = (props) => {
  // CONST
  const { handleSubmit, register } = useForm();

  // HOOKS
  const [imgOpacity, setImgOpacity] = React.useState(1);
  const [marginTop, setMarginTop] = React.useState('16rem');
  const [products] = React.useState([...listProducts]);
  const [tabsOpacity, setTabsOpacity] = React.useState(0);

  const search = ({ value }) => {
    console.log(value);
  };

  const goToCatalogue = () => {
    props.history.push('/catalogue');
  };

  const goToOrder = () => {
    props.history.push('/catalogue/order');
  };

  const handleScroll = (e) => {
    if (document.getElementById('list-container').scrollTop > 50) {
      setImgOpacity(0);
      setTabsOpacity(1);
      setMarginTop('11rem');
    } else {
      setImgOpacity(1);
      setTabsOpacity(0);
      setMarginTop('16rem');
    }
  };

  const linkActive = (id) => {
    console.log(id);
    const links = document.getElementsByClassName('link-active');
    console.log(links);
    for (var i = 0; i < links.length; i++) {
      console.log('remove classname: ', links[i]);
      links[i].classList.remove('link-active');
    }
    console.log(document.getElementById(id));
    document.getElementById(id).classList.add('link-active');
  };

  React.useEffect(() => {}, []);

  return (
    <Fragment>
      <div className='w-100 position-fixed' style={{ top: 0, zIndex: 99 }}>
        <div
          className='p-3 img-header d-flex flex-column justify-content-end'
          style={{
            opacity: imgOpacity,
            backgroundImage: `linear-gradient(to bottom, ${COLORS.colorBlack}00, ${COLORS.colorBlack}96 95%), url('https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg')`,
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
          <div className='txt-light font-weight-bold d-flex flex-row align-items-center'>
            <h2 className='pr-2 m-0'>Mac Donalds</h2>
            <div className='pr-2'>4.5</div>
            <FaStar size='1rem' color={COLORS.colorLight2} />
          </div>
          <div
            className='pb-2 txt-light d-flex flex-row align-items-center'
            style={{ fontSize: '0.8rem', lineHeight: '1.2rem' }}
          >
            <div className='pr-3'>15 - 20 min</div>
            <BsCreditCard size='1rem' color={COLORS.colorLight2} />
            <div className='pl-2'>Acepta transferencia</div>
          </div>
          <Form>
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
        </div>
        <div
          className='p-2 categories d-flex flex-column position-absolute'
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
            <div className='pl-2 font-weight-bold'>Mac Donalds</div>
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
            {listProducts.map((categ, i) => (
              <div key={i} className='card-block p-3'>
                <a
                  className='link'
                  href={'#' + i}
                  id={'link' + i}
                  onClick={() => linkActive('link' + i)}
                >
                  {categ.section}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        onScroll={(e) => handleScroll(e)}
        id='list-container'
        className='w-100 h-100 d-flex flex-wrap position-fixed'
        style={{
          overflow: 'auto',
          marginTop,
        }}
      >
        {products.map((section, i) => (
          <Fragment key={i}>
            <Col xs='12'>
              <h3 id={i}>{section.section}</h3>
            </Col>
            {section.products.map((product, j) => (
              <Col
                key={j}
                xs='12'
                xl='6'
                className='my-2 p-xs-0'
                onClick={goToOrder}
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
                          maxWidth: '5rem',
                          maxHeight: '5rem',
                        }}
                        roundedCircle
                        src='https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/meal/desktop/h-mcdonalds-Big-Mac-Extra-Value-Meals.jpg?$Product_Desktop$'
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
                        Big Mac® Combo Meal
                      </div>
                      <div className='txt-grey' style={{ fontSize: '0.8rem' }}>
                        Los ingredientes de Big Mac incluyen un clásico pan de
                        hamburguesa con sésamo, salsa Big Mac...
                      </div>
                      <div>$ 690</div>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default withRouter(CatalogueProducts);
