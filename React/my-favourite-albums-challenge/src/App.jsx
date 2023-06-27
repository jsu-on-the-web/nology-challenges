import { useState } from 'react'

import './App.scss'
import { Card } from './Card/Card'
import { Header } from './Header/Header'

function App() {
  const [count, setCount] = useState(0)
  const flexWrap = {
    display: 'flex',
    flexWrap: true,
    justifyContent: 'center',
  };

  return (
    <>
      <Header />
      <section className='card-gallery' style={flexWrap}>
        <Card albumTitle='Smile' albumArtist='Eve' albumRating={4} albumCover="../src/assets/album_covers/Smile_-_cover.png" />
        <Card albumTitle='LOVE' albumArtist='PinocchioP' albumRating={5} albumCover="../src/assets/album_covers/love_cover.jpg" />
        <Card albumTitle='Operation Mindcrime' albumArtist='Queensryche' albumRating={4} albumCover="../src/assets/album_covers/Queensryche_-_Operation_Mindcrime_cover.jpg" />
      </section>
    </>

  )
}

export default App
