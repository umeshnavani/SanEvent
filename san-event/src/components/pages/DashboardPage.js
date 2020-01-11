import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allEventsSelector } from "../../reducers/events";
import AddEventCtA from "../ctas/AddEventCtA";

const DashboardPage = ({ isConfirmed, events }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {events.length === 0 && <AddEventCtA />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      eventTitle: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    events: allEventsSelector(state)
  };
}

export default connect(mapStateToProps)(DashboardPage);
