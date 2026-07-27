import { assetPath } from '@/lib/site'

export function PhonePreview({ app, large = false }: { app: any, large?: boolean }) {
  return <div className={`phone-shell relative ${large ? 'h-[620px] w-[310px]' : 'h-[470px] w-[235px]'}`}>
    <div className="phone-screen bg-white">
      {app.screens?.[0] ? <img src={assetPath(app.screens[0])} alt={`${app.name} UI`} className="h-full w-full object-cover object-top" /> : <div className="relative flex h-full flex-col p-5 pt-12" style={{ background: app.color, color: app.accent }}><div className="flex items-center justify-between text-[10px] font-bold"><span>9:41</span><span>•••</span></div><div className="mt-12"><p className="text-[10px] uppercase tracking-[.2em] opacity-60">{app.category}</p><h3 className="serif mt-2 text-4xl">{app.name}</h3></div><div className="mt-auto rounded-[24px] bg-white/40 p-4"><span className="text-4xl font-light">24</span><p className="mt-2 text-[10px] opacity-60">MADE WITH CARE</p></div></div>}
    </div>
  </div>
}
