import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  const { getByText } = render(<App />);
  const headingElement = getByText("Touch Bistro Full Stach Challenge");
  expect(headingElement).toBeInTheDocument();
  
});
