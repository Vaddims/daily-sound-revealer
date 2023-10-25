import { SoundUsageStatus, getSoundUsageStatus } from "./save.service";
import rawConfig from '../config.json';

interface Config {
  readonly startDate: `${string}/${string}/${string}`;
  readonly soundIndexOffset: number;
}

const config = rawConfig as Config;

const resolvedConfigStartDates = config.startDate.split('/').map(Number);

export const startDate = new Date(resolvedConfigStartDates[2], resolvedConfigStartDates[1] - 1, resolvedConfigStartDates[0]);
export const publicSoundIndexOffset = config.soundIndexOffset;

const SECOND_BIAS = 1;
const DAY_IN_MS = 24 * 60 * (60 + SECOND_BIAS) * 1000;

const soundContext = require.context('../../assets/sounds', false, /\.*$/, 'sync');
export const soundSources: string[] = soundContext.keys().map(soundContext) as string[];

soundSources.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)?.[0] ?? '0');
  const numB = parseInt(b.match(/\d+/)?.[0] ?? '0');
  return numA - numB;
});

export const getInternalSoundIndex = (publicIndex: number) => {
  return publicIndex - publicSoundIndexOffset;
}

export const getPublicSoundIndex = (internalIndex: number) => {
  return internalIndex + publicSoundIndexOffset;
}

export const getSoundSourceByPublicIndex = (publicIndex: number): string | null  => {
  return soundSources[getInternalSoundIndex(publicIndex)] ?? null;
}

export const soundAccessDate = (internalIndex: number) => {
  return new Date(startDate.getTime() + internalIndex * DAY_IN_MS);
}

export const localeFormattedSoundAccessDate = (internalIndex: number) => {
  const date = soundAccessDate(internalIndex);
  return `${date.getDate()}/${date.getMonth() + 1}`;
}

export const isSoundAccessible = (internalIndex: number) => {
  return Date.now() >= soundAccessDate(internalIndex).getTime();
}

export const soundAlreadyUsed = (internalIndex: number) => {
  return getSoundUsageStatus(internalIndex) === SoundUsageStatus.Used;
}