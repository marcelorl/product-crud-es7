import request from 'request';

function fetchProducts(requestBody) {
  return new Promise(function(resolve, reject) {
    request.post(
      {
        url: `${API}/un-authenticated/search-messages`,
        body: JSON.stringify(requestBody),
        headers: {
          'X-Community-Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      function(error, response, body) {
        if (error) return reject(error)
        resolve(body)
      }
    )
  })
}

async function search(ctx) {
  try {
    const requestBody = ctx.request.body
    return ctx.body = await fetchProducts(requestBody)
  } catch(err) {
    throw new Error(err)
  }
}

export default {
  search
}
