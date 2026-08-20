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
  /** CSS object-position for the circular crop, when the subject is off-centre. */
  imagePosition?: string;
  /** Controls whether this speaker appears in the homepage hero speaker row. */
  featuredOnHomepage: boolean;
};

export type Webinar = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  /** First entry is the primary speaker (used for the homepage and card lead). */
  speakerIds: string[];
  ceAccredited: boolean;
  registrationLink: string;
  learningObjectives: string[];
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
    id: "dr-neil",
    name: "Dr Neil McKinney",
    title: "BSc, ND",
    credentials: "BSc, ND",
    bio: "Dr McKinney has a BSc in biosciences from Simon Fraser University, studied kinesiology at the University of Waterloo, and received a Doctor of Naturopathic Medicine from National College of Naturopathic Medicine (1985).",
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
    research: "Botanical medicine and naturopathic oncology",
    webinarId: "baicalin-immune-regulation",
    image: "/speakers/speaker3.jpg",
    featuredOnHomepage: true,
  },
  {
    id: "dr-dugald",
    name: "Dr Dugald Seely",
    title: "ND, MSc, FABNO",
    credentials: "ND, MSc, FABNO",
    bio: "Dr Seely has been actively pursuing the growth and development of integrative medicine and its evidence base over the past two decades, pioneering an innovative model of cancer care and research through the creation of the Ottawa Integrative Cancer Centre.",
    biohtml: `
  <p>
    Dr Seely has been actively pursuing the growth and development of integrative medicine and its evidence base
    over the past two decades. Having pioneered an innovative model of cancer care and research through the creation
    of the <strong>Ottawa Integrative Cancer Centre</strong> in 2011, Dr Seely expanded the clinic through the founding of the
    <strong>Centre for Health Innovation (CHI)</strong> in 2020. Most recently he expanded the reach of the clinic in
    partnership with EnviroMed in downtown Toronto to provide high quality care to people in the Greater Toronto Area.
  </p>

  <p>
    Dr Seely and his team provide naturopathic medicine and whole-person integrative care to people living with chronic
    disease in a manner that is reflective of the best evidence available, deep clinical experience, and an essential
    honouring of patient choice.
  </p>

  <p>
    He completed his <strong>BSc in chemistry</strong> at Acadia University and an <strong>MSc in cancer research</strong> at the
    University of Toronto. A 2003 graduate of the
    <a href="https://www.ccnm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    Canadian College of Naturopathic Medicine</a>, Dr Seely is a <strong>Fellow of the American Board of Naturopathic
    Oncology (FABNO)</strong>. As a clinician scientist, he has been awarded over <strong>11 million dollars</strong> in
    competitive grant and trainee funding through CIHR, the Lotte and John Hecht Memorial Foundation, CBCRA, the
    SickKids Foundation, and the Gateway for Cancer Research.
  </p>

  <p>
    Dr Seely leads the <strong>Patterson Institute for Integrative Oncology Research</strong> at CCNM. He is an
    <strong>Adjunct Professor</strong> with the Faculty of Medicine at the University of Ottawa, is an Affiliate Investigator
    with the Ottawa Hospital Research Institute (OHRI), and was Past President for the Oncology Association of
    Naturopathic Physicians (OncANP).
  </p>

  <p>
    In 2017 Dr Seely was the recipient of the <strong>Dr Rogers Prize</strong> for excellence in Complementary and
    Alternative Medicine.
  </p>

  <p>
    Father of two, Dr Seely is an avid runner, reader, and seeker of knowledge and meaningful connection in a
    rapidly changing world.
  </p>
`,
    research: "Integrative oncology research and clinical innovation",
    webinarId: "ndmaps-product-insights",
    image: "/speakers/speaker5.jpg",
    featuredOnHomepage: true,
  },
  {
    id: "dr-melanie",
    name: "Dr Melanie Kusznireckyj",
    title: "BSc, ND, MBA",
    credentials: "ND, MBA",
    bio: "Dr Kusznireckyj is a naturopathic doctor and Executive Director at NFH & Vitazan Professional, where she leads business development, clinical research, product development, and scientific education in integrative natural medicine.",
    biohtml: `
  <p>
    Melanie Kusznireckyj, BSc, ND, MBA, is a naturopathic doctor and <strong>Executive Director at NFH &amp; Vitazan
    Professional</strong>, where she leads business development, clinical research, product development, and scientific
    education in integrative natural medicine.
  </p>

  <p>
    A graduate of the
    <a href="https://www.ccnm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    Canadian College of Naturopathic Medicine</a>, she also holds a <strong>BSc in Plant Biology</strong> from the
    University of Ottawa and an <strong>MBA</strong> from Quantic School of Business and Technology. With a clinical
    background spanning naturopathic medicine, lifestyle medicine, botanical medicine, homeopathy, and somatic-based
    care, Melanie is passionate about translating evidence into practical healthcare solutions.
  </p>

  <p>
    She has contributed to research with the University of Toronto and the WHO-led <strong>INTERPHONE study</strong>, and
    currently serves as <strong>Interim President of the Quebec Association of Naturopathic Medicine</strong>, while
    supporting women's health advocacy through the Réseau Québécois d'Action pour la Santé des Femmes. Melanie enjoys
    Argentine Tango, writing, cooking, and travel.
  </p>
`,
    research: "Clinical research, product development, and scientific education",
    webinarId: "ndmaps-product-insights",
    image: "/speakers/Melanie-188.jpg",
    // Portrait source with the subject high in frame; crop from the top.
    imagePosition: "center top",
    featuredOnHomepage: false,
  },
  {
    id: "dr-michael",
    name: "Dr Michael Traub",
    title: "ND",
    credentials: "ND",
    bio: "Dr Traub is a diplomate of the Homeopathic Academy of Naturopathic Physicians and a fellow of the American Board of Naturopathic Oncology. He has been medical director of Lokahi Health Center in Hawaii since 1986 and is now medical director of Hawaii Integrative Oncology.",
    biohtml: `
  <p>
    Dr Traub received a <strong>BS from the University of California, Irvine</strong> in 1976, graduated from NCNM in 1981,
    and completed a two-year residency there in Family Practice and Homeopathy. He is a diplomate of the
    <strong>Homeopathic Academy of Naturopathic Physicians (HANP)</strong>, a fellow of the
    <strong>American Board of Naturopathic Oncology (ABNO)</strong>, and currently volunteers as Treasurer of the
    American Association of Naturopathic Physicians.
  </p>

  <p>
    Dr Traub served as <strong>AANP President from 2001–2003</strong> and in 2006 received the
    <strong>AANP Physician of the Year Award</strong>. He is the author of
    <strong>“Dermatological Diagnosis and Integrative Therapeutics.”</strong>
  </p>

  <p>
    Dr Traub has been medical director of <strong>Lokahi Health Center</strong> in Kailua Kona, Hawaii since 1986 and is
    now medical director of <strong>Hawaii Integrative Oncology</strong>.
  </p>
`,
    research: "Medicinal mushrooms and integrative oncology",
    webinarId: "medicinal-mushrooms-oncology",
    // Space in the filename is percent-encoded so the URL is unambiguous.
    image: "/speakers/Michael%20Traub.jpg",
    featuredOnHomepage: true,
  },
  {
    id: "dr-paul-s",
    name: "Dr Paul Richard Saunders",
    title: "PhD, ND, RHOM",
    credentials: "PhD, ND, RHOM",
    bio: "Dr Saunders is an accomplished professional with dual ND degrees from the Canadian College of Naturopathic Medicine and National College in Portland. His extensive experience spans over 30 years, employing a full range of naturopathic therapies and embracing complex cases.",
    biohtml: `
  <p>
    Dr Saunders is an accomplished professional with <strong>dual ND degrees</strong> from the
    <a href="https://www.ccnm.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    Canadian College of Naturopathic Medicine</a> and the National College in Portland. His extensive experience spans
    over 30 years, employing a full range of naturopathic therapies and embracing complex cases.
  </p>

  <p>
    He held roles as <strong>Clinic Director</strong> and <strong>Associate Dean</strong> at CCNM, and continues to
    educate and publish as an <strong>Adjunct Professor</strong> at the
    <a href="https://www.nuhs.edu" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">
    National University of Health Sciences</a>.
  </p>

  <p>
    He is involved with <a href="https://www.nih.gov" target="_blank" rel="noopener noreferrer" class="text-emerald-600 underline">NIH</a>,
    and was twice named <strong>Ontario Naturopathic Doctor of the Year</strong>. He also advised Health Canada’s
    Natural Health Products Directorate.
  </p>
`,
    research: "Botanical and nutraceutical research in integrative oncology",
    webinarId: "botanical-nutraceutical-updates",
    image: "/speakers/speaker2.jpg",
    featuredOnHomepage: true,
  },
  {
    id: "dr-jj",
    name: "Dr Jean-Jacques Dugoua",
    title: "HBSc, ND, PhD",
    credentials: "HBSc, ND, PhD",
    bio: "Dr Jean-Jacques Dugoua, or Dr JJ as he is affectionately known, is a naturopathic doctor, clinical pharmacologist and researcher. He is the Chief Medical Officer of the Liberty Clinic in downtown Toronto.",
    biohtml: `
  <p>
    Dr Jean-Jacques Dugoua, or <strong>Dr JJ</strong> as he is affectionately known, is a naturopathic doctor, clinical
    pharmacologist and researcher. He is the <strong>Chief Medical Officer of the Liberty Clinic</strong> in downtown
    Toronto and the first Naturopathic Doctor (ND) to practice at the Toronto Western Hospital Artist Health Center.
  </p>

  <p>
    He has done research with the <strong>Motherisk Program at Sick Kids Hospital</strong> and was an
    <strong>Associate Professor (Status-Only)</strong> at the University of Toronto Leslie Dan Faculty of Pharmacy.
  </p>

  <p>
    Dr JJ completed his <strong>PhD in Pharmacy Sciences</strong> at the University of Toronto. He is a co-author of two
    textbooks and has many peer-reviewed scientific publications, and is a world expert on natural health products
    pharmacology and pregnancy safety. Dr JJ is an avid public speaker, including presentations at the
    <strong>World Health Organization</strong> in Washington DC.
  </p>
`,
    research: "Natural health product pharmacology and safety",
    webinarId: "chemotherapy-induced-neuropathy",
    image: "/speakers/Dr_JJ-0017.jpg",
    // Landscape source; the subject sits left of centre, so bias the crop left.
    imagePosition: "left center",
    featuredOnHomepage: true,
  },
  {
    id: "dr-leanna",
    name: "Dr Leanna Standish",
    title: "ND",
    credentials: "ND",
    bio: "Dr Standish is a neuroscientist and physician specializing in oncology. She is Co-Director of AIMS Institute in Seattle and also on the faculty at University of Washington and Sonoran University.",
    biohtml: `
  <p>
    Dr Standish is a <strong>neuroscientist and physician specializing in oncology</strong>. She is
    <strong>Co-Director of AIMS Institute</strong> in Seattle and also on the faculty at the
    <strong>University of Washington</strong> and <strong>Sonoran University</strong>.
  </p>
`,
    research: "Liquid biopsy and circulating tumour DNA in breast cancer",
    webinarId: "liquid-biopsy-breast-cancer",
    image: "/speakers/LJ.jpg",
    // Landscape source; the subject sits left of centre, so bias the crop left.
    imagePosition: "28% center",
    featuredOnHomepage: true,
  },
];

