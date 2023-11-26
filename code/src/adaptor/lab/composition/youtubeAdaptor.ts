import { MediaProvider } from './spotifyAPI';
import { YoutubeAPI } from './youtubeAPI';

export class YoutubeAdaptor implements MediaProvider {
  private provider: YoutubeAPI;
  constructor(youtube: YoutubeAPI) {
    this.provider = youtube;
  }

  connect(): string {
    if (!this.provider) {
      return '';
    }
    return 'Connected to ' + this.provider.connect();
  }

  getPlaylist(): string[] {
    if (!this.provider) {
      return [];
    }
    return this.provider.getMusicLibrary().map((song) => {
      return song.name;
    });
  }
}
