import Image from "next/image";
import Link from "next/link";

import { pillars, donateSiteLink, socials, faqs } from "@/data/content";
import { initiatives } from "@/data/initiatives";
import Graphic from "@/components/Graphic";
import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import ImageSwipe from "@/components/ImageSwipe";
import Campaign from "@/components/Campaign";
import Highlight from "@/components/Highlight";
import DonateForm from "@/components/form/DonateForm";
import EmailForm from "@/components/form/EmailForm";
import {
  Container,
  ContainerTitle,
  ContainerContent,
} from "@/components/ui/Container";
import { Emphasis } from "@/components/ui/Emphasis";
import { HandHelping, Info, Sprout } from "lucide-react";
import FAQSection from "@/components/section/FAQSection";
import DonateSection from "@/components/section/DonateSection";
import Givebutter from "@/components/Givebutter";

export default function Home() {
  return (
    <section className="w-full flex min-h-screen flex-col gap-24 justify-between py-[5vh] lg:py-[10vh]">
      <header className="relative w-full flex flex-col gap-8 items-center justify-center text-center max-w-[720px] m-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-8">
            <span className="text-base xl:text-lg font-medium text-center opacity-50">
              WE ARE OMELORA
            </span>
            <h1 className="inline-block xl:text-7xl tracking-tight ft-cooper">
              Uplifting youth with <br className="hidden lg:inline" /> education
              & advocacy
            </h1>
          </div>
          <p className="text-base lg:text-lg">
            Omelora is a word that means &quot;One who does good for their
            community.&quot; Omelora mobilizes youth to{" "}
            <span className="txt-gradient">create</span> a brighter future
            through social good, health initiatives, and{" "}
            <span className="txt-gradient">educational</span> advocacy.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Button variant="outline" path="/who-we-are">
            Learn More
          </Button>
          <Button path="https://forms.gle/gXmJbBN6RKRKfs16A">
            Become a Volunteer
          </Button>
        </div>
      </header>

      <section className="w-full flex flex-col lg:flex-row-reverse items-center gap-10 max-w-[960px] m-auto">
        <section className="relative w-full flex flex-col gap-3">
          <h2 className="ft-cooper">
            We inspire and engage young people to take positive action
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-base lg:text-lg">
              We are young people working towards{" "}
              <span className="txt-gradient">creating</span> better futures for
              youth in need across the globe. We create informative content that
              resonates with young people today, to empower those looking to{" "}
              <span className="txt-gradient">make a difference</span>.
              <br />
              <br />
              With a focus on social good, health initiatives, and education, we
              aim to help chip away at a{" "}
              <span className="txt-gradient">better</span> future tomorrow, for
              those in need, today.
            </p>
          </div>
        </section>
        <section className="w-full relative flex flex-col lg:px-0 m-auto">
          <ImageSwipe
            content={[
              {
                image: "/img/dwo-img1.jpg",
                alt: "Children at the Divine Wounds Orphanage in Enugu, Nigeria.",
              },
              {
                image: "/img/dwo-img1.jpg",
                alt: "Children at the Divine Wounds Orphanage in Enugu, Nigeria.",
              },
              {
                image: "/img/dwo-img2.jpg",
                alt: "School Children at the Divine Wounds Orphanage.",
              },
              {
                image: "/img/dwo-img3.jpg",
                alt: "Group Photo at the Divine Wounds Orphanage.",
              },
            ]}
          />
        </section>
      </section>

      <section className="w-full flex flex-col items-center justify-center gap-5">
        <h2 className="ft-cooper text-center">Our impact</h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl lg:text-4xl font-semibold text-center">
              500+
            </span>
            <span className="text-base lg:text-lg text-center">
              school supplies donated
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl lg:text-4xl font-semibold text-center">
              $900+
            </span>
            <span className="text-base lg:text-lg text-center">raised</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl lg:text-4xl font-semibold text-center">
              50
            </span>
            <span className="text-base lg:text-lg text-center">volunteers</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl lg:text-4xl font-semibold text-center">
              400+
            </span>
            <span className="text-base lg:text-lg text-center">
              books raised
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl lg:text-4xl font-semibold text-center">
              200+
            </span>
            <span className="text-base lg:text-lg text-center">
              care items raised
            </span>
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-5">
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8d7602e93754821bd31bc7e27ffe5c4364a98ed3_img_3021.jpeg"
            alt="Volunteers working for Omelora"
            className="w-[300px] h-auto rounded-lg"
          />
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/2e25ccd6eaa138f6495b2aa119dac34fa9365502_img_3016.jpeg"
            alt="Founder with care items donations"
            className="w-[300px] h-auto rounded-lg"
          />
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4b154637e77c34dfb8edfb968ca4dffafc59d2d7_img_3019.jpeg"
            alt="Care items donations"
            className="w-[300px] h-auto rounded-lg"
          />
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f2bcece96f57b31b1f513b22fdc6c2759b6eccec_img_3341.jpg"
            alt="Green school supplies donations"
            className="w-[300px] h-[300px] rounded-lg"
          />
          <img
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/05c6ac3c7ecd01aab5c40ffbc2e8122cec85d8ce_img_3344.jpg"
            alt="Purple school supplies donations"
            className="w-[300px] h-[300px] rounded-lg"
          />
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="w-full px-5 py-[5vh] xl:px-[10vw] bg-[--clr-grey-extralight] w-full flex flex-col lg:grid grid-cols-2 gap-5  items-center justify-center"
      >
        {pillars.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  gap-3 bg-[--clr-base] border border-[--clr-grey-light] rounded-xl px-6 py-4"
          >
            <div>{item.icon}</div>
            <div key={index} className="w-full lg:w-11/12 flex flex-col gap-1">
              <h3 className="text-xl font-medium">{item.name}</h3>
              <p className="text-base lg:text-base">
                <Emphasis emphasize={[]}>{item.text}</Emphasis>
              </p>
            </div>
          </div>
        ))}
      </section>

      <section
        data-aos="fade-up"
        className="px-5 py-[5vh] xl:px-[10vw] w-full flex flex-col items-center justify-center gap-5"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="ft-cooper text-center">Our work, so far</h2>
          <p className="text-base lg:text-lg text-center">
            Through <span className="txt-gradient">community</span> efforts,
            we&apos;re making educational resources accessible
            <br className="hidden lg:inline" /> and impactful for those{" "}
            <span className="txt-gradient">in need</span>. See some of our
            ongoing initiatives.
          </p>
        </div>
        <section className="w-full flex flex-col mb-5">
          <Container>
            <ContainerTitle triggerLink="/initiatives">
              <h2 className="text-base xl:text-lg tracking-tight font-medium text-center">
                Our Projects
              </h2>
            </ContainerTitle>
            <ContainerContent>
              {initiatives.map((item, index) => (
                <Campaign
                  key={index}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                  goalValue={item.goalValue}
                  currentValue={item.currentValue}
                  startDate={item.startDate}
                  measurement={item.measurement}
                  endDate={item.endDate}
                  orgsSupporting={item.orgsSupporting}
                  image={item.image}
                />
              ))}
            </ContainerContent>
          </Container>
        </section>
      </section>

      <section className="w-full px-5 py-[5vh] xl:px-[10vw] flex flex-col items-center justify-center max-w-[960px] m-auto gap-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="ft-cooper text-center">Donate today</h2>
          <p className="text-base lg:text-lg text-center">
            Your support helps us continue our work and{" "}
            <br className="hidden lg:inline" /> make a positive impact in the
            lives of youth in need.
          </p>
        </div>
        <Givebutter />
      </section>

      <section className=" flex flex-col items-center justify-center gap-10">
        <h2 className="ft-cooper text-center">Our Sponsors</h2>
        <div className="flex flex-row flex-wrap gap-5 font-semibold text-xl text-center items-center justify-center opacity-50">
          <span className="ft-cooper">
            Friends of the <br />
            Sugar Land Library
          </span>
          <img
            className="w-24 h-auto"
            src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/de8f8708738ff0680cb318bbcd0f3e2ef7f5a7cd_image.png"
          />
          <img
            className="w-24 h-auto"
            src="https://intlbookproject.org/wp-content/uploads/2013/12/logo1-e1558107709531.png"
          />
          <img
            className="w-24 h-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUVLa7edJFb1dc_IvKvJZ52meeJxKkAPfdg&s"
          />
          <img
            className="w-24 h-auto"
            src="https://avatars.githubusercontent.com/u/5633654?s=200&v=4"
          />
        </div>
      </section>

      <FAQSection />
    </section>
  );
}
