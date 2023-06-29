import React from 'react'

const InfoCard = ({ characterName, characterHeight, characterBirthYear, characterEyeColour }) => {
    const [characterInfo, setCharacterInfo] = useState(0);
    return (
        <section className='infocard'>
            <h3 className='infocard__name'>{characterName}</h3>
            <p className='infocard__height'><span className='infocard-emphasis'>Height: </span> {characterHeight ? characterHeight + 'cm' : 'Unknown'}</p>
            <p className='infocard__birthyear'><span className='infocard-emphasis'>Birth Year: </span> {characterBirthYear ? characterBirthYear : 'Unknown'}</p>
            <p className='infocard__eyecolor'><span className='infocard-emphasis'>Eye Colour: </span>{characterEyeColour ? characterEyeColour : 'Unknown'}</p>
        </section>
    )
}

export default InfoCard