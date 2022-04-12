const request = require('supertest');
const app = require('../../server/index');

describe('Server', () => {
  it('gets the test endpoint', (done) => {
    request(app)
      .get('/api/reviews')
      .expect(200)
      .end((err) => {
        if (err) { return done(err); }

        return done();
      });
  });
});
