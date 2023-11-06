import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import myImage1 from '/images/image-11.jpeg';
import myImage2 from '/images/image-3.webp';
import myImage3 from '/images/image-2.webp';
import myImage4 from '/images/image-7.webp';
import myImage5 from '/images/image-5.webp';
import myImage6 from '/images/image-9.webp';
import myImage7 from '/images/image-10.jpeg';
import myImage8 from '/images/image-4.webp';
import myImage9 from '/images/image-8.webp';
import myImage10 from '/images/image-1.webp';
import myImage11 from '/images/image-3.webp';

function App() {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState([
    myImage1, myImage2, myImage3, myImage4,
    myImage5, myImage6, myImage7, myImage8,
    myImage9, myImage10, myImage11
  ]);

  const [selectedImages, setSelectedImages] = useState([]);




  const toggleImageSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const deleteSelectedImages = () => {
    if (selectedImages.length > 0) {
      const updatedImages = images.filter((_, index) => !selectedImages.includes(index));
      setImages(updatedImages);
      setSelectedImages([]);
    }
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('imageIndex', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


  // ... (other functions)

  const getCardClassName = (index) => {
    const isSelected = selectedImages.includes(index);
    return isSelected
      ? 'hovered-image selected image-container' // Apply the selected and image-container classes for selected images
      : 'hovered-image image-container';
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData('imageIndex');
    const updatedImages = [...images];
    const tempImage = updatedImages[index];
    updatedImages[index] = updatedImages[sourceIndex];
    updatedImages[sourceIndex] = tempImage;
    setImages(updatedImages);
  };


  // ... (other functions)

  return (
    <div className="full">
      <h5 className='text'>Gallery</h5>
      <hr className="hr" />

      <button onClick={deleteSelectedImages} className="btndel btn btn-danger">
        Delete
      </button>

      <div className="row">
        {/* First row */}
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className={getCardClassName(0)} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 0)}>
            <div draggable onDragStart={(e) => handleDragStart(e, 0)}>
              <input

                type="checkbox"
                checked={selectedImages.includes(0)}
                onChange={() => toggleImageSelection(0)}
              />
              <img src={images[0]} className={`imgbig ${selectedImages.includes(0) ? 'selected' : ''}`} alt="Image 1" />
            </div>
          </div>
        </div>
        <div className="col-sm-7 left">
          <div className="col-11">
            <div className="row">
              {images.slice(1, 4).map((image, index) => (
                <div className="col-4" key={index}>
                  {/* Render the smaller images in the first row */}
                  {/* You can customize their appearance here */}
                  <div className={getCardClassName(index + 1)} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index + 1)}>
                    <div draggable onDragStart={(e) => handleDragStart(e, index + 1)}>
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(index + 1)}
                        onChange={() => toggleImageSelection(index + 1)}
                      />
                      <div className="card border border-secondary">
                        <img src={image} className={`img ${selectedImages.includes(index + 1) ? 'selected' : ''}`} alt={`Image ${index + 2}`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Second row */}
          <div className="col-11 ">
            <div className="row">
              {images.slice(4, 7).map((image, index) => (
                <div className="col-4 " key={index}>
                  {/* Render the smaller images in the second row */}
                  {/* You can customize their appearance here */}
                  <div className={getCardClassName(index + 4)} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index + 4)}>
                    <div draggable onDragStart={(e) => handleDragStart(e, index + 4)}>
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(index + 4)}
                        onChange={() => toggleImageSelection(index + 4)}
                      />
                      <div className="card border border-secondary">
                        <img src={image} className={`img ${selectedImages.includes(index + 4) ? 'selected' : ''}`} alt={`Image ${index + 5}`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="containerr">

        <div className="row">

          {images.slice(7, 11).map((image, index) => (
            <div className="col-2 colClass" key={index}>
              <div className={getCardClassName(index + 7)} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, index + 7)}>
                <div draggable onDragStart={(e) => handleDragStart(e, index + 7)}>
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(index + 7)}
                    onChange={() => toggleImageSelection(index + 7)}
                  />
                  <div className="card border border-secondary">
                    <img src={image} className={`img ${selectedImages.includes(index + 7) ? 'selected' : ''}`} alt={`Image ${index + 8}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-2">
            <div className='div5'>
              <svg className='logo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg>
              <p className='text-center'><b>Add Images</b></p>
            </div>
          </div>

        </div>

      </div>

    </div>


  );
}

export default App;
