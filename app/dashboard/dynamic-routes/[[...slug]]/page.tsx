import React from 'react'

function page({params}:{params:{ slug?: string[] }}) {
  //dynamic-route/ => {}
  //dynamic-route/{first-value} => {slug: [first-value]}
  //dynamic-route/{first-value}/{second-value} => {slug: [first-value, second-value]}
  return (
    <div>page</div>
  )
}

export default page