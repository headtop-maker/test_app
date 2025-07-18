import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TagsList from '../../../features/TagsList/ui';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenParamList } from '../../../shared/types';
import { getDP } from '../../../shared/lib/getDP';
type ProfileScreenRouteProp = RouteProp<ScreenParamList, 'Tags'>;

function TagsScreen() {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();
  const courses = route.params?.fetchCourses;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.themeText}>Выбор темы</Text>
        <TouchableOpacity
          style={styles.rightItem}
          onPress={() => navigation.navigate('Courses')}
        >
          <Image
            source={require('../../../shared/assets/png/close.png')}
            resizeMode="contain"
            style={[
              {
                width: getDP(10),
                height: getDP(10),
                marginLeft: getDP(5),
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      {courses && <TagsList data={courses} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  themeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3a414b',
    paddingVertical: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  rightItem: {
    position: 'absolute',
    left: '50%',
  },
});

export default TagsScreen;
