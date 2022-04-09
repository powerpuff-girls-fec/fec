import React, { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';

import styled from 'styled-components';

import underText from '../rating-breakdown/factor-list/characteristics.json';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative
  z-index: 10;
  border-radius: 10px;
`;

const Form = styled.form`
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
  width: 100%;
`;

const FormEntry = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharUnderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  margin-left: 25%;
`;

export default function ReviewModal({ showModal, setShowModal, characteristics }) {
  const [values, setValues] = useState({
    rating: -1,
    summary: '',
    body: '',
    name: '',
    email: '',
    recommend: false,
    photos: [],
    characteristics: {},
  });

  useEffect(() => {
    const characteristicsCopy = {};

    Object.keys(characteristics).forEach((key) => {
      characteristicsCopy[characteristics[key].id] = {
        id: characteristics[key].id,
        name: key,
        value: 3,
      };
    });

    setValues({
      ...values,
      characteristics: characteristicsCopy,
    });
  }, [characteristics]);

  const updateValue = ({ target, target: { name, value } }) => {
    setValues((prevState) => (
      { ...prevState, [name]: (target.type === 'radio') ? target.id === 'yes' : value }));
  };

  // eslint-disable-next-line no-unused-vars
  const updateCharacteristic = ({ target, target: { id, value } }) => {
    setValues((prevState) => (
      {
        ...prevState,
        characteristics: {
          ...prevState.characteristics,
          [id]: { ...prevState.characteristics[id], value: Number(value) },
        },
      }));
  };

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
        <Form onSubmit={() => console.log(values)}>
          <FormEntry key="rating">
            <FormLabel htmlFor="rating">
              Rating:&nbsp;
              <select
                name="rating"
                id="rating"
                value={values.rating}
                onChange={updateValue}
              >
                <option value="-1">Select a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </FormLabel>
          </FormEntry>

          <FormEntry key="summary">
            <FormLabel htmlFor="summary">
              Summary:&nbsp;
              <textarea
                name="summary"
                id="summary"
                value={values.summary}
                onChange={updateValue}
              />
            </FormLabel>
          </FormEntry>

          <FormEntry key="body">
            <FormLabel htmlFor="body">
              Body:&nbsp;
              <textarea
                name="body"
                id="body"
                value={values.body}
                onChange={updateValue}
              />
            </FormLabel>
          </FormEntry>

          <FormEntry key="name">
            <FormLabel htmlFor="name">
              Name:&nbsp;
              <input
                name="name"
                id="name"
                value={values.name}
                onChange={updateValue}
              />
            </FormLabel>
          </FormEntry>

          <FormEntry key="email">
            <FormLabel htmlFor="email">
              Email:&nbsp;
              <input
                name="email"
                id="email"
                type="email"
                value={values.email}
                onChange={updateValue}
              />
            </FormLabel>
          </FormEntry>

          <FormEntry style={{ flexDirection: 'row' }} key="recommend">
            Recommend:&nbsp;
            <FormLabel htmlFor="recommend">
              <label htmlFor="yes">
                <input
                  name="recommend"
                  id="yes"
                  type="radio"
                  value={values.recommend}
                  onChange={updateValue}
                />
                Yes
              </label>
              <label htmlFor="no">
                <input
                  name="recommend"
                  id="no"
                  type="radio"
                  value={values.recommend}
                  onChange={updateValue}
                />
                No
              </label>
            </FormLabel>
          </FormEntry>

          {/* <FormEntry>
            <FormEntry htmlFor="photos">
              Photos:&nbsp;
              <input
                name="photos"
                id="photos"
                type="file"
                multiple
                onChange={updateValue}
              />
            </FormEntry>
          </FormEntry> */}

          {Object.keys(values.characteristics).map((key) => (
            <FormEntry key={key}>
              <FormLabel htmlFor={key}>
                {values.characteristics[key].name}
                :&nbsp;
                <input
                  key={key}
                  name={values.characteristics[key].name}
                  id={key}
                  type="range"
                  min="1"
                  max="5"
                  value={values.characteristics[key].value}
                  onChange={updateCharacteristic}
                />
              </FormLabel>
              <CharUnderText>
                {underText[values.characteristics[key].name].map(
                  (text) => (<div>{text}</div>),
                )}
              </CharUnderText>
            </FormEntry>
          ))}

          <FormEntry>
            <button type="submit">Submit</button>
          </FormEntry>
        </Form>
      </ModalWrapper>
    </Background>,
    document.getElementById('portal'),
  );
}
