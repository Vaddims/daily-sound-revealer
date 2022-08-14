import { useEffect, useState } from "react"
import { LinkCard } from "../../components/LinkCard";
import { getSoundSrcs, isSoundByIndexAccessable } from "../../utils/sound-utils";
import './catalog.css';


export const Catalog = () => {
  const [ soundSrcs, setSoundSrcs ] = useState<string[]>([]);
  const [ pending, setPending ] = useState(true);
  
  useEffect(() => {
    getSoundSrcs()
      .then((soundSrcs) => setSoundSrcs(soundSrcs))
      .finally(() => setPending(false));
  }, []);

  if (pending) {
    return (
      <div id='catalog' className="page">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div id='catalog' className='page'>
      {soundSrcs.map((soundSrc, index) => (
        <LinkCard soundIndex={index} key={soundSrc} disabled={!isSoundByIndexAccessable(index)} />
      ))}
    </div>
  )
}