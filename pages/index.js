import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Home</h2>

      <p>
        This is a Next.js project that is instrumented with Leanplum tracking.
      </p>

      <h3>Implementation details:</h3>
      <ul>
        <li>
            The layout component <code>components/layout.js</code> is used by both <code>pages/index.js</code> and <code>pages/products/index.js</code>.
        </li>
        <li>
            The layout includes a dynamic component that loads the Leanplum SDK, <code>components/tracking.js</code>.
        </li>
        <li>
            When included, the tracking component sets up the SDK options, starts a user session, and tracks a page view event.
        </li>
      </ul>
    </div>
  )
}
