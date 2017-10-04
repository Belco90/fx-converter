import React from 'react';
import {shallow} from 'enzyme';
import RateRow from '../../components/RateRow';

test('RateRow renders proper info', () => {
  const rateRow = shallow(
    <RateRow currency="foo" amount={1.23} />
  );

  expect(rateRow.html()).toEqual(
    "<tr>" +
    "<td>foo</td>" +
    "<td>1.23</td>" +
    "</tr>"
  );

});