interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'dummy',
    description: `dummy dummy`,
    imgSrc: '/static/images/orangutan.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Brownian Motion Arcsine Laws',
    description: 'Stat 205b final report',
    imgSrc: '/static/images/blogs/brownian-path.png',
    href: '/projects/brownian-arcsine',
  },
]

export default projectsData
