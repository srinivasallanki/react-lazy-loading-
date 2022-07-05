import React, { Suspense, useState } from 'react'
const Carousel = React.lazy(() =>
  import(/*webpackPrefetch:true*/ './components/Carousel')
)

function App() {
  const [showSlide, setShowSlide] = useState(false)
  return (
    <>
      <form>
        <input type='checkbox'checked={showSlide}
          onChange={(e) => setShowSlide(e.target.checked)}
        />
        {'Show Slider '}
      </form>
      <Suspense fallback={<h1>Loading ....</h1>}>
        {showSlide ? <Carousel /> : null}
      </Suspense>
    </>
  )}
export default App
