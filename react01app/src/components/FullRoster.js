import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <div class="row">
      <div class="col">
        <h3>Full Roster</h3>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col">
        <div class="list-group">
          {
            PlayerAPI.all().map(p => (
              <Link class="list-group-item list-group-item-action" to={`/roster/${p.number}`}>{p.name}</Link>
            ))
          }
        </div>
      </div>
      <div class="col">
          &nbsp;
      </div>
    </div>
  </div>
)

export default FullRoster