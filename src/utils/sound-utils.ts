export const SOUND_QUANTITY = 11;
export const PUBLIC_SOUND_NAME_OFFSET = 1;
export const START_DAY = new Date(2022, 7, 16);
export const getSoundFileName = (index: number) => `Day ${index}.aac`;

const DAY_MULTIPLIER = 24 * 60 * 60 * 1000;

const soundSrcsPromises = [];
for (let i = 0; i < SOUND_QUANTITY; i++) {
  const publicSoundIndex = i + PUBLIC_SOUND_NAME_OFFSET;
  const importResolution = import(`/assets/sounds/${getSoundFileName(publicSoundIndex)}`);
  soundSrcsPromises.push(importResolution);
}

const soundSrcsPromise = Promise.all(soundSrcsPromises);
export const getSoundSrcs = async () => {
  const soundsSrcModules = await soundSrcsPromise;
  return soundsSrcModules.map(soundSrcModule => soundSrcModule.default);
}

export const getSoundByPublicIndex = async (index: number): Promise<string | undefined>  => {
  const soundSrcs = await getSoundSrcs();
  return soundSrcs[index - PUBLIC_SOUND_NAME_OFFSET];
}

export const soundAccessDate = (index: number) => {
  return new Date(START_DAY.getTime() + index * DAY_MULTIPLIER);
}

export const isSoundByIndexAccessable = (index: number) => {
  return Date.now() >= soundAccessDate(index).getTime();
}