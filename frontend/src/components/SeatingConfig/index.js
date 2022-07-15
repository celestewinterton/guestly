import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import * as tableActions from '../../store/tables';
import { useHistory } from 'react-router';
import './SeatingConfig.css'
import TableFormModal from '../TableFormModal';

function SeatingConfig({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvps);
  const tables = useSelector(state => state.tables);
  const history = useHistory();
  const {eventId} = useParams();
  // console.log("tables", tables)

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
    dispatch(tableActions.showTables(tables, eventId))
  }, [dispatch])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(eventActions.cancelCurrentEvent(eventId));
    history.push("/events")
  }

  return (
    <div className='center'>
      <div className='large-card-seating'>
        <div className='large-card-main flex-column'>
          <div className='seating-title-text'>
            <h2 className='seating-title-h2'>{event?.name} Seating Chart (EXAMPLE)</h2>
            <TableFormModal />
          </div>
          <div className='seating-area'>
            {Object.values(tables)?.map((table, i) =>
              <div className='table-container'>
                <h5>Table {i + 1}</h5>
                <h6>{table?.tableShape}, seats {table?.guestsPerTable}</h6>
                <div className='muted'>Clara Oswald</div>
                <div className='muted'>Danny Pink</div>
                <div className='muted'>Rose Tyler</div>
                <div className='muted'>Jackie Tyler</div>
                <div className='muted'>Mickey Smith</div>
                <div className='muted'>Martha Jones</div>
                <div className='muted'>Amelia Pond</div>
                <div className='muted'>Rory Williams</div>
              </div>
            )}
          </div>
          <div className='muted'></div>
        </div>
        <div className='large-card-table-foot'>
          <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
        </div>
      </div>
    </div>
  )
}

export default SeatingConfig
