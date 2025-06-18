export type Speaker = {
  id: string
  name: string
  title: string
  credentials: string
  bio: string
  biohtml:string
  research: string
  webinarId: string
  image: string
}

export type Webinar = {
  id: string
  title: string
  description: string
  shortDescription: string
  date: string
  time: string
  speakerId: string
  registrationLink: string
}

export type FAQ = {
  question: string
  answer: string
}

export const speakers: Speaker[] = [
  {
    id: "dr-paul-a",
    name: "Dr Paul Anderson",
    title: "ND",
    credentials: "ND",
    bio: "Dr Anderson is a recognized educator and clinician in integrative and naturopathic medicine with a focus on complex infectious, chronic, and oncologic illness. In addition to three decades clinical experience, he also was head of the interventional arm of a US-NIH funded human research trial using IV and integrative therapies in cancer patients. He founded Advanced Medical Therapies in Seattle, Washington, a clinic focusing on cancer and chronic diseases and now focuses his time in collaboration with clinics and hospitals in the US and other countries.",
    biohtml: `
  <p>
    Dr Paul Anderson is a recognized educator and clinician in integrative and naturopathic medicine with a focus on complex infectious, chronic, and oncologic illness. 
    In addition to over 30 years of clinical experience, he led the interventional arm of a 
    <strong>US-NIH funded human research trial</strong> using IV and integrative therapies in cancer patients.
  </p>

  <p>
    He founded <strong>Advanced Medical Therapies</strong> in Seattle, Washington, a clinic specializing in cancer and chronic disease. 
    He now collaborates with clinics and hospitals across the United States and internationally.
  </p>

  <p>
    Former academic positions include posts at multiple medical schools, <strong>Professor of Pharmacology and Clinical Medicine</strong> at 
    <a href="https://bastyr.edu" target="_blank" rel="noopener noreferrer" class=" underline">Bastyr University</a>, and <strong>Chief of IV Services</strong> at the Bastyr Oncology Research Center.
  </p>

  <p>
    Dr Anderson is co-author of the Hay House book <strong>
    <a href="https://www.amazon.com/Outside-Box-Cancer-Therapies-Integrative/dp/1401956426" target="_blank" rel="noopener noreferrer" class=" text-blue-600 underline">“Outside the Box Cancer Therapies”</a> </strong>with Dr Mark Stengler, and contributed to the anthology 
    <strong><a href="https://www.amazon.com/Success-Breakthroughs-Jack-Canfield/dp/1643164587" target="_blank" rel="noopener noreferrer" class=" underline">“Success Breakthroughs”</a></strong> with Jack Canfield, and 
    <strong>Cancer… The Journey from Diagnosis to Empowerment</strong> by Lioncrest Publishing.
  </p>

  <p>
    He is also co-author of the IV therapy textbook 
    <strong>“A Scientific Reference for Intravenous Nutrient Therapy”</strong> with Drs. Osborne and Carter.
  </p>

  <p>
    A frequent CME speaker and educator, Dr Anderson has expanded his reach through his online CE platform 
    <strong><a href="https://www.consultdra.com" target="_blank" rel="noopener noreferrer"  className="text-[#97c851] underline">ConsultDrA.com</a> </strong>
    and through his <strong>Advanced Applications in Medical Practice (AAMP)</strong> conferences, which deliver cutting-edge clinical education in a CME-accredited format.
  </p>
`,

    research: "Dr Paul Anderson",
    webinarId: "nutritional-strategies",
    image: "/speakers/speaker1.jpg",
  },
  {
    id: "dr-paul-s",
    name: "Dr Paul Saunders",
    title: "ND, PhD, RHOM",
    credentials: "ND, PhD, RHOM ",
    bio: "Dr Paul Richard Saunders is an accomplished professional with dual ND degrees from the Canadian College of Naturopathic Medicine and National College in Portland. His extensive experience spans over 30 years, employing a full range of naturopathic therapies and embracing complex cases. Notable roles at the Canadian College of Naturopathic Medicine include Clinic Director and Associate Dean. Dr Saunders continues to educate, research, and publish, holding an Adjunct Professorship at National University of Health Science. He is a member of peer-review committees for specialized journals, reviews grant requests for the National Institute of Health (NIH), and was recognized as Ontario Naturopathic Doctor of the Year in 1994 and 2002. He played a significant role in shaping Health Canada’s Office of Natural Health Products and its Expert Advisory Committee.",
    biohtml: `
      Dr Paul Richard Saunders is an accomplished professional with dual ND degrees from the 
      <a href="https://www.ccnm.edu" target="_blank">Canadian College of Naturopathic Medicine</a> and the National College in Portland.
      His extensive experience spans over 30 years, employing a full range of naturopathic therapies and embracing complex cases.

      He held roles as <strong>Clinic Director</strong> and <strong>Associate Dean</strong> at CCNM, and continues to 
      educate and publish as an <strong>Adjunct Professor</strong> at the 
      <a href="https://www.nuhs.edu" target="_blank">National University of Health Sciences</a>.

      He is involved with <a href="https://www.nih.gov" target="_blank">NIH</a>, and was twice named 
      <strong>Ontario Naturopathic Doctor of the Year</strong>. He also advised 
      <strong>Health Canada's Natural Health Products Directorate.</strong>
    `,
    research: "Herbal medicine safety and efficacy in cancer care",
    webinarId: "herbal-medicine",
    image: "/speakers/speaker2.jpg",
  },
  {
    id: "dr-neil",
    name: "Dr Neil McKinney",
    title: "ND ((non-practicing))",
    credentials: "ND ((non-practicing))",
    bio: "Dr McKinney has a BSc in biosciences from Simon Fraser University, studied kinesiology at the University of Waterloo, and received a Doctor of Naturopathic Medicine from National College of Naturopathic Medicine (1985). ",
    biohtml: `
  <p>
    Dr Neil McKinney, ND, holds a <strong>BSc in biosciences</strong> from 
    <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">Simon Fraser University</a>,
    studied kinesiology at the <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    University of Waterloo</a>, and earned his <strong>Doctor of Naturopathic Medicine</strong> from the 
    <a href="https://nunm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    National College of Naturopathic Medicine</a> in 1985.
  </p>

  <p>
    Dr McKinney also completed three years of Traditional Chinese Medicine training at the 
    Oregon College of Oriental Medicine. His background includes several years of experience in cancer research, 
    particularly in the areas of <strong>novel radiation therapies</strong> and <strong>radiosensitizing drugs</strong>.
  </p>

  <p>
    A recognized leader in the profession, he served in regulatory roles including as <strong>Registrar of the 
    College of Naturopathic Physicians of British Columbia (CNPBC)</strong>, and has received multiple awards for his 
    contributions in advancing the scope and standards of naturopathic medicine.
  </p>

  <p>
    Dr McKinney is the founder of both the 
    <a href="https://www.bcna.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    BC Naturopathic Association</a> and the 
    <a href="https://binm.org" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    Boucher Institute of Naturopathic Medicine</a>. He is a former <strong>Professor of Naturopathic Oncology</strong> and 
    the author of six textbooks on the subject.
  </p>

  <p>
    He continues to <strong>mentor and lecture</strong> to naturopathic doctors around the world, contributing 
    to professional publications and public education. Now retired from decades of clinical practice with a focus 
    on integrative oncology, Dr McKinney remains actively engaged in 
    <strong>cancer research, professional education,</strong> and publishing.
  </p>
`
,
    research: "Microbiome modulation for cancer immunotherapy support",
    webinarId: "microbiome-cancer",
    image: "/speakers/speaker3.jpg",
  },
  {
    id: "dr-eric",
    name: "Dr Eric Marsden",
    title: "ND",
    credentials: "ND",
    bio: "Dr Marsden ND obtained his undergraduate degree in human biology at the University of Toronto and graduated from the Canadian College of Naturopathic Medicine in 2002. ",
    biohtml: `
  <p>
    Dr Eric Marsden, ND, is a leading expert in integrative and naturopathic medicine with a focus on cancer care, IV therapy, and chronic disease. He is the founder of the Marsden Centre for Excellence in Integrative Medicine, a multidisciplinary clinic dedicated to evidence-informed care. With over 20 years of experience, Dr Marsden has trained healthcare providers across North America and established Canada’s first naturopathic oncology residency. A published researcher and frequent speaker, he is passionate about advancing integrative medicine through clinical innovation, education, and ongoing research.
  </p>
`
,
    research: "Stress reduction techniques and cancer outcomes",
    webinarId: "mind-body-approaches",
    image: "/speakers/speaker4.jpg",
  },
  {
    id: "dr-dugald",
    name: "Dr Dugald Seely",
    title: "ND, MSc",
    credentials: "ND, MSc",
    bio: "Dr Dugald Seely, ND, MSc. – Dr Seely is a naturopathic doctor and clinician scientist, specializing in integrative cancer care. Dr Seely blends evidence-based approaches in clinical practice and is active in the conduct of synthesis and clinical research ",
    biohtml: `
  <p>
    Dr Dugald Seely, ND, MSc, is a naturopathic doctor and clinician scientist with a specialization in 
    integrative cancer care. He is known for blending evidence-based medicine with 
    naturopathic principles, both in clinical settings and in the realm of research.
  </p>

  <p>
    Dr Seely is the <strong>CEO</strong> of the <strong>Centre for Health Innovation (CHI)</strong> and the 
    <strong>Executive Director</strong> of the <strong>Patterson Institute for Integrative Oncology Research</strong>, 
    where he is pioneering an evidence-informed, integrative oncology model that combines conventional and naturopathic care.
  </p>

  <p>
    A 2003 graduate of the 
    <strong><a href="https://www.ccnm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
      Canadian College of Naturopathic Medicine (CCNM)
    </a></strong>, Dr Seely brings over 20 years of clinical experience to his practice.
    He has <strong>published more than 100 peer-reviewed papers and book chapters</strong> and has led a thriving, 
    <strong>multi-disciplinary clinic</strong> in Ottawa for the past 12 years.
  </p>

  <p>
    In addition to his clinical and academic contributions, Dr Seely is also passionate about the 
    <strong>business of integrative medicine</strong> and enjoys sharing insights into both clinical excellence and 
    the successful operation of healthcare practices.
  </p>
`
,
    research: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    webinarId: "lifestyle-medicine",
    image: "/speakers/speaker5.jpg",
  },
]

