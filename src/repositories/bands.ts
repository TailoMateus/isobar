import api from '@services/api'
import { TAlbums } from '../types'

export const getBandsList = async () => {
  try {
    const response = await api.get('/bands');
    return response.data || []
  } catch (error) {
    return error || []
  }
};

export const getBandDetails = async (id: string) => {
  try {
    const response = await api.get(`/bands/${id}`);
    return response.data || []
  } catch (error) {
    return error || []
  }
};

export const getAlbums = async (albums: Array<string>) => {
  try {
    const response = await api.get('/albums');
    const tracks = response?.data?.filter(
      (album: TAlbums) => albums.includes(album.id)
    )

    return tracks || []
  } catch (error) {
    return error || []
  }
};

