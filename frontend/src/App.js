import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SeatingConfig from "./components/SeatingConfig"
import MainContent from "./components/MainContent"
import SplashPage from "./components/SplashPage";
import EventForm from "./components/EventForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/events">
            <MainContent />
          </Route>
          <Route path="/events/new">
            <EventForm />
          </Route>
          {/* <Route path="/events/:eventId">
            <MainContent isLoaded={isLoaded} />
          </Route>
          <Route path="/rsvps">
            <MainContent isLoaded={isLoaded} />
          </Route>
          <Route path="/rsvps/:rsvpId">
            <MainContent isLoaded={isLoaded} />
          </Route>
          <Route path="/seating-configuration">
            <SeatingConfig />
          </Route> */}
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
