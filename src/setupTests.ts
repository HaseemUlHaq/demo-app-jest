import '@testing-library/jest-dom';
import enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

/**won't work, because we are using react 17 */
// import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
