import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function Companies({ companies }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Companie List
          </CardTitle>
          <CardText>
            Here is the full list of Companies:
          </CardText>
          <ListGroup>
            {companies.map(company => (
              <Link to={`/companies/${company.id}`} key={company.id}>
                <ListGroupItem>{company.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Companies
