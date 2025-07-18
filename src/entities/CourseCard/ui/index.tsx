import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { TCourcesResponse } from '../../../shared/types';
import { FC } from 'react';
import { getDP } from '../../../shared/lib/getDP';

type TCourseCard = {
  item: TCourcesResponse[0];
};
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

const CouseCard: FC<TCourseCard> = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(item.id)}
    >
      <View
        style={{
          backgroundColor: item.bgColor,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode="contain"
          style={{
            width: windowWidth / 4.5,
            height: windowHeight / 3,
            margin: 20,
          }}
        />
      </View>

      <View>
        <View style={styles.roundView} />
        <View style={styles.absoleText}>
          <Text
            style={styles.coursesText}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.5}
          >
            {item.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 10 },
  coursesText: {
    fontWeight: 'bold',
    color: '#5A5776',
    fontSize: getDP(7),
  },
  absoleText: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: getDP(10),
    left: 0,
    right: 0,
  },
  roundView: {
    backgroundColor: '#e4e8fe',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: getDP(16),
    height: getDP(30),
  },
});

export default CouseCard;
