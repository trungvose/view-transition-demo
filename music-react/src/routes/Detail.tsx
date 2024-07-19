import { useParams } from 'react-router-dom';
import { usePlaylist } from '../hooks/use-playlists';

const PlaylistDetail = () => {
  const { id } = useParams();
  const { data: playlist, isLoading } = usePlaylist(id!);

  if (!playlist || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <div className='flex gap-6 items-end'>
          <img
            src={playlist.image_url}
            alt={playlist.name}
            className='w-[300px] object-cover rounded-lg mb-4'
          />
          <div>
            <p className='uppercase'>Public Playlist</p>
            <h2 className='text-5xl font-semibold my-8'>{playlist.name}</h2>
            <p className='text-gray-600 mb-4'>{playlist.description}</p>
          </div>
        </div>
        <div className='grid gap-4'>
          {new Array(10).fill(0).map((index) => (
            <div
              key={index}
              className='bg-gray-200 h-10 rounded-lg flex items-center justify-center'
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
