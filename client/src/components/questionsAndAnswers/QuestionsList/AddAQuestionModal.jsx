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

  const submitForm = (e) => {
    e.preventDefault();
    if (values.question === '' || values.nickname === '' || values.email === '' || !re.test(values.email)
    ) {
      setAlert(true);
    } else {
      axios.post(`/api/questions/${productId}`, values)
        .then(() => setShowModal(false))
        .then(() => resetValues())
        .catch((err) => console.log(err));
    }
  };

  if (!showModal) {
    return null;
  }

  return ReactDom.createPortal(
    <Background ref={modalRef} onClick={closeModal}>
      <ModalWrapper showModal={showModal} data-testid="AddAQuestionModal">
        <ModalContent>
          <FormText>
            Ask Your Question
          </FormText>
          <FormContainer onSubmit={submitForm}>

            <FormEntry key="question">
              <FormLabelTextArea htmlFor="question">
                *Question:&nbsp;
                <textarea
                  name="question"
                  placeholder="Why did you like the product or not?"
                  maxLength="1000"
                  value={values.question}
                  onChange={handleChange}
                />
              </FormLabelTextArea>
            </FormEntry>

            <FormEntry key="nickname">
              <FormLabel htmlFor="nickname">
                *Nickname:&nbsp;
                <input
                  name="nickname"
                  maxLength="60"
                  placeholder="Example: jackson11!"
                  value={values.nickname}
                  onChange={handleChange}
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
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormLabel>
            </FormEntry>

            <FormTextDisclaimer>
              For authentication reasons, you will not be emailed
            </FormTextDisclaimer>

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

AddAQuestionModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  productId: PropTypes.number,
};
