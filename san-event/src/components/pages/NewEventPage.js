import React from "react";
import { Segment } from "semantic-ui-react";
import EventForm from "../forms/EventForm";

class NewEventPage extends React.Component {
  state = {
    event: null
  };

  addEvent = () => console.log("hi");

  render() {
    return (
      <Segment>
        <h1>Add new Event</h1>
        
        <EventForm submit={this.addEvent} />
        
      </Segment>
    );
  }
}

export default NewEventPage;