import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://smtn-research.github.io/website'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  // A consistent last modified date to use for pages that don't otherwise have
  // one.
  const currentLastModified = new Date().toISOString().split('T')[0];

  let routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentLastModified
  }))

  let sitemap = [...routes, ...blogs];

  sitemap.push({
    url: `${baseUrl}/testimonials`,
    lastModified: currentLastModified,
  });
  sitemap.push({
    url: `${baseUrl}/people`,
    lastModified: currentLastModified,
  });

  return sitemap;
}
