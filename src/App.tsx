import Signage from './signage/Signage';
import {useRecoilValue} from 'recoil';
import {pageState} from './states/states.js';
import {Pages} from './Constants';
import InfoDeskSlider from './slider/InfoDeskSlider';

function App() {
  const page = useRecoilValue(pageState);
  switch (page) {
    case Pages.SECURITY_RIGHT:
    case Pages.SECURITY_LEFT:
      return <Signage page={page} />;
    case Pages.INFO_DESK_SLIDER:
      return <InfoDeskSlider />;
    default:
      return null;
  }
}

export default App;
