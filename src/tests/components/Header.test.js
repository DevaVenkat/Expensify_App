import { shallow } from 'enzyme';
import React from 'react';
import "../setupTests";
import Header from '../../components/Header';



test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});





// When we used React shallow renderer
// -------------------------------------------------------------------------------------------
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import Header from '../../components/Header';

// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   console.log(renderer.getRenderOutput())
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
// expect(wrapper.find('h1').text()).toBe('Expensify');
// expect(wrapper).toMatchSnapshot();