import React from 'react'

function page({params}:{params: {slug: string[]}}) {
  //dynamic-route/{slug-value}/{another-value} => {slug: [first-value, second-value]}
  //dynamic-route/ => 404
  return (
    <div>{params.slug[0]}</div>
  )
}

export default page