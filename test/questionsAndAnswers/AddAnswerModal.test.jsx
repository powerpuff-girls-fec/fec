import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AddAnswerModal from '../../client/src/components/questionsAndAnswers/QuestionsList/QuestionCard/AddAnswerModal';

afterEach(cleanup);

describe('<AddAnswerModal />', () => {
  const AddAQuestionPortal = document.createElement('div');
  AddAQuestionPortal.setAttribute('id', 'portal');

  beforeEach(() => {
    document.body.appendChild(AddAQuestionPortal);
  });

  it('renders AddAnswerModal component', () => {
    const click = jest.fn();
    render(<AddAnswerModal
      showModal
      setShowModal={click}
      questionId={3333}
      questionBody="This is my question?"
    />);

    const AddAnswerModalElement = screen.getByTestId('AddAnswerModal');
    expect(AddAnswerModalElement).toBeInTheDocument();
  });

  it('does not render AddAnswerModal component if showModal is false', () => {
    const click = jest.fn();
    render(<AddAnswerModal
      showModal={false}
      setShowModal={click}
      questionId={3333}
      questionBody="This is my question?"
    />);

    expect(() => screen.getByTestId('AddAnswerModal')).toThrow();
  });
});
