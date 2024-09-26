export type MenuSection = {
  title: string;
  links: Array<{
    title: string;
    path: string;
    newTab?: boolean;
  }>;
};
