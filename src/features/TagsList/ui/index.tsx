import { useNavigation } from '@react-navigation/native';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { TCourcesResponse } from '../../../shared/types';
import { uniqTags } from '../../../shared/lib/uniqTags';
import TagButton from '../../../entities/TagButton/ui';

type TagsList = {
  data: TCourcesResponse;
};

const TagsList: FC<TagsList> = ({ data }) => {
  const [currentTag, setCurrentTag] = useState<string | undefined>(undefined);
  const navigation = useNavigation();
  console.log('MyComponent rendered', data);

  const handleNavigate = useCallback(
    (tag: string) => {
      setCurrentTag(tag);
      if (data) {
        navigation.navigate('Courses', { currentFilter: tag });
      }
    },
    [data, navigation],
  );
  const memoTags = useMemo(() => uniqTags(data), [data]);

  const renderItem = useCallback(
    ({ item }: { item: string }) => {
      return (
        <TagButton
          isCuurentTag={item === currentTag}
          item={item}
          handleNavigate={() => handleNavigate(item)}
        />
      );
    },
    [currentTag, handleNavigate],
  );

  return (
    <>
      <FlatList
        data={memoTags}
        keyExtractor={(_, index) => 'currentTags' + index}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: { fontWeight: 'bold', fontSize: 20 },
  list: { width: '50%' },
  chooseTheme: {
    borderColor: '#c5d0e6',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
  },
});

export default memo(TagsList);
