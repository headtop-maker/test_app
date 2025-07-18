import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getDP } from '../../../shared/lib/getDP';
import { FC } from 'react';

type TAllCoursesButton = {
  handlePress: () => void;
};

const AllCoursesButton: FC<TAllCoursesButton> = ({ handlePress }) => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.themeText}>Выбор темы</Text>
      <TouchableOpacity style={styles.rightItem} onPress={handlePress}>
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
  );
};

const styles = StyleSheet.create({
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

export default AllCoursesButton;
