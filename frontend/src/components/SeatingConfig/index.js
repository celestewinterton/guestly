import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import * as tableActions from '../../store/tables';
import { useHistory } from 'react-router';

function SeatingConfig({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvps);
  const tables = useSelector(state => state.tables);
  const history = useHistory();
  const {eventId} = useParams();
  console.log(tables)

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
    dispatch(tableActions.showTables(tables))
  }, [dispatch])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(eventActions.cancelCurrentEvent(eventId));
    history.push("/events")
  }

  return (
    <div className='center'>
      <div className='large-card'>
        <div className='large-card-main'>
          <h2>{event?.name} Seating Chart</h2>
            <div className='seating-area'>
              {/* {Object.values(tables)?.map(table => {
                <div>Table {table.id}</div>

              })} */}



            </div>
        </div>
        <div className='large-card-table-foot'>
          <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
        </div>
      </div>
    </div>
  )
}

export default SeatingConfig