export const webinars: Webinar[] = [
  {
    id: "nutritional-strategies",
    title: "Healing After Chemotherapy and Radiation",
    description:
      "This comprehensive webinar explores evidence-based nutritional approaches for cancer patients. Dr Sarah Johnson will discuss anti-inflammatory diets, targeted supplementation, and nutritional strategies to mitigate treatment side effects. Learn how to integrate these approaches with conventional cancer treatments for optimal patient outcomes.",
    shortDescription: "TBD",
    date: "September 10, 2025 ",
    time: "1:00 PM – 2:00 PM  EST",
    speakerId: "dr-paul-a",
    registrationLink: "https://attendee.gotowebinar.com/register/4271114938770009180",
    
  },
  {
    id: "herbal-medicine",
    title: "Phytoestrogens and Genetic Breast Cancer Risk",
    description:
      "TBD",
    shortDescription: "soon to be updated",
    date: "November 19, 2025 ",
    time: "1:00 PM – 2:00 PM  EST",
    speakerId: "dr-paul-s",
    registrationLink:"https://attendee.gotowebinar.com/register/8281497838955474525",
  },
  {
    id: "microbiome-cancer",
    title: "Prostate Cancer Update",
    description:
      "neil",
    shortDescription: "Learn cutting-edge naturopathic strategies that go beyond conventional prostate cancer care",
    date: "December 10, 2025 ",
    time: "1:00 PM - 2:00 PM EST",
    speakerId: "dr-neil",
    registrationLink: "https://register.gotowebinar.com/register/1817335938156515166",
  },
  {
    id: "mind-body-approaches",
    title: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    description:
      "Explore how advanced precision tools are reshaping oncology—from early detection to real-time surveillance and individualized treatment strategies.",
    shortDescription: "Explore how advanced precision tools are reshaping oncology",
     date: "January 14, 2026 ",
    time: "1:00 PM - 2:00 PM EST",
    speakerId: "dr-eric",
    registrationLink: "https://attendee.gotowebinar.com/register/6317651324404373085",
  },
  {
    id: "lifestyle-medicine",
    title: "Off-Label Medication Use in Cancer Care",
    description:
      "TBD",
    shortDescription: "TBD",
    date: "February 18, 2026 ",
    time: "1:00 PM - 2:00 PM EST",
    speakerId: "dr-dugald",
    registrationLink: "https://attendee.gotowebinar.com/register/4475631798118729308",
  },
]

