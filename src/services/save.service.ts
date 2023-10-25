export enum SoundUsageStatus {
  Used = 'used',
  NotUsed = 'not-used',
  NoData = 'no-data',
}

export const markSoundAsUsed = (internalIndex: number) => {
  localStorage.setItem(internalIndex.toString(), SoundUsageStatus.Used);
}

export const getSoundUsageStatus = (internalIndex: number) => {
  return localStorage.getItem(internalIndex.toString()) || SoundUsageStatus.NoData;
}