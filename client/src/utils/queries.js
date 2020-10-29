import gql from 'graphql-tag';

export const QUERY_VIBES = gql`
	{
		vibes {
			_id
			name
		}
	}
`;

export const QUERY_CREATORS = gql`
{
  creators {
    _id
    username
    email
    stageName
    imgUrl
    location
    bio
    vibes {
      _id
      name
    }
    songs {
      _id
      title
      songUrl
    }
  }
}
`;
