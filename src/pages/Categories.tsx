import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetCategories } from '@store/categories/categoriesSlice';
import { Container, Row, Col } from 'react-bootstrap';
import { Category } from '@components/eCommerce';
import { useEffect } from 'react';
import { Laoding } from '@components/feedback';

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const categoriesList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6}
          md={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <Category {...record} />
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
      <Laoding status={loading} error={error}>
        <Row>{categoriesList}</Row>
      </Laoding>
    </Container>
  );
};

export default Categories;
