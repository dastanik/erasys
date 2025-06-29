# Nx monorepo and stack

The nx monorepo erasys-monorepo consists of two apps: web based on React and app based on React Native (15.0.1).

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

# Run the web project

nx serve web

# To run the app in development mode:

npx nx start mobile

# On Android simulator/device:

npx nx run-android mobile

# iOS simulator/device:

npx nx run-ios mobile

# Android release build:

npx nx build-android mobile

# iOS (Mac only) release build:

npx nx build-ios mobile

# Web build

npx nx build web