import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment, Image } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class EventForm extends React.Component {
  state = {
    data: {
      eventTitle: '',
      eventDate: '',
      eventTime: '',
      teamOneParticipants: [],
      teamTwoParticipants: []
    },
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
    if (!data.eventTitle) errors.eventTitle = "Can't be blank";
    return errors;
  };

  addParticipantTeamOne(){
    this.setState({teamOneparticipants: [...this.setState.participants, ""]})
  }

  addParticipantTeamTwo(){
    this.setState({teamTwoparticipants: [...this.setState.participants, ""]})
  }
  render() {
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid stackable>
          <Grid.Row>
          <Form.Field error={!!errors.eventTitle}>
                    <label htmlFor="email">Event Title</label>
                    <input 
                    id="eventTitle"
                    name="eventTitle"
                    placeholder="Event Title"
                    value={data.eventTitle}
                    onChange={this.onChange} />
                    {errors.eventTitle && <InlineError text={errors.eventTitle} />}
                </Form.Field>
          </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h1>Team One</h1>
                <button>Add Participant</button>
                )
              </Grid.Column>

              <Grid.Column>
              <h1>Team Two</h1>
              <button>Add Participant</button>
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