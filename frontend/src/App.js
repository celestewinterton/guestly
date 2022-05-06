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
import EventGuest from "./components/EventDetail/EventGuest";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className='appGrid'>
        <div className='appNav'>
          <Navigation isLoaded={isLoaded} />
        </div>
        <div className='page-content appMain'>
          {isLoaded && (
            <Switch>
              <Route exact path="/">
                <SplashPage />
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
                <h2>Page Not Found</h2>
              </Route>
            </Switch>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
