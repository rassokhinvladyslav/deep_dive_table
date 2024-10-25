interface PopupData {
  title: string;
  description: string;
  link: string | null;
  formula?: string;
}

export const popups: { [key: string]: PopupData } = {
  source: {
    title: 'Platform',
    description: 'Filter the social platform you want to analyze.',
    link: null,
  },
  targets: {
    title: 'Targets',
    description:
      'Set a target or guideline to compare your performance for each or all campaigns.',
    link: null,
  },
  growth_contribution: {
    title: 'Growth Contribution',
    description:
      'Prioritize campaigns that significantly contribute to the channel`s growth, enabling resource allocation for maximum overall growth.',
    formula:
      'Contribution to Growth = (Growth from Campaign A) / (Growth from all Campaigns with Growth)',
    link: null,
  },
  loss_contribution: {
    title: 'Loss Contribution',
    description:
      'Identify campaigns that contribute to higher losses in a marketing channel. By analyzing this metric, businesses can make informed decisions to optimize or eliminate underperforming campaigns, reducing overall losses and improving profitability.',
    formula:
      'Contribution to Loss = (Increase in Loss from Campaign A) / (Increase in Loss from all Campaigns with Loss)',
    link: null,
  },
  lifetime_impression_click: {
    title: 'Lifetime Click & View',
    description:
      'A person sees or clicks your ad and buys a product. Each touchpoint in the customer journey gets a conversion.',
    link: null,
  },
  lifetime_click: {
    title: 'Lifetime Click',
    description:
      'A person clicks on your ad and buys a product. Your ad receives a conversion regardless of its position in the customer journey, with no attribution time limit.',
    link: null,
  },
  impression: {
    title: 'Impression',
    description:
      'A person sees your ad without clicking and buys a product. Despite not clicking, your ad gets a conversion.',
    link: null,
  },
  first_click: {
    title: 'First Click',
    description:
      'A person clicks your ad and buys a product. Your ad gets a conversion if the touchpoint is the first one in the customer journey.',
    link: null,
  },
  last_click: {
    title: 'Last Click',
    description:
      'A person clicks your ad and buys a product. Your ad gets a conversion if the touchpoint is the last one in the customer journey. Also if it`s the only touchpoint in the customer journey.',
    link: null,
  },
  assisted_click: {
    title: 'Assisted Click',
    description:
      'A person clicks your ad and buys a product. Your ad gets a conversion if the touchpoint is between the first and last touchpoint in the customer journey.',
    link: null,
  },
  kickbite_ai: {
    title: 'Kickbite AI',
    description:
      'A person sees or clicks your ad and buys a product. Your ad gets a fraction of the conversion based on the behavior of the customer and interactions with other channels. This model determines the incremental value of your ad.',
    link: null,
  },
};
