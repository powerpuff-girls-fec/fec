import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import AddAQuestionModal from '../../client/src/components/questionsAndAnswers/QuestionsList/AddAQuestionModal';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('<AddAQuestionModal />', () => {
  const AddAQuestionPortal = document.createElement('div');
  AddAQuestionPortal.setAttribute('id', 'portal');

  beforeEach(() => {
    document.body.appendChild(AddAQuestionPortal);
  });

  it('renders AddAQuestionModal component', () => {
    const click = jest.fn();
    render(<AddAQuestionModal showModal setShowModal={click} productId={4444} />);
    const AddAQuestionModalElement = screen.getByTestId('AddAQuestionModal');

    expect(AddAQuestionModalElement).toBeInTheDocument();
  });

  it('does not render AddAQuestionModal component if showModal is false', () => {
    const click = jest.fn();
    render(<AddAQuestionModal
      showModal={false}
      setShowModal={click}
      productId={4444}
    />);

    expect(() => screen.getByTestId('AddAQuestionModal')).toThrow();
  });

  it('does not render AddAQuestionModal component if showModal is false', () => {
    const click = jest.fn();
    render(<AddAQuestionModal
      showModal={false}
      setShowModal={click}
      productId={4444}
    />);

    expect(() => screen.getByTestId('AddAQuestionModal')).toThrow();
  });
});
