import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import CifraHeader from '@/components/sections/header'
import MetricsLogos from '@/components/sections/metrics-logos'
import Features from '@/components/sections/features'
import HowItWorks from '@/components/sections/how-it-works'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Testimonials from '@/components/sections/testimonials'
import Pricing from '@/components/sections/pricing'
import Integrations from '@/components/sections/integrations'
import Blog from '@/components/sections/blog'
import CtaFooter from '@/components/sections/cta-footer'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <main className="min-h-screen">
      <CifraHeader dict={dict} locale={locale as Locale} />
      <MetricsLogos dict={dict} />
      <Features dict={dict} />
      <HowItWorks dict={dict} />
      <WhyChooseUs dict={dict} />
      <Testimonials dict={dict} />
      <Pricing dict={dict} locale={locale as Locale} />
      <Integrations dict={dict} />
      <Blog dict={dict} locale={locale as Locale} />
      <CtaFooter dict={dict} />
    </main>
  )
}
