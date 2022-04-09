/* eslint-disable new-cap */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

import ViewQuestionsAndAnswers from '../client/src/components/questionsAndAnswers/ViewQuestionsAndAnswers';

// const testData = {
//   result: [
//     {
//       question_id: 573878,
//       question_body: 'What fabric is the bottom made of?',
//       question_date: '2019-02-18T00:00:00.000Z',
//       asker_name: 'cleopatra',
//       question_helpfulness: 81,
//       reported: false,
//       answers: {
//         5538451: {
//           id: 5538451,
//           body: 'answer, answer, answer',
//           date: '2022-04-06T00:00:00.000Z',
//           answerer_name: 'yo momma',
//           helpfulness: 0,
//           photos: [],
//         },
//         5538452: {
//           id: 5538452,
//           body: 'answer, answer, answer',
//           date: '2022-04-06T00:00:00.000Z',
//           answerer_name: 'yo momma',
//           helpfulness: 0,
//           photos: [],
//         },
//         5538453: {
//           id: 5538453,
//           body: 'answer, answer, answer',
//           date: '2022-04-06T00:00:00.000Z',
//           answerer_name: 'yo momma',
//           helpfulness: 0,
//           photos: [],
//         },
//         5538454: {
//           id: 5538454,
//           body: 'new answer',
//           date: '2022-04-06T00:00:00.000Z',
//           answerer_name: 'yo momma',
//           helpfulness: 0,
//           photos: [],
//         },
//         5538459: {
//           id: 5538459,
//           body: 'testing testing',
//           date: '2022-04-07T00:00:00.000Z',
//           answerer_name: 'yo momma',
//           helpfulness: 0,
//           photos: [],
//         },
//         5538467: {
//           id: 5538467,
//           body: 'testing testing',
//           date: '2022-04-07T00:00:00.000Z',
//           answerer_name: 'yo momma',
//           helpfulness: 0,
//           photos: [
//             'dfdc',
//           ],
//         },
//       },
//     },
//     {
//       question_id: 573875,
//       question_body: 'Why is this product cheaper here than other sites?',
//       question_date: '2018-04-24T00:00:00.000Z',
//       asker_name: 'toofast',
//       question_helpfulness: 21,
//       reported: false,
//       answers: {
//         5538628: {
//           id: 5538628,
//           body: 'Here are some images to render for my test.',
//           date: '2022-04-08T00:00:00.000Z',
//           answerer_name: 'DepressedCoder',
//           helpfulness: 3,
//           photos: [
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649458842/vzxio73onopwxb5dphkg.webp',
//           ],
//         },
//         5538629: {
//           id: 5538629,
//           body: 'Here are more images.',
//           date: '2022-04-08T00:00:00.000Z',
//           answerer_name: 'Sadboyz',
//           helpfulness: 0,
//           photos: [
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649458893/o5ibht7k3tbxqb3ltzst.jpg',
//           ],
//         },
//         5538630: {
//           id: 5538630,
//           body: 'Images',
//           date: '2022-04-08T00:00:00.000Z',
//           answerer_name: 'imageGuy',
//           helpfulness: 0,
//           photos: [
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649458961/r34ek7z6w4rk3xhpajkb.jpg',
//           ],
//         },
//         5538631: {
//           id: 5538631,
//           body: 'Should have seller first.',
//           date: '2022-04-08T00:00:00.000Z',
//           answerer_name: 'Seller',
//           helpfulness: 0,
//           photos: [
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649459032/zugbvevcq5dwditpwic4.webp',
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649459032/x4ax45eissrv6kqfpf6o.jpg',
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649459032/qmdyyzg9riusruk9wznx.png',
//             'http://res.cloudinary.com/davabqcee/image/upload/v1649459032/kunu7fcootiwwq7tai9a.webp',
//           ],
//         },
//       },
//     },
//     {
//       question_id: 573874,
//       question_body: "I'm allergic to dye #17, does this product contain any?",
//       question_date: '2019-01-24T00:00:00.000Z',
//       asker_name: 'l33tgamer',
//       question_helpfulness: 9,
//       reported: false,
//       answers: {
//         5361403: {
//           id: 5361403,
//           body: 'Yes',
//           date: '2019-11-24T00:00:00.000Z',
//           answerer_name: 'n00bgamer',
//           helpfulness: 173,
//           photos: [],
//         },
//       },
//     },
//     {
//       question_id: 573880,
//       question_body: 'What fabric is the side made of?',
//       question_date: '2018-11-12T00:00:00.000Z',
//       asker_name: 'funnygirl',
//       question_helpfulness: 4,
//       reported: false,
//       answers: {},
//     },
//     {
//       question_id: 573877,
//       question_body: 'Does this product run big or small?',
//       question_date: '2018-11-17T00:00:00.000Z',
//       asker_name: 'iluvcatz',
//       question_helpfulness: 4,
//       reported: false,
//       answers: {
//         5361387: {
//           id: 5361387,
//           body: 'It fit fine for me',
//           date: '2018-01-17T00:00:00.000Z',
//           answerer_name: 'iluvbirds',
//           helpfulness: 48,
//           photos: [],
//         },
//         5361388: {
//           id: 5361388,
//           body: 'Felt a little smaller than my usual size.',
//           date: '2018-12-17T00:00:00.000Z',
//           answerer_name: 'iluvbirds',
//           helpfulness: 48,
//           photos: [],
//         },
//       },
//     },
//     {
//       question_id: 583136,
//       question_body: 'It this useful?',
//       question_date: '2022-03-31T00:00:00.000Z',
//       asker_name: 'tryTry',
//       question_helpfulness: 1,
//       reported: false,
//       answers: {},
//     },
//     {
//       question_id: 583135,
//       question_body: 'this is body',
//       question_date: '2022-03-31T00:00:00.000Z',
//       asker_name: 'thisisname',
//       question_helpfulness: 0,
//       reported: false,
//       answers: {},
//     },
//     {
//       question_id: 583134,
//       question_body: 'what is this?',
//       question_date: '2022-03-31T00:00:00.000Z',
//       asker_name: 'bob bloblaw',
//       question_helpfulness: 0,
//       reported: false,
//       answers: {},
//     },
//     {
//       question_id: 573872,
//       question_body: 'Where is this product made?',
//       question_date: '2018-01-24T00:00:00.000Z',
//       asker_name: 'iluvcatz',
//       question_helpfulness: 0,
//       reported: false,
//       answers: {
//         5361386: {
//           id: 5361386,
//           body: 'Michigan',
//           date: '2018-01-24T00:00:00.000Z',
//           answerer_name: 'iluvbirds',
//           helpfulness: 45,
//           photos: [],
//         },
//         5361390: {
//           id: 5361390,
//           body: 'Made locally!',
//           date: '2018-11-24T00:00:00.000Z',
//           answerer_name: 'Seller',
//           helpfulness: 50,
//           photos: [],
//         },
//         5361463: {
//           id: 5361463,
//           body: 'Product of the USA!',
//           date: '2018-12-24T00:00:00.000Z',
//           answerer_name: 'Seller',
//           helpfulness: 21,
//           photos: [],
//         },
//       },
//     },
//   ],
// };

// const questionGetResponse = rest.get('http://localhost/api/questions/12345', (req, res, ctx) => res(ctx.json(testData)));

// const handlers = [questionGetResponse];

// const server = new setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
//   cleanup();
// });
// afterAll(() => server.close());

test('renders ViewQuestionsAndAnswers component', () => {
  render(<ViewQuestionsAndAnswers productId={12345} />);
  const ViewQuestionsAndAnswersElement = screen.getByTestId('qa');
  expect(ViewQuestionsAndAnswersElement).toBeInTheDocument();
  expect(ViewQuestionsAndAnswersElement).toHaveTextContent('QUESTIONS & ANSWERS');
});
