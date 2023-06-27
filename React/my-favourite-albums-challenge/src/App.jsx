import { useState } from 'react'

import './App.css'
import { Card } from './Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card albumTitle='Smile' albumArtist='Eve' albumRating={4} albumCover="../src/assets/album_covers/Smile_-_cover.png" />
    </>

  )
}

export default App
