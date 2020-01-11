import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment, Image } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class EventForm extends React.Component {
  state = {
    data: {
      eventTitle: '',
      participants: null
    },
    participants: null,
    index: 0,
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.eventTitle) errors.title = "Can't be blank";
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid stackable>
            <Grid.Row>
              <Grid.Column>
                
              </Grid.Column>

              <Grid.Column>
                
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

EventForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default EventForm;