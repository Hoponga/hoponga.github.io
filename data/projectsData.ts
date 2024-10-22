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
]

export default projectsData
