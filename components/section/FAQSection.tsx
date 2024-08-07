import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion"
import { faqs } from '@/data/content'

export default function FAQSection() {
    return (
    <section className='pd-section w-full flex flex-col gap-10 items-center justify-center'>
        <span className='w-full flex flex-col gap-5 text-center'>
          <h2 className='ft-cooper'>Frequently Asked Questions</h2>
        </span>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item,index)=>(
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
}