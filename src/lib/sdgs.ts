export enum SdgKey {
  NoPoverty = 1,
  ZeroHunger = 2,
  GoodHealthAndWellBeing = 3,
  QualityEducation = 4,
  GenderEquality = 5,
  CleanWaterAndSanitation = 6,
  AffordableAndCleanEnergy = 7,
  DecentWorkAndEconomicGrowth = 8,
  IndustryInnovationAndInfrastructure = 9,
  ReducedInequalities = 10,
  SustainableCitiesAndCommunities = 11,
  ResponsibleConsumptionAndProduction = 12,
  ClimateAction = 13,
  LifeBelowWater = 14,
  LifeOnLand = 15,
  PeaceJusticeAndStrongInstitutions = 16,
  PartnershipsForTheGoals = 17,
}

// Sustainable Development Goals (SDGs) as per the United Nations.
// https://sustainabledevelopment.un.org/sdgs

export const sdgs = [
  {
    goal: SdgKey.NoPoverty,
    label: 'No Poverty',
    description: 'End poverty in all its forms everywhere',
  },
  {
    goal: SdgKey.ZeroHunger,
    label: 'Zero Hunger',
    description:
      'End hunger, achieve food security and improved nutrition and promote sustainable agriculture',
  },
  {
    goal: SdgKey.GoodHealthAndWellBeing,
    label: 'Good Health and Well-being',
    description:
      'Ensure healthy lives and promote well-being for all at all ages',
  },
  {
    goal: SdgKey.QualityEducation,
    label: 'Quality Education',
    description:
      'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all',
  },
  {
    goal: SdgKey.GenderEquality,
    label: 'Gender Equality',
    description: 'Achieve gender equality and empower all women and girls',
  },
  {
    goal: SdgKey.CleanWaterAndSanitation,
    label: 'Clean Water and Sanitation',
    description:
      'Ensure availability and sustainable management of water and sanitation for all',
  },
  {
    goal: SdgKey.AffordableAndCleanEnergy,
    label: 'Affordable and Clean Energy',
    description:
      'Ensure access to affordable, reliable, sustainable and modern energy for all',
  },
  {
    goal: SdgKey.DecentWorkAndEconomicGrowth,
    label: 'Decent Work and Economic Growth',
    description:
      'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
  },
  {
    goal: SdgKey.IndustryInnovationAndInfrastructure,
    label: 'Industry, Innovation and Infrastructure',
    description:
      'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation',
  },
  {
    goal: SdgKey.ReducedInequalities,
    label: 'Reduced Inequalities',
    description: 'Reduce income inequality within and among countries',
  },
  {
    goal: SdgKey.SustainableCitiesAndCommunities,
    label: 'Sustainable Cities and Communities',
    description:
      'Make cities and human settlements inclusive, safe, resilient and sustainable',
  },
  {
    goal: SdgKey.ResponsibleConsumptionAndProduction,
    label: 'Responsible Consumption and Production',
    description: 'Ensure sustainable consumption and production patterns',
  },
  {
    goal: SdgKey.ClimateAction,
    label: 'Climate Action',
    description: 'Take urgent action to combat climate change and its impacts',
  },
  {
    goal: SdgKey.LifeBelowWater,
    label: 'Life Below Water',
    description:
      'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
  },
  {
    goal: SdgKey.LifeOnLand,
    label: 'Life on Land',
    description:
      'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss',
  },
  {
    goal: SdgKey.PeaceJusticeAndStrongInstitutions,
    label: 'Peace, Justice and Strong Institutions',
    description:
      'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels',
  },
  {
    goal: SdgKey.PartnershipsForTheGoals,
    label: 'Partnerships for the Goals',
    description:
      'Strengthen the means of implementation and revitalize the global partnership for sustainable development',
  },
]

export function getSdgDescription(
  goals: SdgKey[],
): { goal: SdgKey; label: string; description: string }[] {
  return goals.map((goal) => {
    const sdg = sdgs.find((sdg) => sdg.goal === goal)
    if (!sdg) {
      throw new Error(`No description for SDG ${goal}`)
    }
    return { goal, label: sdg.label, description: sdg.description }
  })
}
