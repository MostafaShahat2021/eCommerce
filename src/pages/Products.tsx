import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  actGetProductsByCategoryPrefix,
  productsCleanup,
} from '@store/products/productsSlice';
import { Container, Row, Col } from 'react-bootstrap';
import { Product } from '@components/eCommerce';
import { Laoding } from '@components/feedback'

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCategoryPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanup());
    };
  }, [dispatch, params]);

  const productsList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6}
          md={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <Product {...record} />
        </Col>
      ))
    ) : (
      <div>
        <p>
          Opps!
          <br />
          There are no categories to show
        </p>
      </div>
    );
  return (
    <Container>
      <Laoding status ={loading} error={error}>
        <Row>{productsList}</Row>
      </Laoding>
    </Container>
  );
};

export default Products;
