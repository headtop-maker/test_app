import { StyleSheet, View } from 'react-native';

import TagsList from '../../../features/TagsList/ui';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenParamList } from '../../../shared/types';

import AllCoursesButton from '../../../entities/AllCoursesButton/ui';
type ProfileScreenRouteProp = RouteProp<ScreenParamList, 'Tags'>;

function TagsScreen() {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();
  const courses = route.params?.fetchCourses;

  return (
    <View style={styles.container}>
      <AllCoursesButton handlePress={() => navigation.navigate('Courses')} />
      {courses && <TagsList data={courses} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TagsScreen;
