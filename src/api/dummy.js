import createApiInstance from 'utils/createApiInstance'

const dummyApi = createApiInstance('https://jsonplaceholder.typicode.com/')

export const searchDummy = query => dummyApi({
  method: 'get',
  url: '/posts'
})
