import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EnrollmentList } from "./enrollment/EnrollmentList";
import { EnrollmentCreate } from "./enrollment/EnrollmentCreate";
import { EnrollmentEdit } from "./enrollment/EnrollmentEdit";
import { EnrollmentShow } from "./enrollment/EnrollmentShow";
import { ModuleModelList } from "./moduleModel/ModuleModelList";
import { ModuleModelCreate } from "./moduleModel/ModuleModelCreate";
import { ModuleModelEdit } from "./moduleModel/ModuleModelEdit";
import { ModuleModelShow } from "./moduleModel/ModuleModelShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserPreferenceList } from "./userPreference/UserPreferenceList";
import { UserPreferenceCreate } from "./userPreference/UserPreferenceCreate";
import { UserPreferenceEdit } from "./userPreference/UserPreferenceEdit";
import { UserPreferenceShow } from "./userPreference/UserPreferenceShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LMS Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Enrollment"
          list={EnrollmentList}
          edit={EnrollmentEdit}
          create={EnrollmentCreate}
          show={EnrollmentShow}
        />
        <Resource
          name="ModuleModel"
          list={ModuleModelList}
          edit={ModuleModelEdit}
          create={ModuleModelCreate}
          show={ModuleModelShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserPreference"
          list={UserPreferenceList}
          edit={UserPreferenceEdit}
          create={UserPreferenceCreate}
          show={UserPreferenceShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
