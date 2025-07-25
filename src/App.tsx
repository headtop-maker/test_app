import { createStaticNavigation } from '@react-navigation/native';
import { RootStack } from './app/Navigation/ui';

export const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation />;
}

export default App;
