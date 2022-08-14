import { Link } from "react-router-dom";
import { soundByIndexStatus, SoundUsedStatus } from "../utils/save-utils";
import { PUBLIC_SOUND_NAME_OFFSET, soundAccessDate } from "../utils/sound-utils";
import './link-card.css';

interface LinkCardProps {
  soundIndex: number;
  disabled?: boolean;
}

export const LinkCard: React.FC<LinkCardProps> = (props) => {
  const { soundIndex, disabled = false } = props;

  const publicSoundindex = soundIndex + PUBLIC_SOUND_NAME_OFFSET;

  return (
    <Link className="link-card" to={`/sounds/${publicSoundindex}`} data-disabled={disabled}>
      <h1 className="sound-access-day">Day {publicSoundindex}</h1>
      <h4>
        {disabled ? 
          soundAccessDate(soundIndex).toLocaleDateString() : 
          soundByIndexStatus(soundIndex) === SoundUsedStatus.Used ?
            <i className="fa-solid fa-arrow-up-right-from-square"></i> :
            'New!'
        }
      </h4>
    </Link>
  )
}