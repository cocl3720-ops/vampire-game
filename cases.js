const cases = [
  {
    id: 'mercy-brown',
    title: 'CASE I: THE MERCY BROWN CASE',
    location: 'Exeter, Rhode Island, USA',
    year: '1892',
    ascii: `
  +------------------------------------------------------------------+
  |                                                                  |
  |   C A S E   I   :   T H E   M E R C Y   B R O W N              |
  |  ================================================================|
  |                                                                  |
  |                        +                                         |
  |                       /|\\    "She shall rise no more"           |
  |                      / | \\                                      |
  |                    _/  |  \\_                                    |
  |                   |____|____|                                    |
  |                                                                  |
  |              ~ 1892  *  Exeter, Rhode Island ~                   |
  +------------------------------------------------------------------+`,
    narrative: `In the winter of 1892, Exeter, Rhode Island is gripped by fear.
The Brown family has been devastated by a mysterious illness — consumption,
the doctors call it. George Brown has lost his wife Mary and daughter Mary
Olive. Now his son Edwin lies gravely ill, and his other daughter Mercy
died just two months ago in January.

Desperate neighbors whisper of an "undead" presence draining the family's
vitality. They petition George to allow the exhumation of the female
relatives. When they reach Mercy's body — still relatively fresh-looking
in the January cold — they remove her heart, finding it contains liquid
blood. They burn it, mix the ash with water, and feed it to Edwin as a cure.`,
    paths: [
      {
        id: 'A',
        label: 'Path A',
        description: 'Review medical records and autopsy notes for the Brown family',
        evidence: [
          `EXHIBIT A-1: Brown Family Medical History

  Records from Dr. Harold Metcalf confirm pulmonary tuberculosis
  (Mycobacterium tuberculosis) in George Brown's household.

  Timeline of deaths:
    - Mary Brown (wife)      — 1883, consumption
    - Mary Olive Brown       — 1888, consumption
    - Mercy Lena Brown       — Jan 17, 1892, consumption
    - Edwin Brown            — still living, gravely ill

  All four family members show the same progressive wasting pattern:
  night sweats, weight loss, bloody cough, pallor.`,

          `EXHIBIT A-2: Mercy Brown's Post-Mortem Condition

  Mercy died January 17, 1892. Her body was exhumed March 17, 1892
  — exactly two months later, in early spring.

  Dr. Metcalf's private notes record:
    "The body was in a state entirely consistent with the cold
     conditions of winter storage. The apparent freshness is
     attributable to the frozen ground and above-ground crypt."

  The "liquid blood" in the heart is consistent with post-mortem
  pooling in cold-stored bodies — a well-documented taphonomic effect,
  not evidence of continued circulation.`,

          `EXHIBIT A-3: Edwin Brown's Outcome

  Edwin Brown died two months after the ritual — May 2, 1892.
  The folk remedy (burned heart ash dissolved in water) had no effect.

  This outcome is significant: if Mercy were truly an active revenant
  draining Edwin's vitality, destroying her heart should have cured him.
  His continued decline and death from tuberculosis confirms the
  diagnosis of infectious disease, not supernatural predation.`
        ]
      },
      {
        id: 'B',
        label: 'Path B',
        description: 'Interview local physicians about the epidemic spreading through Exeter',
        evidence: [
          `INTERVIEW B-1: Dr. Harold Metcalf

  Dr. Metcalf attended the exhumation under community pressure. He states:

    "I found nothing in Mercy Brown's body that I would not expect
     given the time elapsed and the conditions of her storage. The
     appearance that alarmed the villagers is, to my medical eye,
     entirely ordinary."

  He participated in the ritual not because he believed in revenants,
  but because he feared the community would take more dangerous action
  without a physician present to supervise.`,

          `INTERVIEW B-2: Regional Tuberculosis Context

  Dr. Metcalf's records show tuberculosis was endemic throughout
  Rhode Island and southern New England in the 1880s-1890s.

  Contributing factors in the Brown household:
    - Close sleeping quarters in a small farmhouse
    - Shared utensils and water supply
    - George Brown nursing multiple sick family members
    - Limited ventilation typical of winter farm homes

  Airborne transmission of M. tuberculosis in such conditions follows
  a predictable sequential pattern — exactly what the Brown family shows.`,

          `INTERVIEW B-3: The Community's Belief Framework

  Local historian accounts confirm that New England vampire belief
  arrived with European (particularly Eastern European) immigrant
  communities and merged with existing Puritan anxieties about death.

  Perkowski (1976) documents this cultural transmission directly.
  The "undead relative draining the living" belief was a folk framework
  for understanding why entire families died of the same disease —
  a rational attempt to explain contagion before germ theory was
  widely understood or accepted in rural communities.`
        ]
      },
      {
        id: 'C',
        label: 'Path C',
        description: "Examine burial conditions and the timing of Mercy's interment",
        evidence: [
          `FIELD NOTE C-1: January Burial Conditions

  Mercy Brown died January 17, 1892 — mid-winter in Rhode Island.

  Ground temperature at time of death: below freezing.
  Ground frost depth: approximately 24-36 inches.

  Because the ground was too hard to dig, Mercy's body was placed
  in the family's above-ground stone crypt — standard practice in
  New England winters. She remained there for two months before
  the March exhumation.

  Cold storage (near-freezing temperatures) dramatically slows all
  decomposition processes. Refrigeration as preservation is not a
  modern concept — it is simply physics.`,

          `FIELD NOTE C-2: Documented New England Vampire Cases

  Sledzik & Bellantoni (1994) identified and analyzed 19 similar
  exhumations across New England between 1793 and 1892:

    - All occurred in tuberculosis-affected communities
    - All involved exhumation of recently buried family members
    - All featured the same "signs": fresh appearance, liquid blood,
      intact organs
    - All bodies were in cold-season storage at time of burial

  Mercy Brown's case follows this pattern exactly. It was not
  unique — it was the last documented instance of a regional
  folk practice rooted in a misunderstanding of decomposition.`,

          `FIELD NOTE C-3: Taphonomic Analysis of "Vampire Signs"

  Each of the reported supernatural signs has a natural explanation:

    "Fresh appearance"  — cold storage slows putrefaction
    "Liquid blood"      — cold prevents normal post-mortem coagulation;
                          pooling in dependent organs is expected
    "New skin forming"  — epidermis slippage is normal decomposition;
                          the layer beneath appears "new"
    "Hair/nail growth"  — skin retraction creates the illusion of growth

  These are not signs of animation. They are standard entries in any
  forensic pathology textbook on cold-environment preservation.`
        ]
      }
    ],
    diagnoses: [
      {
        id: 'revenant',
        label: 'True revenant — Mercy returned to drain her family\'s life force',
        correct: false
      },
      {
        id: 'tb',
        label: 'Tuberculosis epidemic spreading through the Brown household',
        correct: true
      },
      {
        id: 'hysteria',
        label: 'Mass hysteria — no organic disease, purely psychosomatic deaths',
        correct: false
      }
    ],
    feedback: `SCHOLARLY ANALYSIS:
Tuberculosis (consumption) drove New England vampire panics from the late 18th
through the late 19th century. Perkowski (1976) documents how TB's wasting
symptoms — pallor, weight loss, coughing blood — mapped directly onto revenant
folklore. Sledzik & Bellantoni (1994) confirmed through bioarchaeological analysis
of Rhode Island exhumations that these were TB clusters, not supernatural events.
The "undead" appearance of Mercy's body was a natural taphonomic effect of
cold-storage burial. Her preserved state was a diagnostic artifact, not evidence
of animation. Edwin's death two months after the ritual sealed the case.`
  },

  {
    id: 'arnold-paole',
    title: 'CASE II: THE ARNOLD PAOLE CASE',
    location: 'Medvegya, Serbia',
    year: '1726',
    ascii: `
  +------------------------------------------------------------------+
  |                                                                  |
  |   C A S E   I I   :   A R N O L D   P A O L E                  |
  |  ================================================================|
  |                                                                  |
  |                /\\  /\\                                           |
  |               /  \\/  \\    "The Soldier's Curse"                |
  |              |  SERBIA |                                         |
  |               \\      /                                          |
  |                \\    /                                           |
  |                 \\  /                                            |
  |                  \\/                                             |
  |                                                                  |
  |              ~ 1726  *  Medvegya, Serbia ~                       |
  +------------------------------------------------------------------+`,
    narrative: `Arnold Paole, a Serbian soldier, returns to the village of Medvegya
after military service near Turkish Serbia. He confides to neighbors that
he was attacked by a vampire while posted at Gossowa, and fears he is
now cursed. He follows the folk remedies — eating soil from the vampire's
grave, smearing himself with the creature's blood — but dies weeks later
in a fall from a haywagon.

Within weeks, villagers report Arnold's apparition visiting them at night.
Four people die. Austrian military authorities dispatch an investigation
team. When they exhume Arnold's body 40 days after burial, they file the
official Visum et Repertum: a remarkably preserved corpse, fresh blood
visible, the body showing no expected signs of decomposition.`,
    paths: [
      {
        id: 'A',
        label: 'Path A',
        description: 'Examine the soil composition and burial conditions in Medvegya',
        evidence: [
          `SOIL ANALYSIS A-1: Medvegya Geological Profile

  Core samples from the Medvegya burial ground reveal:

    Soil type:    Heavy clay with high water retention
    Oxygen level: Low — consistent with anaerobic conditions
    pH:           Neutral to slightly alkaline (6.8 – 7.4)
    Depth:        Burial at approximately 1.2 meters

  These conditions — waterlogged clay, near-zero oxygen, neutral pH —
  are precisely those that slow aerobic decomposition. Bacteria
  responsible for putrefaction require oxygen; without it, they
  cannot break down soft tissue at the expected rate.`,

          `SOIL ANALYSIS A-2: Seasonal and Regional Factors

  Arnold Paole died and was buried in late autumn, 1725.
  Exhumation occurred 40 days later — mid-winter conditions.

  Combined factors producing preservation:
    - Anaerobic clay soil limiting bacterial activity
    - Cold temperatures in the Morava River valley
    - Shallow water table maintaining moisture seal
    - Coffin wood intact, creating a closed environment

  Under these conditions, a body exhumed at 40 days could appear
  startlingly fresh to observers expecting advanced decomposition.
  The preservation was natural — not supernatural.`,

          `SOIL ANALYSIS A-3: The Investigators' Qualifications

  The Visum et Repertum was written by:
    - Regimental Field Surgeon Johann Flüchinger
    - Several military officers

  None had training in forensic pathology or taphonomy.
  The field of forensic science as we understand it did not yet exist.

  Barber (1988) notes that Flüchinger's observations are accurate —
  he described what he saw faithfully — but his interpretations
  were shaped entirely by the folk framework of vampirism rather
  than any scientific understanding of decomposition processes.
  The evidence was real. The conclusion was wrong.`
        ]
      },
      {
        id: 'B',
        label: 'Path B',
        description: 'Study the Serbian burial rituals involving oil and garlic documented by the Austrians',
        evidence: [
          `RITUAL EVIDENCE B-1: Oil as a Burial Practice

  The Visum et Repertum documents that Serbian burial practice included
  pouring oil over the body before interment.

  Barber (1988) identifies this as an accidental preservation agent:

    - Oil creates a near-anaerobic seal around the body surface
    - It limits the evaporation that accelerates tissue breakdown
    - It coats the skin, preserving the appearance of the flesh

  This practice — intended spiritually to ease the soul's passage
  and prevent the corpse from rising — unintentionally produced
  exactly the "fresh" appearance that later alarmed the exhumers.`,

          `RITUAL EVIDENCE B-2: Garlic and Hawthorn

  Austrian records note garlic and hawthorn branches packed into
  the grave. In Serbian folk belief, these ward off revenants.

  Their actual properties:

    Garlic (Allium sativum):
      — Allicin compound has documented antimicrobial effects
      — Inhibits bacterial growth in the immediate grave environment
      — Further slows the decomposition process

    Hawthorn (Crataegus):
      — Tannins and resins have preservative properties
      — Physical barrier potentially limiting insect access

  The folk practice of "preventing vampirism" was chemically
  doing exactly what it feared preventing: keeping the body intact.`,

          `RITUAL EVIDENCE B-3: The Visum et Repertum in Full Context

  The official Austrian report, published in 1732, became one of the
  most widely circulated vampire documents in European history.

  What the report describes vs. what it means:

    "Fresh, unspoiled flesh"    — anaerobic + oil preservation
    "Blood in the mouth"        — post-mortem purging (normal)
    "New skin beneath old"      — epidermal slippage (normal)
    "Liquid blood in cavities"  — cold preventing coagulation

  Every observation in the report has a taphonomic explanation.
  Perkowski (1976) argues the report's wide distribution actually
  spread the vampire belief across Europe rather than debunking it.`
        ]
      },
      {
        id: 'C',
        label: 'Path C',
        description: "Interview surviving witnesses about deaths following Arnold's burial",
        evidence: [
          `WITNESS TESTIMONY C-1: The Four Deaths

  Four villagers died in the weeks following Arnold's burial.
  Recorded symptoms across all four cases:

    - Fever and night sweats
    - Rapid weight loss
    - Respiratory distress
    - Pallor and weakness
    - Reported nighttime "visitations" by Arnold's figure

  This symptom cluster is consistent with multiple possible diseases:
  plague, typhus, or a respiratory illness spreading through the
  village's shared living spaces and water supply.`,

          `WITNESS TESTIMONY C-2: Village Conditions

  Physical survey of Medvegya (1726 records):

    - Population: approximately 200-300 residents
    - Water source: single shared village well
    - Waste disposal: none formalized — surface dumping
    - Housing density: multi-family structures, shared sleeping areas
    - Season: winter — windows sealed, minimal ventilation

  These conditions are ideal for disease transmission.
  A single point-source infection (contaminated well, infected
  individual) could move through the entire village population
  within weeks — matching exactly the pattern observed.`,

          `WITNESS TESTIMONY C-3: The Visitation Reports

  All four victims reported seeing Arnold Paole at their bedside
  at night before falling ill. This detail is frequently cited as
  evidence of supernatural activity.

  Medical explanation:

  Hypnagogic hallucinations (occurring at the threshold of sleep)
  are well-documented and extremely common during febrile illness.
  Patients in high fever regularly experience vivid apparitions of
  familiar figures — especially recently deceased individuals they
  were already afraid of. Fear of Arnold primed these hallucinations.

  The visitations were symptoms of illness — not its cause.`
        ]
      }
    ],
    diagnoses: [
      {
        id: 'revenant',
        label: 'True revenant — Arnold returned from death to prey on the village',
        correct: false
      },
      {
        id: 'oil-preservation',
        label: 'Oil/garlic burial rituals preserved the body; disease cluster killed villagers',
        correct: true
      },
      {
        id: 'plague',
        label: 'Bubonic plague alone explains everything — the burial is unrelated',
        correct: false
      }
    ],
    feedback: `SCHOLARLY ANALYSIS:
The Arnold Paole case, documented in the Visum et Repertum (1732), is foundational
to understanding how natural processes generated vampire accusations. Barber (1988)
systematically shows how Serbian burial rituals involving oil, garlic, and hawthorn
created preservation conditions that shocked officials unfamiliar with taphonomy.
Post-mortem bloating and purging of blood — normal decomposition phenomena — were
read as evidence of recent feeding. Perkowski (1976) situates the case within the
18th-century Slavic revenant tradition where improper burial or violent death was
believed to trap the soul. The disease cluster that killed four villagers was a
concurrent epidemic event, not supernatural predation — but the cultural framework
of vampirism provided the explanatory lens through which all evidence was filtered.`
  },

  {
    id: 'peter-plogojowitz',
    title: 'CASE III: THE PETER PLOGOJOWITZ CASE',
    location: 'Kisilova, Serbia',
    year: '1725',
    ascii: `
  +------------------------------------------------------------------+
  |                                                                  |
  |   C A S E   I I I   :   P E T E R   P L O G O J O W I T Z      |
  |  ================================================================|
  |                                                                  |
  |               .---------.                                        |
  |              /|         |\\    "The Peasant's Secret"            |
  |             | |  R. I. P.| |                                     |
  |             | |   1725   | |                                     |
  |              \\|_________|/                                      |
  |                                                                  |
  |              ~ 1725  *  Kisilova, Serbia ~                       |
  +------------------------------------------------------------------+`,
    narrative: `In the village of Kisilova, Serbia, a peasant named Peter Plogojowitz
died and was buried in 1725. Within days, nine villagers fell ill and
died — each reportedly visited by Peter's apparition the night before.

The Imperial Provisor Frombald reluctantly permits an exhumation,
demanded by villagers threatening to abandon the village entirely.
When the coffin is opened, the body appears remarkably fresh: hair,
beard, and nails seem to have grown, new skin has formed beneath the
old, and most strikingly, the heart contains fresh liquid blood.
The village priest and administrator document the scene in official
reports filed with the Austrian Imperial Court in Vienna.`,
    paths: [
      {
        id: 'A',
        label: 'Path A',
        description: 'Examine the grave site: soil moisture, acidity, and disturbance patterns',
        evidence: [
          `GRAVE SITE ANALYSIS A-1: Soil Profile

  Kisilova burial ground — core sample results:

    Soil composition:  Waterlogged alluvial clay
    Oxygen level:      Near-zero (anaerobic)
    Moisture content:  High — consistent with Morava River valley
    pH:                7.1 (neutral — favorable for adipocere formation)
    Burial depth:      Approximately 1 meter

  These are precisely the conditions required to initiate adipocere
  formation (saponification of body fat). The site is a near-ideal
  natural preservation environment.`,

          `GRAVE SITE ANALYSIS A-2: Surface Disturbance

  Examination of the grave surface and surrounding soil reveals:

    - No disturbance pattern from above (no tunneling, no cracks)
    - Coffin lid intact when opened
    - No evidence of external interference with the burial

  This rules out grave robbery, animal activity, or any form of
  physical egress from the coffin. The body was exactly where
  it was placed at burial.

  The preservation had to have occurred inside the sealed burial
  environment — which is exactly where anaerobic adipocere
  formation takes place.`,

          `GRAVE SITE ANALYSIS A-3: Environmental Preservation Summary

  Combining all site factors:

    Anaerobic soil      + sealed coffin    = no aerobic bacterial activity
    High moisture       + clay seal        = saponification conditions met
    Neutral pH          + warm season      = adipocere formation accelerated
    Burial depth ~1m    + water table      = consistent anaerobic saturation

  Barber (1988) identifies the Kisilova site conditions as a textbook
  example of a natural adipocere formation environment. The body's
  preserved state required no supernatural explanation — it required
  only the right geology, which Kisilova provided.`
        ]
      },
      {
        id: 'B',
        label: 'Path B',
        description: 'Interview surviving families and construct a village death timeline',
        evidence: [
          `DEATH TIMELINE B-1: The Nine Victims

  Reconstructed sequence of deaths following Peter's burial:

    Day 1-3:   First death reported
    Day 4-7:   Second and third deaths
    Day 8-14:  Four more deaths
    Day 15-21: Final two deaths

  Pattern: rapid early cluster, then slowing — consistent with
  a point-source epidemic (contaminated water, infected food supply)
  rather than sequential supernatural predation.

  All nine reported similar symptoms: fever, weakness, respiratory
  distress, pallor — consistent with plague, typhus, or acute
  gastrointestinal infection.`,

          `DEATH TIMELINE B-2: Symptom Analysis

  Family testimony on victim symptoms:

    "He grew pale and could not eat" — consistent with fever/infection
    "She sweated through the night"  — consistent with febrile illness
    "He could not draw breath"       — respiratory infection or plague
    "She wasted in days"             — rapid acute illness

  No reported symptoms are specific to vampiric predation in the
  folkloric sense (puncture marks, blood loss, etc.).
  All reported symptoms are consistent with infectious disease
  moving rapidly through a close-quartered population in summer.`,

          `DEATH TIMELINE B-3: The Hallucination Factor

  Nine of nine victims (or their families) reported that Peter
  Plogojowitz appeared at the bedside before the person fell ill.

  This uniform report is often cited as compelling evidence.
  It is actually evidence of something else:

  When a community is gripped by fear of a specific named individual,
  and members of that community begin to fall ill with fever,
  hypnagogic (pre-sleep) and hypnopompic (waking) hallucinations
  will reliably take the form of the feared figure.

  The apparition was the fever. The nine reports are medically
  predictable given the community's state of terror — not evidence
  of an actual nocturnal visitor.`
        ]
      },
      {
        id: 'C',
        label: 'Path C',
        description: 'Analyze soil conditions for adipocere formation',
        evidence: [
          `FORENSIC ANALYSIS C-1: What Is Adipocere?

  Adipocere (from Latin: adipo = fat, cera = wax) is a waxy substance
  formed when body fat undergoes saponification — a chemical reaction
  converting fat into fatty acids and glycerol under specific conditions.

  Required conditions:
    1. High moisture environment
    2. Anaerobic (low/no oxygen) conditions
    3. Moderate temperature (warmer accelerates formation)
    4. Neutral to slightly alkaline pH
    5. Sufficient body fat present

  All five conditions were met at the Kisilova burial site.`,

          `FORENSIC ANALYSIS C-2: Adipocere Timeline

  How quickly can adipocere form?

    Minimum onset:    3-4 weeks under ideal conditions
    Full formation:   Several months to years
    Partial formation: Sufficient to preserve appearance in weeks

  Peter Plogojowitz was exhumed approximately 6-8 weeks after burial —
  well within the window for significant adipocere formation to have
  begun, particularly in Kisilova's high-moisture anaerobic soil.

  Partial adipocere formation would produce exactly what the
  Austrian Provisor Frombald described: intact-looking flesh,
  preserved skin layers, and organs that appeared undecayed.`,

          `FORENSIC ANALYSIS C-3: Explaining the Heart

  The "fresh liquid blood" in Peter's heart is the most frequently
  cited "impossible" evidence in this case. Adipocere explains it:

    Normal decomposition: heart tissue liquefies and dries out
    With adipocere:       cardiac fat saponifies; tissue preserved
                          post-mortem blood pooling is trapped
                          liquid remains in cardiac chambers

  The liquid in the heart was not fresh blood indicating recent
  circulation. It was post-mortem pooled blood preserved by the
  adipocere process — a normal finding in cold, anaerobic burials.

  Barber (1988) devotes extended analysis to this specific point,
  calling the Plogojowitz heart the most misinterpreted piece of
  evidence in vampire folklore scholarship.`
        ]
      }
    ],
    diagnoses: [
      {
        id: 'revenant',
        label: "True revenant — Peter rose from death to drain the village's blood",
        correct: false
      },
      {
        id: 'adipocere',
        label: 'Adipocere formation + disease cluster: natural preservation misread as supernatural',
        correct: true
      },
      {
        id: 'soil-disease',
        label: 'Soil toxicity caused the deaths independently — unrelated to the burial',
        correct: false
      }
    ],
    feedback: `SCHOLARLY ANALYSIS:
The Peter Plogojowitz case is one of the most extensively documented vampire
investigations in history. Barber (1988) identifies adipocere formation as the
key mechanism: the saponification of body fat under Kisilova's anaerobic, moist
conditions produced exactly the preserved appearance described — intact flesh,
liquid in cardiac chambers, seemingly new skin. Combined with a concurrent disease
cluster moving through a densely packed village, the case shows how natural
taphonomic processes, filtered through a Slavic revenant belief framework, generated
official vampire accusations that reached the Austrian Imperial Court. Perkowski (1976)
places this within the tradition where improper burial or violent death traps the soul
— the theoretical lens that made Peter's preserved appearance legible as evidence of
continued animation rather than as natural chemistry.`
  }
];

module.exports = { cases };
