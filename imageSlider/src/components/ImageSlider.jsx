import React from 'react'
import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css';

const ImageSlider = ({ url, limit =5,page=1}) => {
    
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errormsg, setErrormsg] = useState(null);
    const [loading,setLoading]=useState(false)

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext()
    {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }
    async function fetchImages(geturl) {
        try {
            setLoading(true)
            const response = await fetch(`${geturl}?${page}=1&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setLoading(false)
                setImages(data)
            }
        } catch (e) {
            setLoading(false)
            setErrormsg(e.message);
        }
    }

    useEffect(() => {
        if(url!=='') fetchImages(url)
    }, [url])
    console.log(images);
    if (loading)
    {
        return <div>Loading data! plz wait</div>
    }
    if (errormsg !== null) {
        return <div>Error Occured ! ${errormsg}</div>
    }
  return (
    <div className='container'>
          <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
          {
              images && images.length ?
                  images.map((imageItem, index) =>
              (<img key={imageItem.id} alt={imageItem.download_url}
                  src={imageItem.download_url}
                  className={currentSlide===index?"current-image": "current-image hide-current-image"}
              />)):null
          }
          <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right ' />
          <span className='circle-indicators'>
              {
                  images && images.length ? images.map((_, index) =>
                      <button key={index}
                          
                          className = { currentSlide=== index ? "current-indicators":"current-indicators update-current-indicators"}
                     onClick={()=>setCurrentSlide(index)}
                      >
                          
                      </button>) : null
              }
          </span>
    </div>
  )
}

export default ImageSlider
