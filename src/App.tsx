import React, { useEffect } from 'react'
import { API } from './api/api'
import { useQuery } from 'react-query'

const App = () => {
  const { isLoading, data } = useQuery('images', API.getRandomImages, {
    retry: 0,
  })

  useEffect(() => {
    console.log(data)
    console.log(process.env.UNSPLASH_API_KEY)
  }, [data])

  return (
    <main className="App">
      {isLoading && (
        <>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
          <div>로딩</div>
        </>
      )}
    </main>
  )
}

export default App
