import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site creds
const api = new GhostContentAPI({
  url: 'http://snowdev.info',
  key: '9b2b1e99ba8ca240f53321e444',
  version: 'v3'
})

// Exposing Content
export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all'
    })
    .catch(err => console.error(err))
}

// single post query
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => console.error(err))
}