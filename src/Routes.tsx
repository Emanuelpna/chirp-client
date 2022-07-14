import { Routes as ReactRoutes, Route } from 'react-router-dom'

import App from '/@/App'

import IndexPage from '/@/pages/IndexPage'
import ChirpPage from '/@/pages/ChirpPage'

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<IndexPage />} />
        <Route path="chirp/:chirpId" element={<ChirpPage />}>
          {/* <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Route>
    </ReactRoutes>
  )
}
