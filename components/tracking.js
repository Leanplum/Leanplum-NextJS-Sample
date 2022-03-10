import dynamic from 'next/dynamic'

export const Tracking = {
    Start: dynamic(
        () => import('./tracking/start'),
        { ssr: false }
    )
}
