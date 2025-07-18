import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type TTagButton = {
  isCuurentTag: boolean;
  item: string;
  handleNavigate: () => void;
};

const TagButton: FC<TTagButton> = ({ isCuurentTag, handleNavigate, item }) => {
  return (
    <TouchableOpacity
      style={[
        styles.chooseTheme,
        {
          backgroundColor: isCuurentTag ? '#5bbb73' : '#ffffff',
          borderWidth: isCuurentTag ? 0 : 1.5,
        },
      ]}
      onPress={handleNavigate}
    >
      <Text
        style={[
          styles.tagText,
          {
            color: isCuurentTag ? '#ffffff' : '#3a414b',
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagText: { fontWeight: 'bold', fontSize: 20 },
  chooseTheme: {
    borderColor: '#c5d0e6',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
  },
});

export default TagButton;
