import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenParamList } from '../../../shared/types';
import CoursesScreen from '../../../screens/CoursesScreen/ui';
import TagsScreen from '../../../screens/TagsScreen/ui';

export const RootStack = createNativeStackNavigator({
  screens: {
    Courses: {
      screen: CoursesScreen,
      options: {
        headerShown: false,
        contentStyle: { backgroundColor: '#7446EE' },
      },
    },
    Tags: {
      screen: TagsScreen,
      options: {
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      },
    },
  },
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}
