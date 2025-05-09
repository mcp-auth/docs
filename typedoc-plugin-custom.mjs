// @ts-check
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.renderer.on(
    MarkdownPageEvent.BEGIN,
    /** @param {import('typedoc-plugin-markdown').MarkdownPageEvent} page */
    (page) => {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      page.frontmatter = {
        // eslint-disable-next-line camelcase
        sidebar_label: page.url === 'README.md' ? 'Node.js SDK' : page.model.name,
        ...page.frontmatter,
      };
    }
  );
}
