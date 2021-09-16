import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const SearchForm2 = ({ handleOnSubmit, handleOnReset, handleOnChange }) => {
  return (
    <div>
      <Form className="m-5" onSubmit={handleOnSubmit} onReset={handleOnReset}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="search movie here..."
              onChange={handleOnChange}
            />
          </Col>

          <Col xs="auto">
            <Button variant="dark" type="submit" className="mx-1 btn btn-sm">
              Search
            </Button>
            <Button
              variant="secondary"
              type="reset"
              className="mx-1 btn btn-sm"
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm2;
