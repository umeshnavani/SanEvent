import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const DashboardPage = ({ isConfirmed }) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}

  <Link to="/createEvent">Create Event</Link></div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
