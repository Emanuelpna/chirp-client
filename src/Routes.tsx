import { Routes as ReactRoutes, Route } from 'react-router-dom'

import App from '/@/App'

import IndexPage from '/@/pages/IndexPage'
import ChirpPage from '/@/pages/ChirpPage'

export default function Routes() {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<IndexPage />} />
        <Route path="chirp">
          <Route path=":authorId/:chirpId" element={<ChirpPage />} />
        </Route>
      </Route>
    </ReactRoutes>
  )
}