export const webinars: Webinar[] = [
  {
    id: "baicalin-immune-regulation",
    title:
      "Baicalin: An Evidence-Informed Botanical for Immune Regulation, Inflammation & Clinical Resilience",

    date: "September 16, 2026",
    time: "1:00 PM – 2:00 PM EDT",
    speakerIds: ["dr-neil"],
    ceAccredited: true,
    registrationLink:
      "https://attendee.gotowebinar.com/register/5440845786433151574",

    description:
      "Scutellaria baicalensis has a long history of use in Traditional Chinese Medicine and is increasingly recognized for its principal flavonoid, baicalin, and its role in supporting healthy inflammatory and immune responses. This session will examine the history of S. baicalensis, its major bioactive constituents, mechanisms of action, and evidence-informed clinical applications, including emerging research in integrative oncology. Practical guidance on clinical use, probable synergists, cautions, contraindications, and interactions will also be discussed, equipping healthcare practitioners with a balanced, evidence-informed perspective for incorporating this botanical into clinical practice.",
    shortDescription:
      "Examine baicalin's mechanisms, clinical applications, and cautions in integrative oncology.",

    learningObjectives: [
      "Describe the history, molecular mechanisms and broad clinical uses of Scutellaria spp. multiple bioactive components",
      "Discriminate when to apply this remedy to select cancers",
      "Know when not to apply this remedy due to AEs, CIs and drug interactions",
      "Dose this remedy correctly",
      "Discern possible links to other, synergistic remedies, based on the suite of targets they address",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "ndmaps-product-insights",
    title:
      "Clinical Conversations in Integrative Oncology: NDMAPS™ Product Insights",

    date: "September 30, 2026",
    time: "1:00 PM – 2:00 PM EDT",
    speakerIds: ["dr-dugald", "dr-melanie"],
    ceAccredited: false,
    registrationLink:
      "https://attendee.gotowebinar.com/register/7888506004421095007",

    description:
      "What began as a conversation between colleagues at the 2020 OncANP conference became the foundation for the NDMAPS initiative. Recognizing the growing need for evidence-informed tools to support clinicians caring for patients with a personal or family history of cancer, Drs Dugald Seely and Melanie Kusznireckyj identified a significant gap in clinically relevant integrative oncology products and resources. Driven by a shared commitment to advancing patient care, they combined their clinical expertise, naturopathic principles, and premium manufacturing to develop the NDMAPS product line, a practitioner-focused collection of evidence-informed formulations designed to support integrative oncology care and other complex conditions. This webinar explores the NDMAPS product portfolio, highlighting the scientific rationale, clinical applications, and practical indications for each formulation to help practitioners confidently integrate these products into oncology-focused clinical practice.",
    shortDescription:
      "A product-focused conversation on the NDMAPS portfolio, its rationale and clinical applications.",

    learningObjectives: [
      "Explain the NDMAPS product development and validation process, including the pre-launch clinical evaluation, evidence review, and practitioner feedback used to assess safety, tolerability, and clinical integration through case reporting",
      "Apply NDMAPS formulations to common integrative scenarios, including: supporting treatment-related fatigue and quality of life during and after chemotherapy; supporting immune health and inflammation; addressing treatment-induced peripheral neuropathy; and supporting survivorship, recurrence risk reduction, and long-term wellness following active treatment",
    ],
    details: {
      cost: "FREE",
      audience: "Integrative and naturopathic healthcare professionals",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "medicinal-mushrooms-oncology",
    title:
      "Medicinal Mushrooms in Oncology: An Update from Recent Publications (2016–2026)",

    date: "October 14, 2026",
    time: "1:00 PM – 2:00 PM EDT",
    speakerIds: ["dr-michael"],
    ceAccredited: true,
    registrationLink:
      "https://attendee.gotowebinar.com/register/4439997735064944219",

    description:
      "Medicinal mushrooms have been used for centuries in East Asian traditional medicine and are increasingly explored as complementary agents in integrative oncology. Their bioactive constituents—primarily β-D-glucan polysaccharides, triterpenoids, and proteoglycans—demonstrate immunomodulatory, anti-inflammatory, and direct antitumor properties in preclinical models. This review synthesizes the clinical and translational evidence published from 2016 to 2026 on the role of medicinal mushrooms in cancer care.",
    shortDescription:
      "A decade of clinical and translational evidence on medicinal mushrooms in cancer care.",

    learningObjectives: [
      "Describe the current role of medicinal mushrooms in oncology, including key mushroom species and compounds studied in cancer care, such as PSK and psilocybin",
      "Identify key safety considerations, contraindications, and potential drug interactions associated with medicinal mushroom use in oncology",
      "Explain the current regulatory status of psilocybin in Canada and distinguish between authorized access pathways, including clinical trials, the Special Access Program (SAP), and historical Section 56 exemptions",
      "Evaluate the emerging clinical evidence for psilocybin-assisted therapy in patients with cancer, including its potential effects on anxiety, depression, quality of life, pain, and existential or spiritual well-being",
      "Discuss the evolving Canadian policy and clinical landscape for psilocybin, including the CANMAT position, compassionate access, unregulated availability, and potential future integration into oncology and palliative care",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "botanical-nutraceutical-updates",
    title: "Botanical and Nutraceutical Research Updates in Oncology",

    date: "November 18, 2026",
    time: "1:00 PM – 2:00 PM EST",
    speakerIds: ["dr-paul-s"],
    ceAccredited: true,
    registrationLink:
      "https://attendee.gotowebinar.com/register/6252759257244585304",

    description:
      "Cancer research is ever growing in multiple directions. This presentation will focus on recent botanical or plant findings that could be applied to clinical practice and nutraceutical, diet, and lifestyle factors that may lower the cancer risk or be beneficial during and after treatment.",
    shortDescription:
      "Recent botanical, nutraceutical, diet, and lifestyle findings that may lower cancer risk or support patients during and after treatment.",

    learningObjectives: [
      "Describe the role of the microbiome in the metabolism and activity of botanical medicines",
      "Explain the evidence linking carrot consumption and cancer risk",
      "Discuss the emerging evidence on the potential use of bee venom in breast cancer",
      "Evaluate current findings on vegetarian diets, fasting, and cancer risk",
      "Explain how disruption of the circadian clock may influence cancer development and progression",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "chemotherapy-induced-neuropathy",
    title:
      "Naturopathic Prevention and Management of Chemotherapy-Induced Neuropathy",

    date: "December 16, 2026",
    time: "1:00 PM – 2:00 PM EST",
    speakerIds: ["dr-jj"],
    ceAccredited: true,
    registrationLink:
      "https://attendee.gotowebinar.com/register/7005730108728821593",

    description:
      "Chemotherapy-induced peripheral neuropathy (CIPN) affects approximately 30% of patients, although the incidence varies depending on the specific treatment regimen. It is most commonly associated with platinum agents, taxanes, vinca alkaloids, and etoposide, but can also occur with non-chemotherapy agents including immunomodulatory drugs (thalidomide, lenalidomide, pomalidomide) and proteasome inhibitors (bortezomib, carfilzomib, ixazomib). The purpose of this seminar will be to discuss naturopathic treatments to prevent and manage CIPN. We will discuss cold therapy, henna, herbal medicines and supplements, such as alpha-lipoic acid, saffron, omega-3 fish oils, turmeric, lion’s mane, benfotiamine and others. We will also discuss red light therapy and topical application of henna.",
    shortDescription:
      "Evidence-informed naturopathic strategies to prevent and manage chemotherapy-induced peripheral neuropathy.",

    learningObjectives: [
      "Describe the incidence, risk factors, and clinical presentation of chemotherapy-induced peripheral neuropathy (CIPN)",
      "Identify the chemotherapy and targeted therapies most commonly associated with the development of CIPN",
      "Evaluate the evidence supporting naturopathic interventions for the prevention and management of CIPN, including nutritional supplements, herbal medicines, and topical therapies",
      "Discuss the mechanisms of action, clinical applications, and safety considerations of integrative therapies such as alpha-lipoic acid, benfotiamine, saffron, turmeric, lion’s mane, cold therapy, red light therapy, and topical henna",
      "Develop an evidence-informed integrative treatment plan to help prevent or manage CIPN and improve quality of life in patients undergoing cancer treatment",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "liquid-biopsy-breast-cancer",
    title:
      "Liquid Biopsy (Circulating Tumor DNA) Testing in Advanced Breast Cancer",

    date: "January 13, 2027",
    time: "1:00 PM – 2:00 PM EST",
    speakerIds: ["dr-leanna"],
    ceAccredited: true,
    registrationLink:
      "https://attendee.gotowebinar.com/register/6534968707738585952",

    description:
      "Breast cancer therapy has been revolutionized by genetic sequencing of tumors to identify cancer-driving mutations and to identify targeted therapies individualized to the cancer-causing mutations. Tumor DNA can shed into blood circulation and since 2014 driving mutations can be discovered in blood samples — thus the term 'liquid biopsy'. In this lecture I will discuss how medical oncologists and naturopathic oncologists utilize circulating tumor DNA testing in blood to determine both standard of care and integrative therapeutic options. I will present several breast cancer cases to demonstrate how ctDNA testing is used to tailor treatments to each patient.",
    shortDescription:
      "How ctDNA testing guides standard-of-care and integrative treatment decisions in breast cancer.",

    learningObjectives: [
      "Understand the difference between hereditary and somatic mutations in cancer",
      "Understand the role of ctDNA testing in breast cancer medical and naturopathic oncology",
      "Understand how FABNOs use ctDNA testing to evaluate the efficacy of natural therapies",
      "Be able to determine that your breast cancer patient is receiving state-of-the-science care",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
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

/** All presenters for a webinar, in billing order. */
export function getSpeakersByWebinarId(webinarId: string): Speaker[] {
  const webinar = webinars.find((w) => w.id === webinarId);
  if (!webinar) return [];

  return webinar.speakerIds
    .map((id) => speakers.find((s) => s.id === id))
    .filter((s): s is Speaker => Boolean(s));
}

/** The lead presenter for a webinar. */
export function getSpeakerByWebinarId(webinarId: string): Speaker | undefined {
  return getSpeakersByWebinarId(webinarId)[0];
}

/** Speakers shown in the homepage hero row, in schedule order. */
export function getFeaturedSpeakers(): Speaker[] {
  return webinars
    .flatMap((w) => getSpeakersByWebinarId(w.id))
    .filter((s) => s.featuredOnHomepage);
}

export function getWebinarBySpeakerId(speakerId: string): Webinar | undefined {
  const speaker = speakers.find((s) => s.id === speakerId);
  if (!speaker) return undefined;

  return webinars.find((w) => w.id === speaker.webinarId);
}
