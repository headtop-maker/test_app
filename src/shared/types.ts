export type TCourcesResponse = {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}[];

export type ScreenParamList = {
  Tags: undefined | { fetchCourses: TCourcesResponse };
  Courses: undefined | { currentFilter: string };
};
