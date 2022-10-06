import React from 'react'

const Test = () => {
  return (
    <div>
      <script src="./js/scrollreveal.min.js"></script>
      <script>
          window.sr= new scrollReveal();
          sr.reveal('.demo');
      </script>
      <script>
        window.sr= new scrollReveal();
        sr.reveal('.demo');
      </script>
      <div className="test">これはテストです。............................................</div>
    </div>
  )
}

export default Test