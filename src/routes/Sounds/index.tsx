import { LinkCard } from "../../components/LinkCard";
import { isSoundAccessible, soundSources } from "../../services/sound.service";
import './Sounds.css';

export const Sounds: React.FC = () => {
  return (
    <div id='sounds' className='route' data-has-content={soundSources.length > 0}>
      {soundSources.length > 0 ? (
        soundSources.map((soundSrc, internalIndex) => (
          <LinkCard
            internalSoundIndex={internalIndex} 
            disabled={!isSoundAccessible(internalIndex)} 
            key={soundSrc}
          />
        ))
      ) : (
        <h1 className="no-sounds-message">No sounds found</h1>
      )}
    </div>
  )
}