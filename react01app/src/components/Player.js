import React from 'react'
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )

  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }

  return (
    <div class="card">
      <h2 class="card-header bg-info text-white">{player.name} (#{player.number})</h2>
      <div class="card-body">
        <h3>Position: {player.position}</h3>
        <Link class="btn btn-primary btn-sm" to='/roster'>Back</Link>
      </div>
    </div>
  )
}

export default Player