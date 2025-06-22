import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from '@/types.ts'

export const SITE: SiteConfiguration = {
  title: 'Barebones',
  description:
    'A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.',
  href: 'https://barebones.superwebthemes.com',
  author: 'SuperWeb Development Inc.',
  locale: 'en-CA',
}

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: '/blog',
    label: 'Blog',
  },
}

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: 'Email',
    href: 'mailto:ttl@trevortylerlee.com',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/trevortylerlee',
  },
  twitter: {
    label: 'X (formerly Twitter)',
    href: 'https://twitter.com/boogerbuttcheek',
  },
}
