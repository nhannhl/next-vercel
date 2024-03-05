import React from 'react'

function page({params}:{params: {slug: string[]}}) {
  console.log(params);
  return (
    <div>{params.slug[0]}</div>
  )
}

export default page