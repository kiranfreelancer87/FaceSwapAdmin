export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      }
    ]
  },
  {
    id: 'master',
    title: 'Master',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'category',
        title: 'Category',
        type: 'item',
        url: '/master/category',
        icon: 'feather icon-bookmark'
      },
      {
        id: 'image',
        title: 'Image',
        type: 'item',
        url: '/master/image-upload',
        icon: 'feather icon-edit'
      },
    ]
  },
];