export const faqs: FAQ[] = [
  {
    question: "How is this series distinct from other integrative medicine webinars?",
    answer:
      "This CE-based webinar series integrates core oncology concepts with practical clinical application. It reviews cancer pathophysiology—highlighting angiogenesis, immune function, and their relevance in integrative care—then applies this knowledge to common patient concerns around natural products and lifestyle choices during and after conventional treatment. It explores evidence-informed approaches  helping clinicians translate science into effective, patient-centered care.",
  },
  {
    question: "Even if I don’t see cancer patients, how could this series benefit my clinical approach?",
    answer:
      "NDs and integrative practitioners in general practice aim to support the whole person, not just the diagnosis. This series focuses on helping patients with a cancer diagnosis optimize their overall health and well-being, rather than offering direct cancer treatment. Cancer patients often have distinct needs that require informed, compassionate care. This series is designed to provide you with tools and knowledge to become 'oncology-informed'. Our expert panel will address the most common questions that arise in primary care, equipping you with the knowledge and tools to confidently support your patients through every stage of their journey.",
  },
  {
    question: "Why have NFH and Vitazan chosen to spearhead this series?",
    answer:
      "This series is led by experts in integrative oncology with naturopathic training and clinical experience in supportive cancer care. Developed with the recognition that many primary and integrative providers encounter oncology patients, the program offers essential, evidence-informed guidance for delivering compassionate, whole-person care. NFH and Vitazan are manufacturers of professional-grade natural health products, committed to quality, research, and clinical collaboration. Our goal is to advance the evidence-based use of natural products within integrative and naturopathic medicine.",
  },
  {
    question: "Will recordings be available if I can't attend live?",
    answer:
      "Yes, all registrants will receive access to the webinar recording after the live event. This allows you to review the material or watch it later if you can't attend the live session.",
  },
  {
    question: "What platform will be used for the webinars?",
    answer:
      "We use Zoom for our webinar series. Upon registration, you'll receive a unique link to join the webinar. You can participate from any device with internet access.",
  },
  {
    question: "Will there be opportunities to ask questions?",
    answer:
      "Yes, each webinar includes a Q&A session where participants can submit questions for the speaker. We encourage active participation to make these sessions as valuable as possible for everyone.",
  },
]

export function getSpeakerByWebinarId(webinarId: string): Speaker | undefined {
  const webinar = webinars.find((w) => w.id === webinarId)
  if (!webinar) return undefined

  return speakers.find((s) => s.id === webinar.speakerId)
}

export function getWebinarBySpeakerId(speakerId: string): Webinar | undefined {
  const speaker = speakers.find((s) => s.id === speakerId)
  if (!speaker) return undefined

  return webinars.find((w) => w.id === speaker.webinarId)
}
