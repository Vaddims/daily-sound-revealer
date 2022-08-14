export enum SoundUsedStatus {
  Used = 'used',
  NotUsed = 'notUsed',
  NoData = 'noData',
}

export const saveSoundAsUsed = (index: number) => {
  localStorage.setItem(index.toString(), SoundUsedStatus.Used);
}

export const soundByIndexStatus = (index: number) => {
  return localStorage.getItem(index.toString()) || SoundUsedStatus.NoData;
}