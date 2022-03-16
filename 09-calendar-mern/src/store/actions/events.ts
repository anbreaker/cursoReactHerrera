import { datesEvents } from '../../helpers/datesEvent';
import { fetchWithToken } from '../../helpers/fetch';
import { types } from '../../types/types';

export const eventStartAddnew = (event: any) => {
  return async (dispatch: any, getState: any) => {
    const { uid, name } = getState().auth;
    try {
      const response = await fetchWithToken('events', event, 'POST');
      const body = await response.json();

      if (body.ok) {
        event.id = body.eventSave.id;
        event.user = {
          _id: uid,
          name,
        };

        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventAddNew = (event: any) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event: any) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventClearActive = () => ({
  type: types.eventClearActiveEvent,
});

export const eventUpdated = (event: any) => ({
  type: types.eventUpdated,
  payload: event,
});

export const eventDeleted = () => ({
  type: types.eventDeleted,
});

export const eventStartLoading = (event: any) => {
  return async (dispatch: any) => {
    const response = await fetchWithToken('events');
    const body = await response.json();

    const events = datesEvents(body.events);

    dispatch(eventLoaded(events));
  };
};

const eventLoaded = (events: any) => ({
  type: types.eventLoaded,
  payload: events,
});
