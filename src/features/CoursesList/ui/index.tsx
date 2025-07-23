import { FlatList, StyleSheet } from 'react-native';
import { TCourcesResponse } from '../../../shared/types';
import { FC, memo, useCallback } from 'react';
import CouseCard from '../../../entities/CourseCard/ui';

type TCourcesList = {
  courses: TCourcesResponse;
};

const CoursesList: FC<TCourcesList> = ({ courses }) => {
  console.log('CoursesList rendered');
  const renderCourceItem = useCallback(
    ({ item }: { item: TCourcesResponse[0] }) => {
      return <CouseCard item={item} />;
    },
    [],
  );

  return (
    <>
      <FlatList
        data={courses}
        keyExtractor={item => 'currentCourse' + item.id}
        renderItem={renderCourceItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  list: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default memo(CoursesList);
