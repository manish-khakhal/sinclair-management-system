import * as ROUTES from './routes';

const PUBLIC_LINKS = [
  {
    path: ROUTES.LANDING,
    text: 'Home'
  },
  {
    path: ROUTES.SIGN_UP,
    text: 'Sign Up'
  },
  {
    path: ROUTES.LOG_IN,
    text: 'Log In'
  }
];

const ADMIN_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Editors'
  },
  {
    path: ROUTES.STUDENTS,
    text: 'Reporters'
  },
  {
    path: ROUTES.JOBS,
    text: 'Assignments'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

const COMPANY_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.STUDENTS,
    text: 'Reporters'
  },
  {
    path: ROUTES.JOBS,
    text: 'Assignments'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

const STUDENT_LINKS = [
  {
    path: ROUTES.HOME,
    text: 'Home'
  },
  {
    path: ROUTES.COMPANIES,
    text: 'Editors'
  },
  {
    path: ROUTES.JOBS,
    text: 'Assignments'
  },
  {
    path: ROUTES.PROFILE,
    text: 'Profile'
  }
];

export { PUBLIC_LINKS, ADMIN_LINKS, COMPANY_LINKS, STUDENT_LINKS };
