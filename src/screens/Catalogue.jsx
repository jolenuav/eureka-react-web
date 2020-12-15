import React, { Fragment } from 'react';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import COLORS from '../assets/styles/Colors';
import CardCommerce from '../components/CardCommerce';
import IconSearch from '../components/Icons/IconSearch';

const listCommerces = [
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/mcdonalds-7.svg',
    name: "Mac Donald's",
    duration: '15-20 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/burger-king-4.svg',
    name: 'Burguer King',
    duration: '20-25 min',
    payGeneric: true,
    rate: 4.5,
  },
  {
    image: 'https://cdn.worldvectorlogo.com/logos/wendys-logo-1.svg',
    name: "Wendy's",
    duration: '20-25 min',
    payGeneric: false,
    rate: 4.5,
  },
];

const Catalogue = (props) => {
  const { register, handleSubmit } = useForm();
  const [commerces, setCommerces] = React.useState([...listCommerces]);

  const goToProducts = () => {
    props.history.push('/catalogue/test');
  };

  const search = ({ value }) => {
    console.log(value);
    if (!value) {
      setCommerces([...listCommerces]);
    } else {
      const list = listCommerces.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      console.log(list);
      setCommerces([...list]);
    }
  };
  return (
    <Fragment>
      <div
        className='p-2 pb-2 w-100 position-fixed'
        style={{ top: 0, borderBottom: `1px solid ${COLORS.colorGrey}` }}
      >
        <Form className='p-2' onChange={handleSubmit(search)}>
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
                  placeholder='Buscar productos por nombre'
                  ref={register}
                />
              </InputGroup>
            </Col>
          </Form.Row>
        </Form>
      </div>

      <div
        className='w-100 h-100 d-flex flex-wrap position-fixed'
        style={{
          overflow: 'auto',
          marginTop: '5rem',
        }}
      >
        {commerces.map((commerce, index) => (
          <Col onClick={goToProducts} key={index} xs='12' xl='6' className='my-2'>
            <CardCommerce commerce={commerce} />
          </Col>
        ))}
      </div>
    </Fragment>
  );
};

export default withRouter(Catalogue);
