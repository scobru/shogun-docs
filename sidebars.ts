import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🏯 Introduction',
      collapsed: false,
      items: [
        'intro/overview',
        'intro/architecture',
      ],
    },
    {
      type: 'category',
      label: '📱 Ecosystem Apps',
      collapsed: false,
      items: [
        'apps/overview',
        {
          type: 'category',
          label: '🔐 Auth & Identity',
          items: ['apps/auth'],
        },
        {
          type: 'category',
          label: '💬 Communication',
          items: ['apps/linda', 'apps/gypt'],
        },
        {
          type: 'category',
          label: '📁 Storage & Files',
          items: ['apps/drive', 'apps/wormhole', 'apps/binnu'],
        },
        {
          type: 'category',
          label: '📝 Productivity',
          items: ['apps/notes', 'apps/linko'],
        },
        {
          type: 'category',
          label: '💰 Wallet & Finance',
          items: ['apps/wallet', 'apps/deals', 'apps/l2-bridge'],
        },
        {
          type: 'category',
          label: '🔍 Infrastructure',
          items: ['apps/scan', 'apps/dweb'],
        },
        {
          type: 'category',
          label: '🛠️ Tools',
          items: ['apps/tunecamp'],
        },
      ],
    },
    {
      type: 'category',
      label: '📡 Relay',
      collapsed: false,
      items: [
        'relay/getting-started',
        'relay/configuration',
        'relay/api-reference',
        'relay/provider-guide',
      ],
    },
    {
      type: 'category',
      label: '📜 Smart Contracts',
      collapsed: false,
      items: [
        'contracts/overview',
        'contracts/registry',
        'contracts/storage-deals',
        'contracts/stealth-payments',
      ],
    },
    {
      type: 'category',
      label: '🛠️ SDK & Tools',
      items: [
        'sdk/javascript-sdk',
      ],
    },
    {
      type: 'category',
      label: '📚 Tutorials',
      items: [
        'tutorials/deploy-relay',
        'tutorials/store-data',
      ],
    },
  ],
};

export default sidebars;
