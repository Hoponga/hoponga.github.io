export default function Home() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          good morning
        </h1>
      </div>
      <div className="space-y-4 py-8 text-lg text-gray-950 dark:text-gray-200">
        <p>
          Hello! My name is Kailash. I currently work at{' '}
          <a
            href="https://modal.com"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Modal Labs
          </a>{' '}
          and recently graduated from UC Berkeley with a B.S. in EECS.
        </p>
        <p>
          At Berkeley, I worked with{' '}
          <a
            href="https://people.eecs.berkeley.edu/~jiantao/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Prof. Jiantao Jiao
          </a>{' '}
          on LLM post-training for reasoning, specifically self-distillation and privileged
          information distillation. I interned at NVIDIA a few times, twice in the GPU architecture
          team writing kernels for GEMMs and attention (targetting Blackwell + Rubin), and once in
          the IsaacLab team doing perception research for RL in dexterous manipulation.
        </p>
        <p>
          I love learning new things and working on cool projects. A few topics I'm interested in
          are condensed matter physics, probability theory and analysis, AI + science, and
          performance engineering/GPU programming. I try to keep the{' '}
          <a
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Notes
          </a>{' '}
          page populated with various topics I've been exploring. If anything interests you (or you
          see any glaring mistakes), feel free to reach out!
        </p>

        <p>
          Apart from all that, I enjoy running and biking, playing sitar, reading, and watching
          sports/movies.{' '}
          <a
            href="https://www.youtube.com/watch?v=vzw96_dWtwE"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Rafa is the unambiguous goat
          </a>
          , with the only potential exception to this being Nick Kyrgios.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic dark:border-gray-600">
          கற்றது கைமண் அளவு, கல்லாதது உலகளவு &mdash; What is known is a handful of dirt, but what is
          unknown is the entire world.
        </blockquote>
      </div>
    </div>
  )
}
