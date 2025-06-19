export type Speaker = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  biohtml: string;
  research: string;
  webinarId: string;
  image: string;
};

export type Webinar = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  speakerId: string;
  registrationLink: string;
  learningObjectives: string[]; // ✅ optional
  details: {
    cost: string;
    audience: string;
    format: string;
  };
};

export type FAQ = {
  question: string;
  answer: string;
};

export const speakers: Speaker[] = [
  {
    id: "dr-paul-a",
    name: "Dr Paul Anderson",
    title: "ND",
    credentials: "ND",
    bio: "Dr Anderson is a recognized educator and clinician in integrative and naturopathic medicine with a focus on complex infectious, chronic, and oncologic illness. In addition to three decades clinical experience, he also was head of the interventional arm of a US-NIH funded human research trial using IV and integrative therapies in cancer patients. He founded Advanced Medical Therapies in Seattle, Washington, a clinic focusing on cancer and chronic diseases and now focuses his time in collaboration with clinics and hospitals in the US and other countries.",
    biohtml: `
  <p>
    Dr Anderson is a recognized educator and clinician in integrative and naturopathic medicine with a focus on complex infectious, chronic, and oncologic illness. 
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
    Dr Anderson is coauthor of the Hay House book <strong>
    <a href="https://www.amazon.com/Outside-Box-Cancer-Therapies-Integrative/dp/1401956426" target="_blank" rel="noopener noreferrer" class=" text-blue-600 underline">“Outside the Box Cancer Therapies”</a> </strong>with Dr Mark Stengler, and contributed to the anthology 
    <strong><a href="https://www.amazon.com/Success-Breakthroughs-Jack-Canfield/dp/1643164587" target="_blank" rel="noopener noreferrer" class=" underline">“Success Breakthroughs”</a></strong> with Jack Canfield, and 
    <strong>Cancer… The Journey from Diagnosis to Empowerment</strong> by Lioncrest Publishing.
  </p>

  <p>
    He is also coauthor of the IV therapy textbook 
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
    bio: "Dr Saunders is an accomplished professional with dual ND degrees from the Canadian College of Naturopathic Medicine and National College in Portland. His extensive experience spans over 30 years, employing a full range of naturopathic therapies and embracing complex cases. Notable roles at the Canadian College of Naturopathic Medicine include Clinic Director and Associate Dean. Dr Saunders continues to educate, research, and publish, holding an Adjunct Professorship at National University of Health Science. He is a member of peer-review committees for specialized journals, reviews grant requests for the National Institute of Health (NIH), and was recognized as Ontario Naturopathic Doctor of the Year in 1994 and 2002. He played a significant role in shaping Health Canada’s Office of Natural Health Products and its Expert Advisory Committee.",
    biohtml: `
      Dr Saunders is an accomplished professional with dual ND degrees from the 
      <a href="https://www.ccnm.edu" target="_blank">Canadian College of Naturopathic Medicine</a> and the National College in Portland.
      His extensive experience spans over 30 years, employing a full range of naturopathic therapies and embracing complex cases.

      He held roles as <strong>Clinic Director</strong> and <strong>Associate Dean</strong> at CCNM, and continues to 
      educate and publish as an <strong>Adjunct Professor</strong> at the 
      <a href="https://www.nuhs.edu" target="_blank">National University of Health Sciences</a>.

      He is involved with <a href="https://www.nih.gov" target="_blank">NIH</a>, and was twice named 
    Ontario Naturopathic Doctor of the Year. He also advised 
 Health Canada’s Natural Health Products Directorate.
    `,
    research: "Herbal medicine safety and efficacy in cancer care",
    webinarId: "herbal-medicine",
    image: "/speakers/speaker2.jpg",
  },
  {
    id: "dr-neil",
    name: "Dr Neil McKinney",
    title: "ND (nonpracticing)",
    credentials: "ND (nonpracticing)",
    bio: "Dr McKinney has a BSc in biosciences from Simon Fraser University, studied kinesiology at the University of Waterloo, and received a Doctor of Naturopathic Medicine from National College of Naturopathic Medicine (1985). ",
    biohtml: `
  <p>
    Dr McKinney holds a <strong>BSc in biosciences</strong> from 
    <a href="https://www.sfu.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">Simon Fraser University</a>,
    studied kinesiology at the <a href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    University of Waterloo</a>, and earned his <strong>Doctorate of Naturopathic Medicine</strong> from the 
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
`,
    research: "Microbiome modulation for cancer immunotherapy support",
    webinarId: "microbiome-cancer",
    image: "/speakers/speaker3.jpg",
  },
  {
    id: "dr-eric",
    name: "Dr Eric Marsden",
    title: "ND",
    credentials: "ND",
    bio: "Dr Marsden obtained his undergraduate degree in human biology at the University of Toronto and graduated from the Canadian College of Naturopathic Medicine in 2002. ",
    biohtml: `
  <p>
    Dr Marsden is a leading expert in integrative and naturopathic medicine with a focus on cancer care, IV therapy, and chronic disease. He is the founder of the Marsden Centre for Excellence in Integrative Medicine, a multidisciplinary clinic dedicated to evidence-informed care. With over 20 years of experience, Dr Marsden has trained healthcare providers across North America and established Canada’s first naturopathic oncology residency. A published researcher and frequent speaker, he is passionate about advancing integrative medicine through clinical innovation, education, and ongoing research.
  </p>
`,
    research: "Stress reduction techniques and cancer outcomes",
    webinarId: "mind-body-approaches",
    image: "/speakers/speaker4.jpg",
  },
  {
    id: "dr-dugald",
    name: "Dr Dugald Seely",
    title: "ND, MSc",
    credentials: "ND, MSc",
    bio: "Dr Seely is a naturopathic doctor and clinician scientist, specializing in integrative cancer care. Dr Seely blends evidence-based approaches in clinical practice and is active in the conduct of synthesis and clinical research ",
    biohtml: `
  <p>
    Dr Seely is a naturopathic doctor and clinician scientist with a specialization in 
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
      Canadian College of Naturopathic Medicine (CCNM)</a></strong>, Dr Seely brings over 20 years of clinical experience to his practice.
    He has <strong>published more than 100 peer-reviewed papers and book chapters</strong> and has led a thriving, 
    <strong>multidisciplinary clinic</strong> in Ottawa for the past 12 years.
  </p>

  <p>
    In addition to his clinical and academic contributions, Dr Seely is also passionate about the 
    <strong>business of integrative medicine</strong> and enjoys sharing insights into both clinical excellence and 
    the successful operation of healthcare practices.
  </p>
`,
    research: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",
    webinarId: "lifestyle-medicine",
    image: "/speakers/speaker5.jpg",
  },
];

export const webinars: Webinar[] = [
  {
    id: "nutritional-strategies",
    title: "Healing After Chemotherapy and Radiation",

    date: "September 10, 2025 ",
    time: "1:00 PM – 2:30 PM  EDT",
    speakerId: "dr-paul-a",
    registrationLink:
      "https://attendee.gotowebinar.com/register/4271114938770009180",

    description:
      "Every patient who has had standard-of-care oncology modalities employed in their case has some level of intra- or postreatment adverse effect. The purpose of this presentation is to break down the causes of these adverse effects and to assess potential restorative therapies.",
    shortDescription:
      "Explore therapeutic strategies for mitigating adverse effects of conventional oncology care.",

    learningObjectives: [
      "Describe the basis of cytotoxic chemotherapy adverse effects",
      "Describe the basis of radiotherapy adverse effects",
      "Describe the effects of chemotherapy and radiation on the tumour microenvironment",
      "Describe potential therapeutic interventions for these effects",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "herbal-medicine",
    title: "Phytoestrogens and Genetic-Breast Cancer Risk",

    date: "November 19, 2025 ",
    time: "1:00 PM – 2:30 PM  EST",
    speakerId: "dr-paul-s",
    registrationLink:
      "https://attendee.gotowebinar.com/register/8281497838955474525",

    description:
      "Breast cancer can present as multiple types, with ductal, lobular, and inflammatory being the most common types seen in clinical practice. Modern pathology diagnosis include estrogen, progesterone, and HER2-receptor status and often genetic status. Genetic status results take longer to differentiate and may confirm or change the course of conventional chemotherapy and radiation treatment. This review will look at the role phytoestrogens and various plant compounds can have in the course of clinical treatment, with case examples.",
    shortDescription:
      "Explore the role of phytoestrogens in breast cancer risk and treatment.",

    learningObjectives: [
      "Know the four types of endogenous estrogens and their roles as found in humans",
      "Understand the meaning(s) of estrogenic as relates to plants",
      "Understand the importance of equol and breast cancer",
      "Understand the importance of lignans and breast cancer",
      "Understand the importance of nutrients and breast cancer",
      "Understand the role some plants can play in genetic breast cancers",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "microbiome-cancer",
    title: "Prostate Cancer Update",

    date: "December 10, 2025 ",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-neil",
    registrationLink:
      "https://register.gotowebinar.com/register/1817335938156515166",

    description:
      "Prostate cancer (PC) is very different than any other cancer, with unique causes, diagnostic markers, drivers of proliferation, and pattern of spread. The standard of care (SOC) in orthodox urological oncology is primarily centered on control of testosterone and its receptors. These will lose effectiveness over time. Radiation, steroids, and other medical tools are primarily palliative to late-stage prostate cancers.  The standards of care from a naturopathic perspective are still evolving. The first reliable protocols were developed among ONCANP members circa 2010, followed within the decade by the inclusion of new metabolic therapies. More recent research has revealed some novel additional remedies which could transform the care of this disease.",
    shortDescription:
      "Explore evolving naturopathic protocols and new metabolic therapies for prostate cancer.",

    learningObjectives: [
      "Provide diet and lifestyle recommendations to prevent, slow, or hold PC",
      "Effectively support all SOC medical therapies",
      "Recognize the many therapeutics that naturopathic doctors have found clinically effective, as well as their limitations",
      "Describe novel candidate agents which are supported by up-to-date preclinical research, with the understanding of their targets",
      "Synthesize a naturopathic protocol for PC which is practical, achievable, and robust",
    ],
    details: {
      cost: "FREE",
      audience: "Naturopathic doctors and integrative oncology professionals",
      format: "Live session with downloadable handouts",
    },
  },
  {
    id: "mind-body-approaches",
    title: "Mapping the Future: Next-Gen Tools for Personalized Cancer Care",

    date: "January 14, 2026 ",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-eric",
    registrationLink:
      "https://attendee.gotowebinar.com/register/6317651324404373085",

    description:
      "The landscape of cancer care is evolving rapidly, with precision assessment tools playing a pivotal role in early detection, surveillance, and personalized treatment strategies. This lecture will explore how advanced diagnostics—ranging from liquid biopsies and genomic profiling to metabolic imaging and tumor microenvironment analysis—are reshaping oncology.",
    shortDescription:
      "Explore how advanced diagnostics are transforming cancer detection and care strategies.",

    learningObjectives: [
      "Screening & Early Detection – Examining cutting-edge tools such as circulating tumor DNA (ctDNA) and methylation patterns, advanced imaging techniques, and more to enhance early cancer detection",
      "Surveillance & Monitoring – Understanding how precision diagnostics, including molecular markers, allow for real-time tracking of disease progression, early relapse, and treatment response",
      "Therapy Selection & Personalization – Reviewing how next-generation sequencing, tumor mutational burden analysis, and pharmacogenomics are guiding targeted therapies and immunotherapy choices",
    ],
    details: {
      cost: "FREE",
      audience: "Clinicians and diagnostic professionals in oncology",
      format: "Live presentation with Q&A",
    },
  },
  {
    id: "lifestyle-medicine",
    title: "Off-Label Medication Use in Cancer Care",

    date: "February 18, 2026 ",
    time: "1:00 PM - 2:30 PM EST",
    speakerId: "dr-dugald",
    registrationLink:
      "https://attendee.gotowebinar.com/register/4475631798118729308",

    description:
      "The off-label use of medications in cancer care is a growing practice that has garnered attention for its potential to improve patient outcomes. Off-label prescribing refers to the use of a drug for an indication, dosage, or patient population that is not specifically approved by regulatory agencies. In oncology, this practice is prevalent due to the complex nature of cancer, promotion on the internet and through social media, intriguing mechanisms to control cancer, and the limited efficacy of approved therapies particularly in more advanced disease. For integrative healthcare practitioners, understanding this approach and the evidence on which it is based is essential, as patients may present with treatments involving off-label medications and/or be keen on using these therapies as part of their care. This presentation aims to provide an overview of the role of off-label drug use in cancer care, bridging conventional and naturopathic approaches. It will explore both the scientific basis and ethical considerations of this practice, ensuring naturopathic doctors are equipped to collaborate effectively in patient-centered care.",
    shortDescription:
      "Understand the role, risks, and opportunities of off-label drugs in naturopathic oncology care.",

    learningObjectives: [
      "Understand the concept of off-label drug use: Define off-label prescribing in the context of oncology and outline common scenarios where it is applied",
      "Explore clinical applications: Highlight specific examples of off-label medications used in cancer care and their mechanisms of action",
      "Examine integrative care opportunities: Discuss how naturopathic doctors can support patients undergoing off-label treatments",
      "Address challenges and regulations: Assess the ethical, legal, and practical considerations of off-label prescribing, ensuring patient safety and informed decision-making",
    ],
    details: {
      cost: "FREE",
      audience: "Integrative and naturopathic healthcare professionals",
      format: "Live webinar with expert insights",
    },
  },
];

export const faqs: FAQ[] = [
  {
    question:
      "How is this series distinct from other integrative medicine webinars?",
    answer:
      "This CE-based webinar series integrates core oncology concepts with practical clinical application. It reviews cancer pathophysiology—highlighting angiogenesis, immune function, and their relevance in integrative care—then applies this knowledge to common patient concerns around natural products and lifestyle choices during and after conventional treatment. It explores evidence-informed approaches  helping clinicians translate science into effective, patient-centered care.",
  },
  {
    question:
      "Even if I don’t see cancer patients, how could this series benefit my clinical approach?",
    answer:
      "NDs and integrative practitioners in general practice aim to support the whole person, not just the diagnosis. This series focuses on helping patients with a cancer diagnosis optimize their overall health and wellbeing, rather than offering direct cancer treatment. Cancer patients often have distinct needs that require informed, compassionate care. This series is designed to provide you with tools and knowledge to become \"oncology-informed\". Our expert panel will address the most common questions that arise in primary care, equipping you with the knowledge and tools to confidently support your patients through every stage of their journey.",
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
];

export function getSpeakerByWebinarId(webinarId: string): Speaker | undefined {
  const webinar = webinars.find((w) => w.id === webinarId);
  if (!webinar) return undefined;

  return speakers.find((s) => s.id === webinar.speakerId);
}

export function getWebinarBySpeakerId(speakerId: string): Webinar | undefined {
  const speaker = speakers.find((s) => s.id === speakerId);
  if (!speaker) return undefined;

  return webinars.find((w) => w.id === speaker.webinarId);
}
