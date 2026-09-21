import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({
	html: false,
	linkify: true,
	typographer: true,
});

export function markdownToHtml(source: string): string {
	return markdown.render(source);
}
