import MarkdownIt from 'markdown-it';
import meta from 'markdown-it-meta';

const md = new MarkdownIt();
md.use(meta);

export default (ctx, inject) => {
  inject('markdown', (content) => {
    const html = md.render(content);
    return {
      ...md.meta,
      html
    };
  });
};
