import { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { getDP } from '../../../shared/lib/getDP';

type TAllTagsButton = {
  handleButton: () => void;
};

const AllTagsButton: FC<TAllTagsButton> = ({ handleButton }) => {
  return (
    <TouchableOpacity
      hitSlop={{
        top: getDP(20),
        bottom: getDP(20),
        left: getDP(20),
        right: getDP(20),
      }}
      style={styles.container}
      onPress={handleButton}
    >
      <Text style={styles.themeText}>Все темы</Text>
      <Image
        source={require('../../../shared/assets/png/arrowDown.png')}
        resizeMode="contain"
        style={{
          width: getDP(10),
          height: getDP(10),
          marginLeft: getDP(5),
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    top: getDP(5),
    padding: getDP(4),
    borderRadius: 50,
    backgroundColor: '#5d38be',
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default AllTagsButton;
