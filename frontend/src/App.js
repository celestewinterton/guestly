import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SeatingConfig from "./components/SeatingConfig"
import MainContent from "./components/MainContent"
import SplashPage from "./components/SplashPage";
import EventForm from "./components/EventForm";
import EventEditForm from "./components/EventEditForm";
import EventDetail from "./components/EventDetail";
import CalendarPage from "./components/Calendar";
import Search from "./components/Search";
import RSVPEditForm from "./components/RSVPEditFrom";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className='page-content'>
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <SplashPage isLoaded={isLoaded} />
            </Route>
            <Route path="/events/new">
              <EventForm />
            </Route>
            <Route path="/events/:eventId/edit">
              <EventEditForm />
            </Route>
            <Route path="/events/:eventId">
              <EventDetail />
            </Route>
            <Route path="/events">
              <MainContent />
            </Route>
            <Route path="/rsvps/:rsvpId/edit">
              <RSVPEditForm />
            </Route>
            <Route path="/rsvps/:rsvp">
              <EventDetail />
            </Route>
            {/*
            <Route path="/rsvps">
              <MainContent isLoaded={isLoaded} />
            </Route>
            <Route path="/seating-configuration">
              <SeatingConfig />
            </Route>
            */}
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route>
              <div className="text-center">
                <h2>Page Not Found</h2>
                <div>Please log in to start planning an event or to RSVP!</div>
              </div>
            </Route>
          </Switch>
        )}
      </div>
    </>
  );
}

export default App;
