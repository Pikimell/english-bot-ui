import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import pages from '../pages/index';

const { main, users, groups, posts, schedule, notification, plans, statistic } =
  pages;

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* =============================================== */}
        <Route path="/" element={<main.HomePage />} />
        <Route path="/search" element={<main.SearchPage />} />
        <Route path="/categories" element={<main.CategoryPage />} />
        <Route path="/admin" element={<main.AdminPage />} />

        {/* =============================================== */}
        <Route path="/users" element={<users.UsersPage />}>
          <Route path="list" element={<users.ListPage />} />
          <Route path="edit" element={<users.EditPage />} />
          <Route path="debtors" element={<users.DebtorsPage />} />
          <Route path="search" element={<users.SearchPage />} />
        </Route>
        {/* =============================================== */}
        <Route path="/groups" element={<groups.GroupsPage />}>
          <Route path="list" element={<groups.GroupListPage />} />
          <Route path="create" element={<groups.CreateGroupPage />} />
          <Route path=":id" element={<groups.DetailsPage />} />
          <Route path=":id/schedule" element={<groups.SchedulePage />} />
        </Route>
        {/* =============================================== */}
        <Route path="/schedule" element={<schedule.SchedulePage />}>
          <Route path="list" element={<schedule.ScheduleListPage />} />
          <Route path="calendar" element={<schedule.CalendarPage />} />
          <Route path="block" element={<schedule.BlocksPage />} />
          <Route path="absentee-log" element={<schedule.AbsenteePage />} />
          <Route path="visit-log" element={<schedule.VisitPage />} />
        </Route>
        {/* =============================================== */}
        <Route path="/notification" element={<notification.NotificationPage />}>
          <Route path="spam" element={<notification.SpamPage />} />
          <Route path="homework" element={<notification.HomeworkPage />} />
          <Route path="alert" element={<notification.AlertPage />} />
        </Route>
        {/* =============================================== */}
        <Route path="/posts" element={<posts.PostsPage />}>
          <Route path="list" element={<posts.ListPage />} />
          <Route path="create" element={<posts.CreatePage />} />
          <Route path="drafts" element={<posts.DraftsPage />} />
        </Route>
        <Route path="/posts/:id" element={<posts.DetailsPage />} />
        {/* =============================================== */}
        <Route path="/plan" element={<plans.PlansPage />}>
          <Route path="list" element={<plans.ListPage />} />
          <Route path="create" element={<plans.CreatePage />} />
        </Route>
        {/* =============================================== */}
        <Route path="statistics" element={<statistic.StatisticPage />} />
        {/* =============================================== */}

        {/* =============================================== */}
        <Route path="*" element={<main.HomePage />} />
        {/* =============================================== */}
      </Routes>
    </Layout>
  );
};

export default App;
