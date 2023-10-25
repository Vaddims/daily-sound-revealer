import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { markSoundAsUsed } from "../../services/save.service";
import { getInternalSoundIndex, getSoundSourceByPublicIndex, isSoundAccessible, localeFormattedSoundAccessDate } from "../../services/sound.service";
import './Sound.css';

export const Sound: React.FC = () => {
  return (
    <div id='sound' className="route">
      <SoundContent />
    </div>
  )
}

const SoundContent: React.FC = () => {
  const { publicSoundIndex } = useParams();

  const parsedPublicSoundIndex = Number(publicSoundIndex);
  const soundSource = getSoundSourceByPublicIndex(parsedPublicSoundIndex);

  if (isNaN(parsedPublicSoundIndex)) {
    return (
      <h1>Invalid url</h1>
    )
  }

  if (!soundSource) {
    return (
      <h1>This sound was not found</h1>
    )
  }

  const internalSoundindex = getInternalSoundIndex(parsedPublicSoundIndex);
  const soundIsAccessible = isSoundAccessible(internalSoundindex);
  const routeTitle = parsedPublicSoundIndex === 0 ? 'Intro' : `Day ${parsedPublicSoundIndex}`;

  if (soundIsAccessible) {
    markSoundAsUsed(internalSoundindex);
  }
  return (
    <Fragment>
      <h1>{routeTitle}</h1>
      <Link to='/sounds' className="catalog-link">Back to all sounds</Link>
      {soundIsAccessible ? (
        <audio autoPlay controls>
          <source src={soundSource} />
        </audio>
      ) : (
        <h2>Accessible at {localeFormattedSoundAccessDate(internalSoundindex)}</h2>
      )}
    </Fragment>
  )
}