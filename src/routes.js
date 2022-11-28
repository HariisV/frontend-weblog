import React from 'react'

const Post = React.lazy(() => import('./views/pages/post/'))

const routes = [
  { path: '/', exact: true, name: 'Post', element: Post },
  { path: '/base/placeholders', name: 'Placeholders' },
]

export default routes
