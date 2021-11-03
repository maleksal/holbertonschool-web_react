import { shallow } from 'enzyme';
import Notifications from './Notifications.js';

const wrapper = shallow(<Notifications />);

it('No crashes :)', () => {
  wrapper;
});
it('list items', () => {
  expect(wrapper.find('li').children().length).toEqual(3);
});
it('paragraph', () => {
  expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBeTruthy();
});