import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function FAQ() {
    return (
        <div className="w-full px-6 mx-auto">
            <div className="w-full mx-auto">
            <h4 className="scroll-m-20 text-xl font-semibold text-center">FAQ Section</h4>
            <Accordion defaultValue={["faq"]} className="max-w-lg mx-auto">
                <AccordionItem value="faq">
                    <AccordionTrigger>What is a visual timer?</AccordionTrigger>
                    <AccordionContent>
                        A visual timer is essentially a clock that makes the 
                        passage of time visible. Instead of just showing numbers
                         (like a digital clock) or thin hands (like an analog 
                         clock), it uses a disappearing colored disk or a 
                         shrinking bar to show how much time is left.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pros">
                    <AccordionTrigger>What are the benefits of using a visual timer?</AccordionTrigger>
                    <AccordionContent>
                        1. <strong>Beats "Time Blindness":</strong> It helps people who struggle to sense how fast time is moving (common in ADHD or for deep-focus "flow" states).
                        <br/>
                        2. <strong>Reduces Anxiety:</strong> Instead of wondering "when will this be over?", you can see exactly how much "red" is left.
                        <br/>
                        3. <strong>Transitions:</strong> Great for kids or meetings to signal that a task is wrapping up without needing a loud, jarring alarm.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="who">
                    <AccordionTrigger>Who can benefit from visual timers?</AccordionTrigger>
                    <AccordionContent>
                        Everyone! While just about anyone can benefit from 
                        seeing time "disappear," it's particularly effective for
                        the <strong>"time-blind" (like those with ADHD or Autism) </strong> 
                        who struggle to feel time passing, <strong>kids</strong> who can't read a 
                        clock yet but need to know when playtime is over, and 
                        <strong> hyper-focused professionals</strong> who need a physical 
                        "finish line" to keep their meetings or deep-work 
                        sessions from dragging on forever.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    );
}