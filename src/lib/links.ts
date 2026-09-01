export const externalLinkProps = (url: string) =>
  url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
