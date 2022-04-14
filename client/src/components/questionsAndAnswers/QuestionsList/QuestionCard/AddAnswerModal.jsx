import React, { useState, useRef } from 'react';
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
  width: 600px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  border-radius: 10px;
  font-family: 'Nunito Sans', sans-serif;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  color: #141414;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  height: 100%;
`;

const FormLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 500px;
  margin: 10px;
  font-family: inherit;
`;

const FormLabelTextArea = styled.label`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 500px;
  margin: 10px;
  height: 150px;
  font-family: inherit;
`;

const FormEntry = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: inherit;
`;

const FormTextDisclaimer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-style: italic;
  font-family: inherit;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AnswerCardImg = styled.img`
  border-radius: 10px;
  border: #aaaaaa;
  border-width: thin;
  border-style: solid;
  margin: 5px;
`;

const re = /^[^@]+@[^@]+\.[^@]+$/;

export default function AddAnswerModal({
  showModal, setShowModal, questionId, questionBody,
}) {
  const [values, handleChange, resetValues] = useForm({ answer: '', nickname: '', email: '' });
  const [alert, setAlert] = useState(false);
  const [imgURLs, setImgURLs] = useState([]);

  const uploadedImages = useRef([]);
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const onImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImgURLs((prev) => [...prev, reader.result]);
    };
  };

  const cloudinaryUpload = (imageURL) => axios.post('/api/cloudinary', { imagedata: imageURL });

  const submitForm = (e) => {
    e.preventDefault();
    // if there are form errors, show error alert
    if (values.answer === '' || values.nickname === '' || values.email === '' || !re.test(values.email)
    ) {
      setAlert(true);
    // else, go through submit process
    } else {
      // if images exist, convert them into URLs via Cloudinary upload
      if (imgURLs.length > 0) {
        for (let i = 0; i < imgURLs.length; i += 1) {
          // if on last index, make post request after image upload
          if (i === imgURLs.length - 1) {
            cloudinaryUpload(imgURLs[i])
              .then((res) => {
                uploadedImages.current = [...uploadedImages.current, res.data];
              })
              .then(() => {
                axios.post(`/api/answers/${questionId}`, { ...values, photos: [...uploadedImages.current] })
                  .then(() => setShowModal(false))
                  .then(() => resetValues())
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          // else, we're not on the last index. Upload to Cloudinary without post
          } else {
            cloudinaryUpload(imgURLs[i])
              .then((res) => {
                uploadedImages.current = [...uploadedImages.current, res.data];
              })
              .catch((err) => console.log(err));
          }
        }
      }
      // if there are no images, skip Cloudinary upload and post question
      if (imgURLs.length === 0) {
        // otherwise, there are no images. we can just post without waiting for upload
        axios.post(`/api/answers/${questionId}`, { ...values, photos: [] })
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
      <ModalWrapper showModal={showModal} data-testid="AddAnswerModal">
        <ModalContent>
          <FormText>
            Submit your Answer :
            {'  '}
            {questionBody}
          </FormText>
          <FormContainer onSubmit={submitForm}>
            <FormEntry key="answer">
              <FormLabelTextArea htmlFor="answer">
                *Answer:&nbsp;
                <textarea
                  name="answer"
                  placeholder="Place your answer to the question here"
                  maxLength="1000"
                  value={values.answer}
                  onChange={handleChange}
                  data-testid="AddAnswerModal-answer"
                />
              </FormLabelTextArea>
            </FormEntry>

            <FormEntry key="nickname">
              <FormLabel htmlFor="nickname">
                *Nickname:&nbsp;
                <input
                  name="nickname"
                  maxLength="60"
                  placeholder="Example: jack543!"
                  value={values.nickname}
                  onChange={handleChange}
                  data-testid="AddAnswerModal-nickname"
                />
              </FormLabel>
            </FormEntry>

            <FormTextDisclaimer>
              For privacy reasons, do not use your full name or email address
            </FormTextDisclaimer>

            <FormEntry key="email">
              <FormLabel htmlFor="email">
                *Email:&nbsp;
                <input
                  name="email"
                  maxLength="60"
                  placeholder="Example: jack@email.com"
                  value={values.email}
                  onChange={handleChange}
                  data-testid="AddAnswerModal-email"
                />
              </FormLabel>
            </FormEntry>

            <FormTextDisclaimer>
              For authentication reasons, you will not be emailed
            </FormTextDisclaimer>

            <FormText>
              Upload Up to 5 Photos
            </FormText>

            {imgURLs.length < 5 ? (
              <input
                name="images"
                type="file"
                accept="image/*"
                onChange={onImageChange}
                data-testid="AddAnswerModal-image"
              />
            ) : null}

            <PreviewContainer>
              {imgURLs.map((imageSrc) => <AnswerCardImg key={imageSrc} src={imageSrc} alt="preview" height="50" width="75" />)}
            </PreviewContainer>
            <input type="submit" value="Submit" />
            {alert ? (
              <FormTextDisclaimer>
                You must enter the following:
                {values.question === '' ? 'Question' : null}
                {values.nickname === '' ? 'Nickname' : null}
                {(values.email === '' || !re.test(values.email)) ? 'Email' : null}
              </FormTextDisclaimer>
            ) : null}
          </FormContainer>
        </ModalContent>
      </ModalWrapper>
    </Background>,
    document.getElementById('portal'),
  );
}

AddAnswerModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questionBody: PropTypes.string.isRequired,
};
