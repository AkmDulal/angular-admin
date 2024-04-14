import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard/user-dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Trip list',
          route: '/dashboard/trip-list',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'User management',
          route: '/folders',
          children: [
            { label: 'Admin', route: '/folders/current-files' },
            { label: 'Transporter', route: '/folders/download' },
            { label: 'Customer', route: '/folders/trash' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'User payment',
          route: '/dashboard/nfts',
        },
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'SaaS',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Analytics',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/gift.svg',
          label: 'Manage rate',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Invoice',
          route: '/gift',
        },
      ],
    },
    // {
    //   group: 'Base',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/chart-pie.svg',
    //       label: 'Dashboard',
    //       route: '/dashboard',
    //       children: [
    //         { label: 'Podcast', route: '/dashboard/podcast' },
    //         { label: 'Nfts', route: '/dashboard/nfts' },
    //       ],
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/lock-closed.svg',
    //       label: 'Auth',
    //       route: '/auth',
    //       children: [
    //         { label: 'Sign up', route: '/auth/sign-up' },
    //         { label: 'Sign in', route: '/auth/sign-in' },
    //         { label: 'Forgot Password', route: '/auth/forgot-password' },
    //         { label: 'New Password', route: '/auth/new-password' },
    //         { label: 'Two Steps', route: '/auth/two-steps' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   group: 'Collaboration',
    //   separator: true,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/download.svg',
    //       label: 'Download',
    //       route: '/download',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/gift.svg',
    //       label: 'Gift Card',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/users.svg',
    //       label: 'Users',
    //       route: '/users',
    //     },
    //   ],
    // },
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/folder.svg',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
