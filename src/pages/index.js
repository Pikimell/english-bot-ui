import { lazy } from 'react';

export default {
  main: {
    HomePage: lazy(() => import('./main/HomePage/HomePage.jsx')),
    SearchPage: lazy(() => import('./main/SearchPage/SearchPage.jsx')),
    CategoryPage: lazy(() => import('./main/CategoryPage/CategoryPage.jsx')),
  },
  groups: {
    CreateGroupPage: lazy(() =>
      import('./groups/CreateGroupPage/CreateGroupPage.jsx'),
    ),
    DetailsPage: lazy(() => import('./groups/DetailsPage/DetailsPage.jsx')),
    GroupListPage: lazy(() =>
      import('./groups/GroupListPage/GroupListPage.jsx'),
    ),
    GroupsPage: lazy(() => import('./groups/GroupsPage/GroupsPage.jsx')),
  },
  notification: {
    AlertPage: lazy(() => import('./notification/AlertPage/AlertPage.jsx')),
    HomeworkPage: lazy(() =>
      import('./notification/HomeworkPage/HomeworkPage.jsx'),
    ),
    NotificationPage: lazy(() =>
      import('./notification/NotificationPage/NotificationPage.jsx'),
    ),
    SpamPage: lazy(() => import('./notification/SpamPage/SpamPage.jsx')),
  },
  posts: {
    CreatePage: lazy(() => import('./posts/CreatePage/CreatePage.jsx')),
    DetailsPage: lazy(() => import('./posts/DetailsPage/DetailsPage.jsx')),
    DraftsPage: lazy(() => import('./posts/DraftsPage/DraftsPage.jsx')),
    PostsPage: lazy(() => import('./posts/PostsPage/PostsPage.jsx')),
  },
  schedule: {
    BlocksPage: lazy(() => import('./schedule/BlocksPage/BlocksPage.jsx')),
    CalendarPage: lazy(() =>
      import('./schedule/CalendarPage/CalendarPage.jsx'),
    ),
    ScheduleListPage: lazy(() =>
      import('./schedule/ScheduleListPage/ScheduleListPage.jsx'),
    ),
    SchedulePage: lazy(() =>
      import('./schedule/SchedulePage/SchedulePage.jsx'),
    ),
  },
  users: {
    DebtorsPage: lazy(() => import('./users/DebtorsPage/DebtorsPage.jsx')),
    ListPage: lazy(() => import('./users/ListPage/ListPage.jsx')),
    SearchPage: lazy(() => import('./users/SearchPage/SearchPage.jsx')),
    UsersPage: lazy(() => import('./users/UsersPage/UsersPage.jsx')),
  },
};
