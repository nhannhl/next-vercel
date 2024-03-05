import React from 'react'

function page({ params }: { params: {slug: string} }) {
  //dynamic-route/{slug-value} => {slug: value}
  //dynamic-route/ => 404
  return (
    <div>{params.slug}</div>
  )
}

export default page