import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it, beforeEach } from 'mocha';

import server from '../../server';

chai.use(chaiHttp);
describe('API api/post', () => {
  beforeEach(function () {
    this.timeout(3000);
  });

  it('should list ALL posts on /post GET', (done) => {
    chai.request(server)
      .get('/api/post/acessocard')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
