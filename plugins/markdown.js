import markdownIt from 'markdown-it';
import meta from 'markdown-it-meta';
import hljs from 'highlight.js';

const md = markdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        // return hljs.highlight(lang, str).value;
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>'
        );
      } catch (err) {}
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    );
    // return '';
  }
});
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
