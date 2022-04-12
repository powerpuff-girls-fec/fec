import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import AddAnswerModal from '../../client/src/components/questionsAndAnswers/QuestionsList/QuestionCard/AddAnswerModal';

afterEach(cleanup);

describe('<AddAnswerModal />', () => {
  const AddAQuestionPortal = document.createElement('div');
<<<<<<< HEAD:test/AddAnswerModal.test.jsx
  // UPDATE THIS RENDER ID IF WE CHANGE THE NAME OF WHERE PORTALS RENDER!
=======
>>>>>>> main:test/questionsAndAnswers/AddAnswerModal.test.jsx
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
