import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Brownian Motion Arcsine Laws' })

export default function BrownianArcsine() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Brownian Motion Arcsine Laws
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Stat 205b final report</p>
      </div>
      <div className="prose max-w-none py-8 dark:prose-invert">
        <p>
          {/* Add your description here */}
          This paper was my final report for Stat 205b at UC Berkeley and explores the arcsine laws
          for Brownian motion, the somewhat counterintuitive result that the distribution of a
          symmetric random walk's time spent is a) concentrated at its extremes and b) the same
          distribution as the running maximum.
        </p>
      </div>
      <div className="space-y-4 py-8">
        <a
          href="/static/papers/brownian-arcsine.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-300"
        >
          Open PDF ↗
        </a>
        <iframe
          title="Brownian Motion Arcsine Laws PDF"
          src="/static/papers/brownian-arcsine.pdf"
          className="h-[80vh] w-full rounded-lg border border-gray-200 dark:border-gray-700"
        />
      </div>
    </div>
  )
}
