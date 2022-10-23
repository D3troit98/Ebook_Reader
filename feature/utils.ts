export const userQuery = (userId:string) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}

export const searchQuery = (searchTerm:string) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || genre match '${searchTerm}*' || author match '${searchTerm}*']{
        cover{
          asset->{
            url
          }
        },
            _id,
            title,
            author,
            description,
            rating,
            base64Book,
            pages,
            genre,
            releaseDate,
          }`;
  return query;
}


export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    title,
    author,
    description,
    rating,
    postedBy->{
      _id,
      userName,
      image
    },
        read[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;