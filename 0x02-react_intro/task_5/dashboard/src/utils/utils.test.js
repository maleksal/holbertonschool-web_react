import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('getFullYear', () => {
  test('the year rendered', () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe('getLatestNotification', () => {
  test('the notification rendered', () => {
    expect(getLatestNotification()).toEqual(
        '<strong>Urgent requirement</strong> - complete by EOD'
      );
  });
});

describe('getFooterCopy', () => {
    test('the string rendered', () => {expect(getFooterCopy(true)).toEqual('Holberton School')});
  });
  
describe('getFooterCopy', () => {
    test('the string rendered', () => {expect(getFooterCopy(false)).toEqual('Holberton School main dashboard')});
    });