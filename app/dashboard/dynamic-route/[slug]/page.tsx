import React from 'react'

function page({ params }: { params: {slug: string} }) {
  console.log(params);
  return (
    <div>{params.slug}</div>
  )
}

export default page