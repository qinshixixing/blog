import fs from 'fs';
import path from 'path';

const articleDir = 'articles';
const pluginPath = path.resolve(__dirname, './plugin');

const articles = fs.readdirSync(articleDir);
const articleRoutes = articles.map(
  (file) => `/article/${file.slice(0, file.lastIndexOf('.'))}`
);

export default function Index(moduleOptions) {
  this.addPlugin({
    src: pluginPath,
    options: {
      content: articles
    }
  });
  this.options.generate.routes = [
    ...this.options.generate.routes,
    ...articleRoutes
  ];
}
