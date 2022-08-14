import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { saveSoundAsUsed } from "../../utils/save-utils";
import { getSoundByPublicIndex, isSoundByIndexAccessable, PUBLIC_SOUND_NAME_OFFSET, soundAccessDate } from "../../utils/sound-utils";
import './sound.css';

export const Sound: React.FC = () => {
  const { publicSoundIndex: publicSoundIndexParam } = useParams();

  const publicSoundIndex = Number(publicSoundIndexParam);

  const [ soundSrc, setSoundSrc ] = useState<string | null>(null);
  const [ pending, setPending ] = useState(true);
  
  useEffect(() => {
    if (isNaN(publicSoundIndex)) {
      return;
    }

    getSoundByPublicIndex(publicSoundIndex)
      .then((publicSoundSrc) => setSoundSrc(publicSoundSrc ?? null))
      .finally(() => setPending(false));
  }, []);
  
  if (isNaN(publicSoundIndex)) {
    return (
      <div id='sound' className="page">
        <h1>Invalid url</h1>
      </div>
    )
  }

  if (pending) {
    return (
      <div id='sound' className="page">
        <h1>Pending</h1>
      </div>
    )
  }

  if (!soundSrc) {
    return (
      <div id='sound' className="page">
        <h1>No sound found for the day {publicSoundIndex}</h1>
      </div>
    )
  }

  const relativeIndex = publicSoundIndex - PUBLIC_SOUND_NAME_OFFSET;
  const soundIsAccessable = isSoundByIndexAccessable(relativeIndex);

  if (soundIsAccessable) {
    saveSoundAsUsed(relativeIndex);
  }
  
  return (
    <div id='sound' className="page">
      <h1>Day {publicSoundIndex}</h1>
      <Link to='/sounds' className="catalog-link">To Catalog</Link>
      {soundIsAccessable ? (
        <audio autoPlay controls>
          <source src={soundSrc} />
        </audio>
      ) : (
        <h2>Accessable at {soundAccessDate(relativeIndex).toLocaleDateString()}</h2>
      )}
    </div>
  )
}