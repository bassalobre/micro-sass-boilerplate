import {
  HeroActionLink,
  HeroActions,
  HeroContent,
  HeroDescription,
  Hero,
  HeroTitle,
} from '@/components/landing-page/hero'
import {
  About,
  AboutActionLink,
  AboutActions,
  AboutContent,
  AboutDescription,
  AboutDescriptionText,
  AboutDescriptionTitle,
} from '@/components/landing-page/about'
import {
  TestimonialCard,
  TestimonialCardDescription,
  TestimonialCardHeader,
  Testimonials,
  TestimonialsCarousel,
  TestimonialsHeader,
} from '@/components/landing-page/testimonials'
import {
  Pricing,
  PricingCard,
  PricingContent,
  PricingHeader,
  PricingHeaderDescription,
  PricingHeaderTitle,
} from '@/components/landing-page/pricing'
import {
  Faq,
  FaqHeader,
  FaqItem,
  FaqItems,
} from '@/components/landing-page/faq'
import {
  Product,
  ProductDescription,
  ProductDescriptionText,
  ProductDescriptionTitle,
  ProductSkill,
  ProductSkills,
} from '@/components/landing-page/product'
import {
  Header,
  HeaderLink,
  HeaderLinks,
} from '@/components/landing-page/header'
import {
  Footer,
  FooterActionLink,
  FooterActions,
  FooterDescription,
} from '@/components/landing-page/footer'
import BrandLink from '@/components/ui/brand-link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-[100dvh]">
      <Header>
        <BrandLink />
        <HeaderLinks>
          <HeaderLink title="Product" href="#product" />
          <HeaderLink title="About" href="#about" />
          <HeaderLink title="Testimonials" href="#testimonials" />
          <HeaderLink title="Pricing" href="#pricing" />
          <HeaderLink title="FAQ" href="#faq" />
        </HeaderLinks>
      </Header>

      <Hero>
        <HeroContent>
          <HeroTitle title="Build your component library" />
          <HeroDescription description="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source." />
        </HeroContent>
        <HeroActions>
          <HeroActionLink href="/login" title="Get Started" variant="primary" />
          <HeroActionLink
            href="#product"
            title="Learn more"
            variant="secondary"
          />
        </HeroActions>
      </Hero>

      <Product>
        <ProductDescription>
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            New Product
          </div>
          <ProductDescriptionTitle title="Introducing Project Firefly" />
          <ProductDescriptionText description="The all-in-one platform for building and deploying Jamstack applications. Firefly lets you focus on creating dynamic and interactive web experiences without managing infrastructure." />
        </ProductDescription>
        <ProductSkills>
          <ProductSkill
            title="Rapid Development"
            description="Build sites with your favorite framework and deploy to a global edge network."
          />
          <ProductSkill
            title="Seamless Integration"
            description="Connect to your CI/CD pipeline and automate previews with every push."
          />
          <ProductSkill
            title="Scale with Ease"
            description="Deliver instant loading sites with built-in caching and scale to handle traffic spikes."
          />
        </ProductSkills>
      </Product>

      <About>
        <Image
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          width="550"
          height="310"
          src="/placeholder.svg"
        />
        <AboutContent>
          <AboutDescription>
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Collaboration
            </div>
            <AboutDescriptionTitle title="Faster iteration. More innovation." />
            <AboutDescriptionText description="The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration." />
          </AboutDescription>
          <AboutActions>
            <AboutActionLink href="#" title="Contact Sales" variant="primary" />
            <AboutActionLink
              href="#"
              title="Tour the Platform"
              variant="secondary"
            />
          </AboutActions>
        </AboutContent>
      </About>

      <Testimonials>
        <TestimonialsHeader
          title="Customers Love Us"
          description="Don't just take our word for it. Here's what our customers are saying about us."
        />
        <TestimonialsCarousel>
          {[...Array(3)].map((_, index) => (
            <TestimonialCard key={index}>
              <TestimonialCardHeader
                name="Alice Smith"
                role="CEO, @acmecorp"
                avatar="/placeholder.svg"
              />
              <TestimonialCardDescription description="Our team has been using the platform for a few months now, and it has completely transformed the way we collaborate. The interface is intuitive, and the features are robust. We've seen a significant improvement in our productivity since we started using it. Highly recommended!" />
            </TestimonialCard>
          ))}
        </TestimonialsCarousel>
      </Testimonials>

      <Pricing>
        <PricingHeader>
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Plans that scale with you
          </div>
          <PricingHeaderTitle title="Flexible pricing for every team" />
          <PricingHeaderDescription description="Choose the perfect plan for your needs. All plans include unlimited users and projects." />
        </PricingHeader>
        <PricingContent>
          <PricingCard
            name="Basic"
            description="For small teams just getting started"
            price="$9/user/mo"
            benefits={['Unlimited projects', '3 team members', 'Basic support']}
          />
          <PricingCard
            name="Pro"
            description="For growing teams that need more advanced features"
            price="$19/user/mo"
            benefits={[
              'Unlimited projects',
              '10 team members',
              'Advanced support',
            ]}
          />
          <PricingCard
            name="Enterprise"
            description="For large organizations with advanced security and compliance needs"
            price="$29/user/mo"
            benefits={[
              'Unlimited projects',
              'Unlimited team members',
              '24/7 premium support',
            ]}
          />
        </PricingContent>
      </Pricing>

      <Faq>
        <FaqHeader
          title="Frequently Asked Questions"
          description="Got a question? We've got answers. If you have some other questions, see our support center."
        />
        <FaqItems>
          <FaqItem
            title="What can I build with this platform?"
            description="You can build a wide range of applications, including websites, APIs, microservices, and more. The platform supports popular frameworks and languages, allowing you to work with the tools you already know and love."
          />
          <FaqItem
            title="How do I get started with the platform?"
            description="Getting started is easy. Simply sign up for an account and follow the onboarding process. You'll be guided through the setup steps, and our documentation provides detailed instructions for creating and deploying your projects."
          />
          <FaqItem
            title="Can I use my own domain with the platform?"
            description="Yes, you can use your own custom domain with the platform. Once you have configured your domain settings, you can easily add your domain to your projects using the platform's dashboard. Our support team is also available to assist you with the process if you need help."
          />
          <FaqItem
            title="Is the platform secure?"
            description="Yes, security is a top priority for the platform. We employ industry best practices to protect your data and ensure the integrity of your applications. Our infrastructure is designed with security in mind, and we provide features such as SSL encryption, DDoS protection, and more to keep your projects safe."
          />
        </FaqItems>
      </Faq>

      <Footer>
        <FooterDescription description="© 2024 Bassalobres' Company. All rights reserved." />
        <FooterActions>
          <FooterActionLink href="#" title="Terms of Service" />
          <FooterActionLink href="#" title="Privacy" />
        </FooterActions>
      </Footer>
    </main>
  )
}
