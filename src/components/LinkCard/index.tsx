import { Link } from "react-router-dom";
import { getPublicSoundIndex, localeFormattedSoundAccessDate, soundAlreadyUsed } from "../../services/sound.service";
import './LinkCard.css';

interface LinkCardProps {
  readonly internalSoundIndex: number;
  readonly disabled?: boolean;
}

interface LinkCardContentProps {
  readonly disabled: boolean;
  readonly internalSoundIndex: number;
}

export const LinkCard: React.FC<LinkCardProps> = (props) => {
  const { internalSoundIndex, disabled = false } = props;
  const publicSoundindex = getPublicSoundIndex(internalSoundIndex);

  return (
    <Link className="link-card" to={`/sounds/${publicSoundindex}`} data-disabled={disabled}>
      <h1 className="sound-access-day">{internalSoundIndex === 0 ? 'Intro' : `Day ${publicSoundindex}`}</h1>
      <LinkCardContent disabled={disabled} internalSoundIndex={internalSoundIndex} />
    </Link>
  )
}

const LinkCardContent: React.FC<LinkCardContentProps> = (props) => {
  const { disabled, internalSoundIndex } = props;

  if (disabled) {
    return (
      <span className="unlock-date">{localeFormattedSoundAccessDate(internalSoundIndex)}</span>
    );
  }

  if (soundAlreadyUsed(internalSoundIndex)) {
    return (
      <i className="fa-solid fa-arrow-up-right-from-square icon" />
    );
  }

  return (
    <span className="new">New!</span>
  );
}