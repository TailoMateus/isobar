# Summary

- [About](#🔖-About)
- [Technologies used](#🛠-Technologies-used)
- [Folder structure](#🏢-Folder-structure)
- [Architecture](#🏢-Architecture)
- [Installation for development](#🗂-Installation-for-development)
- [Test improvements](#🚧-Test-improvements)
- [General information](#🚀-General-information)

---

## 🔖 About

Isobar is an application to list and filter details of music bands, it's even possible to see your favorite albums.

---

## 🛠 Technologies used

The project was developed using the following technologies

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Styled Components](https://www.styled-components.com/)
- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Axios](https://github.com/axios/axios)
- [NProgress](https://github.com/rstacruz/nprogress)

---

## 🏢 Folder structure

```bash
src
  components/*
  helpers/*
  hooks/*
  pages/
    bands/*
    _app.tsx
    _document.tsx
  repositories/*
  screens/
    BandDetails/*
    BandsList/*
  services/*
  styles/*
  tests/*
  types/*
```

---

## 🏢 Architecture

[Click here for more information about the flowchart](https://whimsical.com/architecture-Hy8GbFefNJhwkpjjiUBVrs)

![Architecture](https://cdn-images-1.medium.com/max/800/1*u0GKTn5QMafpDupriAz-Lg.png)

---

## 🗂 Installation for development

- Install `package.json` dependencies using Yarn:
    `yarn install`

- Run server at url: http://localhost:3000
    `yarn dev`

- Run project tests:
    `yarn test`

- Run storybook documentation:
    `yarn storybook`

---

## 🚧 Test improvements

- In the band details there is a list of albums by band, it would be more interesting if the /albums endpoint was /albums/:id
- To use image rendering resources with next, the assets should be in .svg
- It's interesting to have a link to Figma (or another inspection tool) to be completely faithful to the design

---

## 🚀 General information

- The project was started with `create-next-app`.
- Use some editor that supports `editorConfig`.
- Used the API [Bands Labs](https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api)
