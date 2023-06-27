import { useState } from 'react'

import './App.css'
import { Card } from './Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card albumTitle='Smile' albumArtist='Eve' albumRating={4} albumCover="../src/assets/album_covers/Smile_-_cover.png" />
      <Card albumTitle='LOVE' albumArtist='PinocchioP' albumRating={5} albumCover="../src/assets/album_covers/love_cover.jpg" />
      <Card albumTitle='Operation Mindcrime' albumArtist='Queensryche' albumRating={4} albumCover="../src/assets/album_covers/Queensryche_-_Operation_Mindcrime_cover.jpg" />
    </>

  )
}

export default App
