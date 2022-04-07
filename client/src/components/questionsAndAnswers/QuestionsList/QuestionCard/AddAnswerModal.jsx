import React, { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import useForm from '../../useForm';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const re = /^[^@]+@[^@]+\.[^@]+$/;

export default function AddAnswerModal({
  showModal, setShowModal, questionId, questionBody,
}) {
  const [values, handleChange, resetValues] = useForm({ answer: '', nickname: '', email: '' });
  const [alert, setAlert] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviewURLs, setImagePreviewURLs] = useState([]);

  const uploadedImages = useRef([]);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const onImageChange = (e) => {
    setImages((files) => [...files, ...e.target.files]);
  };

  useEffect(() => {
    const newImagePreviewURLs = images.map((image) => URL.createObjectURL(image));
    setImagePreviewURLs(newImagePreviewURLs);
  }, [images]);

  const cloudinaryUpload = (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'briklxcc');

    return axios.post('https://api.cloudinary.com/v1_1/davabqcee/image/upload', formData);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // if there are form errors, show error alert
    if (values.answer === '' || values.nickname === '' || values.email === '' || !re.test(values.email)
    ) {
      setAlert(true);
    // else, go through submit process
    } else {
      // if images exist, convert them into URLs via Cloudinary upload
      if (images.length > 0) {
        for (let i = 0; i < images.length; i += 1) {
          // if on last index, make post request after image upload
          if (i === images.length - 1) {
            cloudinaryUpload(images[i])
              .then((res) => {
                uploadedImages.current = [...uploadedImages.current, res.data.url];
              })
              .then(() => {
                console.log({ ...values, photos: [...uploadedImages.current] });
                axios.post(`/api/answers/${questionId}`, { ...values, photos: [...uploadedImages.current] })
                  .then((res) => console.log(res))
                  .then(() => setShowModal(false))
                  .then(() => resetValues())
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          // else, we're not on the last index. Upload to Cloudinary without post
          } else {
            cloudinaryUpload(images[i])
              .then((res) => {
                uploadedImages.current = [...uploadedImages.current, res.data.url];
              })
              .catch((err) => console.log(err));
          }
        }
      }
      // if there are no images, skip Cloudinary upload and post question
      if (images.length === 0) {
        // otherwise, there are no images. we can just post without waiting for upload
        axios.post(`/api/answers/${questionId}`, { ...values, photos: [] })
          .then((res) => console.log(res))
          .then(() => setShowModal(false))
          .then(() => resetValues())
          .catch((err) => console.log(err));
      }
    }
  };

  if (!showModal) {
    return null;
  }
  return ReactDom.createPortal(
    <Background ref={modalRef} onClick={closeModal}>
      <ModalWrapper showModal={showModal}>
        <ModalContent>
          <div>
            Submit your Answer
            [Product Name Here] :
            {questionBody}
          </div>
          <FormContainer>
            <form onSubmit={submitForm}>
              <div>*Answer</div>
              <textarea
                name="answer"
                placeholder="Place your answer to the question here"
                maxLength="1000"
                value={values.answer}
                onChange={handleChange}
              />
              <div>*Nickname</div>
              <input
                name="nickname"
                maxLength="60"
                placeholder="Example: jack543!"
                value={values.nickname}
                onChange={handleChange}
              />
              <div>For privacy reasons, do not use your full name or email address</div>
              <div>*Email</div>
              <input
                name="email"
                maxLength="60"
                placeholder="Example: jack@email.com"
                value={values.email}
                onChange={handleChange}
              />
              <div>For authentication reasons, you will not be emailed</div>
              <div>Upload Up to 5 Photos</div>
              {images.length < 5 ? (
                <input
                  name="images"
                  type="file"
                  accept="image/*"
                  onChange={onImageChange}
                />
              ) : null}
              <div>Image Preivew</div>
              <PreviewContainer>
                {imagePreviewURLs.map((imageSrc) => <img key={imageSrc} src={imageSrc} alt="preview" height="30" width="30" />)}
              </PreviewContainer>
              <input type="submit" value="Submit" />
              {alert ? (
                <div>
                  You must enter the following:
                  {values.question === '' ? 'Question' : null}
                  {values.nickname === '' ? 'Nickname' : null}
                  {(values.email === '' || !re.test(values.email)) ? 'Email' : null}
                </div>
              ) : null}
            </form>
          </FormContainer>
        </ModalContent>
      </ModalWrapper>
    </Background>,
    document.getElementById('AddAQuestionPortal'),
  );
}

AddAnswerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionBody: PropTypes.string.isRequired,
};
