export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
    this.repository.set(400, 'Bad Request');
    this.repository.set(401, 'Unauthorized');
    this.repository.set(402, 'Payment Required');
    this.repository.set(403, 'Forbidden');
    this.repository.set(404, 'Not Found');
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    }
    return 'Unknown error';
  }
}
