import {useState} from 'react'
import './hero.css'
import hero1 from '../../assets/images/image-product-1.jpg'
import hero2 from '../../assets/images/image-product-2.jpg'
import hero3 from '../../assets/images/image-product-3.jpg'
import hero4 from '../../assets/images/image-product-4.jpg'
import ImageModal from './ImageModal'




const Image = () => {
  const [currentImage, setCurrentImage] = useState(hero1)
  const [isModalOpen, setIsModalOpen] = useState(false);


const handleImage =(e:any)=>{
  setCurrentImage(e.target.src)
}


const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};


  return (
  <>
     <div className='image_box'>
        <img src={currentImage} alt="hero-image" onClick={showModal} />
        <div className='thumbnail-box'>
           <div className={`thumb_image ${currentImage.includes(hero1) &&"thumb_active"}`} ><img src={hero1} id={hero1} onClick={handleImage} className={`${currentImage.includes(hero1) && "active"}`} alt='thumbnail-image'/></div>
           <div className={`thumb_image ${currentImage.includes(hero2) &&"thumb_active"}`} > 
            <img src={hero2} id={hero2}onClick={handleImage}  className={`${currentImage.includes(hero2) && "active"}`} alt='thumbnail-image'/>
            </div>
            <div className={`thumb_image ${currentImage.includes(hero3) &&"thumb_active"}`} > 
            <img src={hero3} id={hero3} onClick={handleImage}  className={`${currentImage.includes(hero3) && "active"}`} alt='thumbnail-image'/>
            </div>
            <div className={`thumb_image ${currentImage.includes(hero4) &&"thumb_active"}`} > 
            <img src={hero4} id={hero4} onClick={handleImage} className={`${currentImage.includes(hero4) && "active"}`} alt='thumbnail-image'/>
            </div>
            </div>
            </div>
            <ImageModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
            </>
  )
}

export default Image