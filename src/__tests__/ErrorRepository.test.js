import { test } from '@jest/globals';
import ErrorRepository from '../js/ErrorRepository';

test('Метод translate должен правильно возвращать текст ошибки', () => {
  const repository = new ErrorRepository();
  repository.errorsArray.set('177', 'Недостаточно символов');
  const template = 'Недостаточно символов';
  const result = repository.translate(177);
  expect(result).toEqual(template);
});
test('Метод translate должен возвращать Unknown error,при неизвестной ошибке', () => {
  const repository = new ErrorRepository();
  repository.errorsArray.set('177', 'Недостаточно символов');
  const template = 'Unknown error';
  const result = repository.translate(100);
  expect(result).toEqual(template);
});
