export type TBands = {
  id: string;
  name: string;
  image: string;
  numPlays: number;
  albums: Array<string>;
  biography: string;
  genre: string;
}

export type TAlbums = {
  band: string;
  id: string;
  image: string;
  name: string;
  releasedDate: string;
}

export type TBandDetail = {
  bandDetail: TBands;
  albums: TAlbums[];
  fallback?: any;
}
