import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddEventCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Add new event</Card.Header>
      <Link to="/events/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddEventCtA;