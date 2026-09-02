import React from 'react'
import Item from '../components/Item'

function Home() {
  return (
      <section>
        <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto px-8 max-w-7xl">
          <Item/>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
  )
}

export default Home