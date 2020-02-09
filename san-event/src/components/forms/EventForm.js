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
    },
    teamOneParticipants: [],
    teamTwoParticipants: [],
    teamOneParticipantOne: '',
    teamOneParticipantTwo: '',
    teamOneParticipantThree: '',
    teamOneParticipantFour: '',
    teamOneParticipantFive: '',
    teamOneParticipantSix: '',
    teamOneParticipantSeven: '',
    teamOneParticipantEight: '',
    teamOneParticipantNine: '',
    teamOneParticipantTen: '',

    teamTwoParticipantOne: '',
    teamTwoParticipantTwo: '',
    teamTwoParticipantThree: '',
    teamTwoParticipantFour: '',
    teamTwoParticipantFive: '',
    teamTwoParticipantSix: '',
    teamTwoParticipantSeven: '',
    teamTwoParticipantEight: '',
    teamTwoParticipantNine: '',
    teamTwoParticipantTen: '',
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
    console.log("add participant clicked");
    //add text box for user input
    this.setState({teamOneparticipants: this.state.teamOneParticipants.concat("test1")});
    console.log(this.state);
  }

//this.setState({  arr: this.state.arr.concat('new value')})

  addParticipantTeamTwo(){
    this.setState({teamTwoparticipants: [...this.setState.participants, ""]});
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
                <input
                id="teamOneOne"
                    name="teamOneOne"
                    placeholder="ParticipantOne Title"
                    value={data.teamOneParticipantOne}
                    onChange={this.onChange}
                    />
                <input
                id="teamOneTwo"
                    name="teamOneTwo"
                    placeholder="ParticipantTwo Title"
                    value={data.teamOneParticipantTwo}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneThree"
                    name="teamOneThree"
                    placeholder="ParticipantThree Title"
                    value={data.teamOneParticipantThree}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneFour"
                    name="teamOneFour"
                    placeholder="ParticipantFour Title"
                    value={data.teamOneParticipantFour}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneFive"
                    name="teamOneFive"
                    placeholder="ParticipantFive Title"
                    value={data.teamOneParticipantFive}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneSix"
                    name="teamOneSix"
                    placeholder="ParticipantSix Title"
                    value={data.teamOneParticipantSix}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneSeven"
                    name="teamOneSeven"
                    placeholder="ParticipantSeven Title"
                    value={data.teamOneParticipantSeven}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneEight"
                    name="teamOneEight"
                    placeholder="ParticipantEight Title"
                    value={data.teamOneParticipantEight}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneNine"
                    name="teamOneNine"
                    placeholder="ParticipantNine Title"
                    value={data.teamOneParticipantNine}
                    onChange={this.onChange}
                    />
                    <input
                id="teamOneTen"
                    name="teamOneTen"
                    placeholder="ParticipantTen Title"
                    value={data.teamOneParticipantTen}
                    onChange={this.onChange}
                    />
                <button onClick={() => this.addParticipantTeamOne()}>Add Participant</button>
                
              </Grid.Column>

              <Grid.Column>
              <h1>Team Two</h1>
              <input
                id="teamTwoOne"
                    name="teamTwoOne"
                    placeholder="ParticipantOne Title"
                    value={data.teamTwoParticipantOne}
                    onChange={this.onChange}
                    />
                <input
                id="teamTwoTwo"
                    name="teamTwoTwo"
                    placeholder="ParticipantTwo Title"
                    value={data.teamTwoParticipantTwo}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoThree"
                    name="teamTwoThree"
                    placeholder="ParticipantThree Title"
                    value={data.teamTwoParticipantThree}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoFour"
                    name="teamTwoFour"
                    placeholder="ParticipantFour Title"
                    value={data.teamTwoParticipantFour}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoFive"
                    name="teamTwoFive"
                    placeholder="ParticipantFive Title"
                    value={data.teamTwoParticipantFive}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoSix"
                    name="teamTwoSix"
                    placeholder="ParticipantSix Title"
                    value={data.teamTwoParticipantSix}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoSeven"
                    name="teamTwoSeven"
                    placeholder="ParticipantSeven Title"
                    value={data.teamTwoParticipantSeven}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoEight"
                    name="teamTwoEight"
                    placeholder="ParticipantEight Title"
                    value={data.teamTwoParticipantEight}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoNine"
                    name="teamTwoNine"
                    placeholder="ParticipantNine Title"
                    value={data.teamTwoParticipantNine}
                    onChange={this.onChange}
                    />
                    <input
                id="teamTwoTen"
                    name="teamTwoTen"
                    placeholder="ParticipantTen Title"
                    value={data.teamOneParticipantTen}
                    onChange={this.onChange}
                    />
              <button onClick={() => this.addParticipantTeamTwo()}>Add Participant</button>
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