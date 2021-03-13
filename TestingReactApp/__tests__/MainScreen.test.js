import {act, fireEvent, waitFor} from '@testing-library/react-native';
import {Alert} from 'react-native';
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

describe('<MainScreen />', () => {
  let wrapper;

  const otherComponents = [{name: 'SecondaryScreen', component: SecondaryScreen}];

  beforeEach(() => {
    wrapper = renderWithNavigation(MainScreen, {
        otherComponents
    });
  });

  it('should render the main screen', () => {
    expect(wrapper.queryByTestId('MainScreen')).toBeTruthy();
  });

  it('should render the go to secondary screen button', () => {
    expect(wrapper.queryByTestId('button-to-secondary-screen')).toBeTruthy();
  });

  describe('when go to secondary screen button is pressed', () => {
    it('it should render SecondaryScreen ', async () => {
      act(() => {
        fireEvent.press(wrapper.queryByTestId('button-to-secondary-screen'));
      });
      await waitFor(() =>
        expect(wrapper.queryByTestId('SecondaryScreen')).toBeTruthy(),
      );
    });
  });

  it('should render the alert button', () => {
    expect(wrapper.queryByTestId('alert-button')).toBeTruthy();
  });

  describe('when take alert button is pressed', () => {
    it('it should render an Alert ', async () => {
      const alertSpy = jest.spyOn(Alert, 'alert');
      act(() => {
        fireEvent.press(wrapper.queryByTestId('alert-button'));
      });
      await waitFor(() => expect(alertSpy).toHaveBeenCalled());
    });
  });
});