export interface Project {
  id: number,
  title: string,
  badge: string,
  img: string,
  sites: string,
  desc: string,
  issue: number,
  resolved: number,
  class?:string,
  comment: number,
  like: number,
  progress: number,
  customers_img1: string,
  customers_img2: string,
  customers_img3: string,
  projectLaval: string,
}

export const ProjectList: Project[] = [
  {
    id: 1,
    title: 'Endless admin Design',
    badge: 'Doing',
    class:'primary',
    img: 'assets/images/user/3.jpg',
    sites: 'Themeforest, australia',
    desc: 'Endless Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 12,
    resolved: 5,
    comment: 7,
    like: 10,
    progress: 70,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '70%'
  },
  {
    id: 2,
    title: 'Universal admin Design',
    badge: 'Done',
    class:'success',
    img: 'assets/images/user/5.jpg',
    sites: 'Envato, australia',
    desc: 'Universal Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 24,
    resolved: 24,
    comment: 40,
    like: 3,
    progress: 100,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },

  {
    id: 3,
    title: 'Poco admin Design',
    badge: 'Done',
    class:'success',
    img: 'assets/images/user/3.jpg',
    sites: 'Envato, australia',
    desc: 'Poco Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 40,
    resolved: 40,
    comment: 20,
    like: 2,
    progress: 100,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },

  {
    id: 4,
    title: 'Universal admin Design',
    badge: 'Done',
    class:'success',
    img: 'assets/images/user/4.jpg',
    sites: 'Envato, australia',
    desc: 'Universal Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 24,
    resolved: 24,
    comment: 40,
    like: 3,
    progress: 100,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },
  {
    id: 5,
    title: 'Zeta admin Design ',
    badge: 'Doing',
    class:'primary',
    img: 'assets/images/user/1.jpg',
    sites: 'Themeforest, australia',
    desc: 'Zeta Admin is a full featured, multipurpose, premium bootstrap admin template.',
    issue: 12,
    resolved: 5,
    comment: 7,
    like: 10,
    progress: 70,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '70%'
  },
  {
    id: 6,
    title: 'Poco admin Design',
    badge: 'Done',
    class:'success',
    img: 'assets/images/user/5.jpg',
    sites: 'Themeforest, australia',
    desc: 'Tivo Admin is a full featured, multipurpose, premium bootstrap admin template',
    issue: 40,
    resolved: 40,
    comment: 20,
    like: 2,
    progress: 100,
    customers_img1: 'assets/images/user/3.jpg',
    customers_img2: 'assets/images/user/5.jpg',
    customers_img3: 'assets/images/user/1.jpg',
    projectLaval: '100%'
  },
];