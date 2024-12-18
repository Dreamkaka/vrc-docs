import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'koishi-vrc-tools',
  },
  links: [
    {
      text: '安装',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: '指令用法',
      url: '/use',
      active: 'nested-url',
    },
  ],
};
