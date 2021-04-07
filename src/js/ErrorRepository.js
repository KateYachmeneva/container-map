export default class ErrorRepository {
  constructor() {
    this.errorsArray = new Map();
  }

  translate(code) {
    const error = this.errorsArray.get(code.toString());
    if (error) {
      return error;
    }
    return 'Unknown error';
  }
}
