export interface EpisodeType {
  content: string;
  contentSnippet: string;
  creator: string;
  enclosure: {
    length: string;
    type: string;
    url: string;
  };
  guid: string;
  isoDate: string;
  itunes: {
    duration: string;
    explicit: string;
    image: string;
    summary: string;
  };
  link: string;
  pubDate: string;
  title: string;
}

export interface PlaylistType {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    channelTitle: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
    title: string;
    localized: {
      description: string;
      title: string;
    };
  };
  contentDetails: { itemCount: number };
}

export interface VideoType {
  snippet: {
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    resourceId: { kind: string; videoId: string };
    thumbnails: {
      default: {
        url: string;
      };
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
    };
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
  };
}
