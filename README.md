# Nx monorepo and stack

The nx monorepo erasys-monorepo consists of two apps: web based on React and app based on React Native.

It uses the following stack:
✔ Unit test runner: jest
✔ End to end (E2E) test runner: playwright
✔ ESLint for linter
✔ Prettier for code formatting
✔ CI provider: gitlab
✔ Vite to build

React Web:
✔ Tailwind for stylesheets
✔ Routing
✔ Port 4200

Nx was chosen due to the following reasons:
✔ Previous experience with nx
✔ Extensive documentation in comparison to e.g. Turborepo
✔ Performance (due to better caching) and Scalability
✔ Extensive plugin ecosystem and larger community

# About the project

A shared module to fetch user pictures from a remote server is implemented.
A few fetched images in each app are displayed
User data are fetched from:
GET https://www.hunqz.com/api/opengrid/profiles/msescortplus
Profile pictures source URL:
https://www.hunqz.com/img/usr/original/0x0/${url_token}.jpg
CORS issues are addressed

The following reusable components are created:

The following tests are created:

# Run the project

nx serve web