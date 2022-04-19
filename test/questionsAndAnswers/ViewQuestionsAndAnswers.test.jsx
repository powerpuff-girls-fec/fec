/* eslint-disable new-cap */
import React from 'react';
import {
  render, screen, cleanup, waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { within } from '@testing-library/dom';

import ViewQuestionsAndAnswers from '../../client/src/components/questionsAndAnswers/ViewQuestionsAndAnswers';

import testData from './test-data/q-and-a-data.json';

const questionGetResponse = rest.get('http://localhost/api/questions/12345', (req, res, ctx) => res(ctx.json(testData)));
const addAQuestionSubmit = rest.post('http://localhost/api/questions/12345', (req, res, ctx) => res(ctx.status(200)));
const addAnswerSubmit = rest.post('http://localhost/api/answers/573878', (req, res, ctx) => res(ctx.status(200)));
const reportAnswer = rest.put('http://localhost/api/answers/5538451/report', (req, res, ctx) => res(ctx.status(200)));
const helpfulAnswer = rest.put('http://localhost/api/answers/5538451/helpful', (req, res, ctx) => res(ctx.status(200)));

const handlers = [
  questionGetResponse, addAQuestionSubmit, addAnswerSubmit, reportAnswer, helpfulAnswer,
];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

describe('<ViewQuestionsAndAnswers />', () => {
  it('renders ViewQuestionsAndAnswers component', () => {
    render(<ViewQuestionsAndAnswers productId={12345} />);
    const ViewQuestionsAndAnswersElement = screen.getByTestId('qa');
    expect(ViewQuestionsAndAnswersElement).toBeInTheDocument();
    expect(ViewQuestionsAndAnswersElement).toHaveTextContent('QUESTIONS & ANSWERS');
  });

  it('renders ViewQuestionsAndAnswers using data from the correct API call', async () => {
    render(<ViewQuestionsAndAnswers productId={12345} />);
    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));
    const QuestionCard1 = screen.getByTestId('QuestionCard1');
    expect(QuestionCard1).toBeInTheDocument();
  });

  it('renders the correct question cards when the search bar is used', async () => {
    render(<ViewQuestionsAndAnswers productId={12345} />);

    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));

    const searchBar = screen.getByRole('textbox');
    await user.type(searchBar, 'What fabric is the bottom made of?');

    const QuestionCard0 = screen.getByTestId('QuestionCard0');
    expect(QuestionCard0).toBeInTheDocument();
    expect(() => screen.getByTestId('QuestionCard1')).toThrow();
    expect(() => screen.getByTestId('QuestionCard2')).toThrow();
    expect(() => screen.getByTestId('QuestionCard3')).toThrow();
  });

  it('renders AddAQuestionModal when user clicks "ADD A QUESTION" button', async () => {
    const AddAQuestionPortal = document.createElement('div');
    AddAQuestionPortal.setAttribute('id', 'portal');
    document.body.appendChild(AddAQuestionPortal);

    render(<ViewQuestionsAndAnswers productId={12345} />);
    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));

    const addAQuestionButton = screen.getByRole('button', {
      name: /add a question/i,
    });
    await user.click(addAQuestionButton);
    const AddAQuestionModal = screen.getByTestId('AddAQuestionModal');
    expect(AddAQuestionModal).toBeInTheDocument();
  });

  it('submits a question in AddAQuestionModal when user fills out form properly and clicks submit', async () => {
    const AddAQuestionPortal = document.createElement('div');
    AddAQuestionPortal.setAttribute('id', 'portal');
    document.body.appendChild(AddAQuestionPortal);

    render(<ViewQuestionsAndAnswers productId={12345} />);
    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));

    const addAQuestionButton = screen.getByRole('button', {
      name: /add a question/i,
    });
    await user.click(addAQuestionButton);
    const AddAQuestionModal = screen.getByTestId('AddAQuestionModal');
    expect(AddAQuestionModal).toBeInTheDocument();

    const question = within(screen.getByText(/\*question:/i)).getByRole('textbox');
    const nickname = within(screen.getByText(/\*nickname:/i)).getByRole('textbox');
    const email = within(screen.getByText(/\*email:/i)).getByRole('textbox');
    const submit = screen.getByRole('button', { name: /submit/i });

    await user.type(question, 'Test question?');
    await user.type(nickname, 'Test name');
    await user.type(email, 'test@test.com');
    await user.click(submit);

    const ViewQuestionsAndAnswersElement = screen.getByTestId('qa');
    expect(ViewQuestionsAndAnswersElement).toBeInTheDocument();
  });

  it('renders AddAnswerModal when user clicks "Add Answer" button', async () => {
    const AddAnswerPortal = document.createElement('div');
    AddAnswerPortal.setAttribute('id', 'portal');
    document.body.appendChild(AddAnswerPortal);

    render(<ViewQuestionsAndAnswers productId={12345} />);
    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));

    const AddAnswerButton = within(screen.getByTestId('QuestionCard0')).getByRole('button', {
      name: /add answer/i,
    });
    await user.click(AddAnswerButton);
    const AddAnswerModalElement = screen.getByTestId('AddAnswerModal');
    expect(AddAnswerModalElement).toBeInTheDocument();
  });

  it('submits an answer in AddAnswerModal when user fills out form properly and clicks submit', async () => {
    const AddAnswerPortal = document.createElement('div');
    AddAnswerPortal.setAttribute('id', 'portal');
    document.body.appendChild(AddAnswerPortal);

    render(<ViewQuestionsAndAnswers productId={12345} />);
    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));

    const AddAnswerButton = within(screen.getByTestId('QuestionCard0')).getByRole('button', {
      name: /add answer/i,
    });
    await user.click(AddAnswerButton);
    const AddAnswerModalElement = screen.getByTestId('AddAnswerModal');
    expect(AddAnswerModalElement).toBeInTheDocument();

    const answer = within(screen.getByText(/\*answer:/i)).getByRole('textbox');
    const nickname = within(screen.getByText(/\*nickname:/i)).getByRole('textbox');
    const email = within(screen.getByText(/\*email:/i)).getByRole('textbox');
    const addImage = screen.getByTestId('AddAnswerModal-image');
    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const submit = screen.getByRole('button', { name: /submit/i });

    await user.type(answer, 'Test answer.');
    await user.type(nickname, 'Test name');
    await user.type(email, 'test@test.com');
    await user.upload(addImage, fakeFile);
    await user.click(submit);

    const ViewQuestionsAndAnswersElement = screen.getByTestId('qa');
    expect(ViewQuestionsAndAnswersElement).toBeInTheDocument();
  });

  it('helpful and report answer button function correctly', async () => {
    render(<ViewQuestionsAndAnswers productId={12345} />);
    await waitForElementToBeRemoved(() => screen.getByText(/by , invalid date \| helpful\? \|/i));
    const QuestionCard1 = screen.getByTestId('QuestionCard1');
    expect(QuestionCard1).toBeInTheDocument();
    const report = screen.getByTestId('ReportAnswerButton_5538451');
    const helpful = screen.getByTestId('HelpfulAnswerButton_5538451');
    expect(report).toBeInTheDocument();
    expect(helpful).toBeInTheDocument();
    await user.click(report);
    await user.click(helpful);
    await user.click(report);
    await user.click(helpful);
  });
});
