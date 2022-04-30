import React from 'react'

export default function StripImgComp() {
  let imgCss = {
    minHeight: "300px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
  }

  return (
    <div style={imgCss} className='container-fluid'>

    </div>
  )
}
