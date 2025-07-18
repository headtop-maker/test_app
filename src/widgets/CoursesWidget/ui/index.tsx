import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import CoursesList from '../../../features/CoursesList/ui';
import AllTagsButton from '../../../entities/AllTagsButton/ui';
import { useFetch } from '../../../shared/hooks/useFetch';
import { ScreenParamList } from '../../../shared/types';
import { getDP } from '../../../shared/lib/getDP';
type ProfileScreenRouteProp = RouteProp<ScreenParamList, 'Courses'>;

function CoursesWidget() {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();
  const filterTag = route.params?.currentFilter;
  const { data, loading } = useFetch();

  return (
    <View style={styles.container}>
      <AllTagsButton
        handleButton={() =>
          data && navigation.navigate('Tags', { fetchCourses: data })
        }
      />
      {loading && <ActivityIndicator size={'large'} />}

      {data && (
        <CoursesList
          courses={
            filterTag
              ? data.filter(item => item.tags.includes(filterTag))
              : data
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  themeText: {
    fontWeight: 'bold',
    fontSize: getDP(16),
    color: '#FFFFFF',
  },
});

export default CoursesWidget;
