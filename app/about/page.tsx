import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPage() {
  return (
    // Background
    <div className="min-h-screen pt-navbarOffset">
      {/* About Card */}
      <main className="container mb-4 p-default mx-auto bg-background text-foreground rounded-xl">
        {/* Company Overview */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-6">
            About Hard Rock Treks and Expedition
          </h1>
          <div className="space-y-4 text-justify">
            <p>
              Hard Rock Treks and Expedition is one of the most popular trekking
              and travel agencies in Nepal, offering unobtrusively personalized
              services and facilities for groups and individual adventure tours,
              inclusive of the entire train in the Himalayan kingdom. We cover
              both the soft trails of Kathmandu valley and the "Hard Rocks" of
              our Himalayan summits.
            </p>
            <p>
              Located in Thamel, the hub of the tourist area, we specialize in
              adventure travel, offering a wide range of services such as
              mountaineering, trekking, tours, jungle safari, hotel reservation,
              air ticketing, and transportation. If you're looking for exciting
              travel experiences that combine activity and interaction with
              local cultures, then check us out.
            </p>
            <p>
              We are registered with all government associates such as the
              Ministry of Tourism, Nepal Central Bank, Company Register's
              Office, and Tax Office. We are an active member of Trekking Agents
              Association of Nepal (TAAN) and Nepal Mountaineering Association
              (NMA).
            </p>
          </div>
        </section>

        {/* Why Choose Hard Rock Treks */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            Why Choose Hard Rock Treks?
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Local Expertise and Competitive Pricing
              </AccordionTrigger>
              <AccordionContent>
                It's always a first-hand experience to travel with a local agent
                directly. Times have changed, and it's now possible to buy tours
                with a Nepali agent inexpensively from your hometown. Just visit
                www.hardrocktreks.com - we guarantee you the best service and
                save your money. We've worked extensively to let our clients
                enjoy more and pay less.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Extensive Experience</AccordionTrigger>
              <AccordionContent>
                With over 29 years of experience in the tourism field, we have
                crystallized our focus on how to handle every traveler's needs.
                This extensive experience allows us to provide unparalleled
                service and expertise to our clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Transparency and Guaranteed Lowest Price
              </AccordionTrigger>
              <AccordionContent>
                Hard Rock Treks is the only company transparent about their
                margins with clients. We believe in letting people know what we
                do and how much we charge because it's their money and their
                right to know. We guarantee that the price you see on our site
                or get from us is the lowest for that tour package.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Efficient Service and Fast Response
              </AccordionTrigger>
              <AccordionContent>
                We ensure the highest level of service delivered to our
                customers. Our staff respond promptly and efficiently to
                clients' concerns, providing custom-tailored, action-oriented
                results and options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Reliability and Quality</AccordionTrigger>
              <AccordionContent>
                We are highly dependable and deliver what we promise. The latest
                technology has not shaken our faith in old-fashioned values like
                honesty and commitment to excellence. Our work meets exacting
                professional standards any time and every time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Commitment to Excellence</AccordionTrigger>
              <AccordionContent>
                As a company committed to the promotion of business and tourism
                in Nepal, Hard Rock gives 100% of its attention and effort to
                fulfill your needs. We strive for excellence in every aspect of
                our service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Extensive Network</AccordionTrigger>
              <AccordionContent>
                We have multiple fully functional offices in Nepal, providing us
                with local knowledge and expertise to ensure your clients get a
                memorable trip wherever they choose to go. Additionally, our
                overseas marketing offices allow us to work with tour operators
                based abroad to plan, organize, and execute the perfect travel
                options for their clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Our Services */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            Our Services
          </h2>
          <Tabs defaultValue="trekking" className="w-full">
            <TabsList>
              <TabsTrigger value="trekking">
                Trekking & Mountaineering
              </TabsTrigger>
              <TabsTrigger value="tours">Tours</TabsTrigger>
              <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
            </TabsList>
            <TabsContent value="trekking">
              We specialize in trekking tours, white water river rafting tours,
              and peak climbing throughout Nepal, Bhutan, and Tibet.
            </TabsContent>
            <TabsContent value="tours">
              We offer wildlife excursions, cultural tours, and organize special
              events in Nepal, Bhutan, and Tibet.
            </TabsContent>
            <TabsContent value="accommodation">
              From mid-range value accommodations to five-star luxuries, we
              provide complete hotel packages to suit your needs.
            </TabsContent>
            <TabsContent value="transport">
              Our services include domestic air ticketing, chauffeur-driven
              limousines, and coach tours for all your transportation needs.
            </TabsContent>
          </Tabs>
        </section>

        {/* Our Team */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradbrent-to-r from via-primary-tovia-purplenge-500 text-transparent bg-clip-text mb-4">
            Our Team
          </h2>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Mr. Bharat Shahi Thakuri "Om"</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Owner and tour planner of this company, Mr. Bharat Shahi Thakuri
                "Om" has led many trips very effectively and has worked for
                British, Dutch, and Russian tour companies as a tour leader. He
                is the founder & backbone of this company and is always full of
                new ideas. With thirty-three years of experience in tourism in
                Nepal, he is multilingual. Mr. Thakuri also worked for two years
                as a secretary of the association for tourism.
              </p>
            </CardContent>
          </Card>
          <p>
            Hard Rock Treks and Expedition (P) Ltd's vast resources include
            extensive research capabilities coupled with staff members who
            possess rich experience in travel management methodology and
            techniques. With over 15 highly dedicated, experienced, and
            multilingual travel experts, we provide an enormous knowledge base
            of our destinations with a passion for travel that shows. Our
            employees receive constant updating of skills to ensure that you are
            receiving the best service available.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            Our Mission
          </h2>
          <p>
            To provide a highly innovative, quality, and personalized service to
            your clients to ensure a memorable and trouble-free holiday
            experience in Nepal, Bhutan, and Tibet.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            What We Do
          </h2>
          <h3 className="text-2xl font-semibold mb-2">
            Personalized Travel Services for Tour Operators
          </h3>
          <p className="mb-4">
            We have teams of experienced professionals dedicated to providing
            tour operators with the best travel solutions for their clients.
            We've been providing a wide range of travel-related services for our
            customers. With an extensive network, we can handle every type of
            traveler including wholesalers, tour operators, incentive houses,
            travel agents, cruise lines, and airlines.
          </p>
          <h3 className="text-2xl font-semibold mb-2">
            Our Specialized Departments
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Individual Travelers (FIT)</li>
            <li>Groups</li>
            <li>Special Events</li>
            <li>Incentives</li>
            <li>Conferences & Exhibitions</li>
            <li>Sporting & Cultural Events</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">FIT Services</h3>
          <p>
            Our experienced, multi-lingual FIT department is well equipped to
            offer a high-class, flexible service at competitive rates. We
            provide customized solutions to your clients' travel requirements
            and can cater for the more unusual, whether that is a wedding or a
            balloon trip, a cross-country riding holiday or a tour of
            championship golf courses.
          </p>
        </section>

        {/* Social Involvement */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            Our Social Commitment
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>
                Supporting Girl's Education and Human Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                HRT believes in serving people, so to serve our clients is one
                thing, and the next is to serve the deprived people. We have
                allocated 10% of our yearly benefits to help with girls'
                education. Being a poor and underdeveloped country, gender
                discrimination is widely practiced in Nepal. We believe that
                education is the key weapon to eliminate gender discrimination.
              </p>
              <p className="mt-4">
                Our maximum effort is also to hinder human rights violations in
                Nepal. We publish posters to raise awareness and encourage
                people to work against human rights violations. Without human
                rights, there is no space for people to stand, so it is the root
                to uplift anybody.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Media Mentions */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            In the Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Bangkok Post</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  "An excellent firm to contact for arrangements once you are in
                  Kathmandu is Hard Rock Treks & Expedition of Thamel... Mr.
                  Bharat, "OM" Shahi, proprietor of Hard Rock Treks, is a member
                  of the Association for Tourism, a private civic group
                  dedicated to making your life as a visitor to Nepal as
                  pleasant and hassle-free as possible." - Ethan Casey, December
                  8, 1994
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Other Media Mentions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Le Guide Du "routhrd" Nepal Tibet (Page 97)</li>
                  <li>
                    Trekking in Nepal Himalaya (Lonely Planet 9th Edition)
                  </li>
                  <li>Gek up Nepal (Dutch)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* YouTube Videos */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-familjenGrotesk font-bold w-fit bg-gradient-to-br from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-4">
            Our Adventures on YouTube
          </h2>
          <div className="flex gap-2">
            {/* <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/O8L8fFydhX4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/jA0WofezWZU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
