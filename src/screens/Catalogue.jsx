import React, { Fragment } from 'react';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import COLORS from '../assets/styles/Colors';
import CardCommerce from '../components/CardCommerce';
import IconSearch from '../components/Icons/IconSearch';
import ClientRepository from '../firebase/repositories/ClientRepository';
import Loader from './Loader';

const Catalogue = (props) => {
  const { register, handleSubmit } = useForm();
  const [allCommerces, setAllCommerces] = React.useState([]);
  const [clientRepository] = React.useState(new ClientRepository());
  const [commerces, setCommerces] = React.useState([]);
  const [finishLoad, setFinishLoad] = React.useState(false);

  const goToProducts = (id) => {
    props.history.push(`/catalogue/${id}`);
  };

  const search = ({ value }) => {
    if (!value) {
      setCommerces([...allCommerces]);
    } else {
      const list = allCommerces.filter((item) =>
        item.data.name.toLowerCase().includes(value.toLowerCase())
      );
      setCommerces([...list]);
    }
  };

  React.useEffect(() => {
    const loadData = async () => {
      let resp = await clientRepository.findAll();
      resp = resp.filter((item) => item.data.enabled);
      setAllCommerces([...resp]);
      setCommerces([...resp]);
      setFinishLoad(true);
    };
    loadData();
  }, [clientRepository]);

  if (!finishLoad) {
    return <Loader />;
  } else if (clientRepository.length === 0) {
    return <></>;
  } else {
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
                    placeholder='Buscar comercio por nombre'
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
          {commerces.map((commerce) => (
            <Col
              onClick={() => {
                goToProducts(commerce.id);
              }}
              key={commerce.id}
              xs='12'
              xl='6'
              className='my-2'
            >
              <CardCommerce commerce={commerce} />
            </Col>
          ))}
        </div>
      </Fragment>
    );
  }
};

export default withRouter(Catalogue);
