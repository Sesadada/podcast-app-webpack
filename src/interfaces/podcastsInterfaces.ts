import { AxiosResponse } from 'axios'

export interface ErrorResponse {
  message: string
  // Other properties if present in the error object
}

export type ResponseData<T> = {
  response: AxiosResponse<T> | null
  error: string
  loading: boolean
  fetchData: () => void
}

export interface GetDataProps {
  url: string
}

interface PodcastEntry {
  attributes: {
    // Define the attributes of the entry object
  }
  id: {
    label: string
    attributes: {
      // Define the attributes of the id object
    }
  }
  'im:artist': {
    label: string
    attributes: {
      // Define the attributes of the im:artist object
    }
  }
  'im:contentType': {
    attributes: {
      // Define the attributes of the im:contentType object
    }
  }
  'im:image': {
    label: string
    attributes: {
      // Define the attributes of the im:image object
    }
  }[]
  'im:name': {
    label: string
  }
  'im:price': {
    label: string
    attributes: {
      // Define the attributes of the im:price object
    }
  }
  'im:releaseDate': {
    label: string
    attributes: {
      // Define the attributes of the im:releaseDate object
    }
  }
  link: {
    attributes: {
      // Define the attributes of the link object
    }
  }
  rights: {
    label: string
  }
  summary: {
    label: string
  }
  title: {
    label: string
  }
}

export interface PodcastFeed {
  entry: PodcastEntry[]
  // Define other properties inside the feed object if needed
}

export interface PodcastResponse {
  feed: PodcastFeed
  // Define other properties of the response object if needed
}
