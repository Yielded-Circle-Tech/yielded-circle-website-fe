import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Work } from '@/components/Work'
import { Process } from '@/components/Process'
import { Industries } from '@/components/Industries'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
    </main>
  )
}
