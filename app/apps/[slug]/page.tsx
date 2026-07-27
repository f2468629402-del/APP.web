import apps from '@/data/apps.json'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AppIcon } from '@/components/AppIcon'
import { PhonePreview } from '@/components/PhonePreview'
import { FadeIn } from '@/components/FadeIn'
import { ScreenshotGallery } from '@/components/ScreenshotGallery'

export function generateStaticParams() { return apps.map(app => ({ slug: app.slug })) }

export default function AppDetail({ params }: { params: { slug: string } }) {
  const app = apps.find(item => item.slug === params.slug)
  if (!app) notFound()
  return <main>
    <section className="grid min-h-[760px] items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1fr_1fr] lg:px-[10%]" style={{ backgroundColor: app.color }}>
      <FadeIn>
        <Link href="/apps" className="text-xs uppercase tracking-[.2em] opacity-60">← Back to all apps</Link>
        <div className="mt-20">
          <AppIcon name={app.name} color="#ffffff80" accent={app.accent} size="lg" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[.25em]" style={{ color: app.accent }}>{app.category}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[.18em]" style={{ color: app.accent }}>{app.englishName}</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-.06em] sm:text-7xl" style={{ color: app.accent }}>{app.name}</h1>
          <p className="mt-8 max-w-md text-lg leading-8" style={{ color: app.accent }}>{app.description}</p>
          <a href={app.apk} download className="mt-10 inline-flex items-center gap-5 rounded-full bg-[#11110f] px-7 py-4 text-sm text-white transition hover:bg-[#353531]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg">↓</span>
            <span><strong className="block font-medium">下载 Android APK</strong><small className="mt-1 block text-xs text-white/55">Handmade Magic World · {app.apkSize}</small></span>
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={.15} className="flex justify-center lg:justify-end"><PhonePreview app={app} large /></FadeIn>
    </section>
    <ScreenshotGallery app={app} />
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <div className="grid gap-16 md:grid-cols-[.7fr_1.3fr]">
        <p className="text-xs uppercase tracking-[.24em] text-[#77736b]">Inside {app.name}</p>
        <div>
          <h2 className="max-w-2xl text-4xl leading-tight tracking-[-.05em] sm:text-6xl">From image<br /><span className="serif italic">to handmade.</span></h2>
          <div className="mt-16 divide-y hairline">{app.features.map((feature, i) => <div key={feature} className="flex gap-8 py-6"><span className="text-xs text-[#77736b]">0{i + 1}</span><p className="text-lg">{feature}</p></div>)}</div>
        </div>
      </div>
      <div className="mt-28 border-t hairline pt-8"><div className="grid gap-8 text-sm sm:grid-cols-3"><div><p className="text-xs uppercase tracking-[.2em] text-[#77736b]">Technology</p><p className="mt-4">{app.stack.join(' · ')}</p></div><div><p className="text-xs uppercase tracking-[.2em] text-[#77736b]">Current version</p><p className="mt-4">{app.version}</p></div><div><p className="text-xs uppercase tracking-[.2em] text-[#77736b]">Android package</p><a href={app.apk} download className="mt-4 inline-block underline underline-offset-4">Download APK ↓</a></div></div></div>
    </section>
  </main>
}
