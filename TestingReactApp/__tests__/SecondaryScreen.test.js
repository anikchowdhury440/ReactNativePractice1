import {act, fireEvent, waitFor} from '@testing-library/react-native';
import { screenParameters } from './extras/data';
import MainScreen from '../src/screens/MainScreen';
import SecondaryScreen from '../src/screens/SecondaryScreen';
import { renderWithNavigation } from './extras/helpers';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<SecondaryScreen />', () => {
  let wrapper;

  const otherComponents = [{name: 'MainScreen', component: MainScreen}];

  beforeEach(() => {
    wrapper = renderWithNavigation(SecondaryScreen, {
      otherComponents,
      screenConfig: {
        initialParams: screenParameters,
      },
    });
  });

  it('should render SecondaryScreen', () => {
    expect(wrapper.queryByTestId('SecondaryScreen')).toBeTruthy();
  });

  it('should render the go back button', () => {
    expect(wrapper.queryByTestId('back-button')).toBeTruthy();
  });

  describe('when go back button is pressed', () => {
    it('it should render MainScreen ', () => {
      act(() => {
        fireEvent.press(wrapper.queryByTestId('back-button'));
      });
      waitFor(() =>
        expect(wrapper.queryByTestId('MainScreen')).toBeTruthy(),
      );
    });
  });

  it('should render title', () => {
    expect(wrapper.queryByTestId('title')).toBeTruthy();
  });

  it('should render param one', () => {
    expect(wrapper.queryByTestId('param-one')).toBeTruthy();
  });

  it('should render param two content', () => {
    expect(wrapper.queryByTestId('param-two-content')).toBeTruthy();
  });
});