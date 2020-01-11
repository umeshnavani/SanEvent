import { createSelector } from "reselect";

export default function events(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// SELECTORS

export const eventsSelector = state => state.events;

export const allEventsSelector = createSelector(eventsSelector, eventsHash =>
  Object.values(eventsHash)
);