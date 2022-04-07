import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import useForm from '../useForm';

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
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative
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
`;

const re = /^[^@]+@[^@]+\.[^@]+$/;

export default function AddAQuestionModal({ showModal, setShowModal, productId }) {
  const [values, handleChange, resetValues] = useForm({ question: '', nickname: '', email: '' });
  const [alert, setAlert] = useState(false);
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
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
            Ask Your Question
            About the [Product Name Here]
          </div>
          <FormContainer>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (values.question === '' || values.nickname === '' || values.email === '' || !re.test(values.email)
              ) {
                setAlert(true);
              } else {
                axios.post(`/api/questions/${productId}`, values)
                  .then((res) => console.log(res))
                  .then(() => setShowModal(false))
                  .then(() => resetValues())
                  .catch((err) => console.log(err));
              }
            }}
            >
              <div>*Question</div>
              <textarea
                name="question"
                placeholder="Why did you like the product or not?"
                maxLength="1000"
                value={values.question}
                onChange={handleChange}
              />
              <div>*Nickname</div>
              <input
                name="nickname"
                maxLength="60"
                placeholder="Example: jackson11!"
                value={values.nickname}
                onChange={handleChange}
              />
              <div>For privacy reasons, do not use your full name or email address</div>
              <div>*Email</div>
              <input
                name="email"
                maxLength="60"
                placeholder="name@example.com"
                value={values.email}
                onChange={handleChange}
              />
              <div>For authentication reasons, you will not be emailed</div>
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

AddAQuestionModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
};
