export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "furniture-restoration",
    title: "Furniture Restoration",
    summary:
      "Returning beloved pieces to their original strength, beauty, and character.",
    description:
      "From tired heirlooms to damaged finds, we carefully assess each piece and bring it back to life — honouring its age, maker, and story while restoring structural integrity and visual warmth.",
    icon: "chair",
  },
  {
    slug: "refinishing",
    title: "Refinishing & Surface Repair",
    summary:
      "Strip, repair, and rebuild finishes with traditional hand-rubbed methods.",
    description:
      "We remove worn or damaged coatings and rebuild the surface using period-appropriate techniques — hand-rubbed oils, shellac, and lacquer — for a finish that looks authentically aged, never plastic.",
    icon: "brush",
  },
  {
    slug: "structural-repair",
    title: "Structural & Joinery Repair",
    summary:
      "Loose joints, splits, and breaks repaired with invisible, lasting methods.",
    description:
      "Using traditional hide glues and expert joinery, we re-glue, re-joint, and reinforce frames so your furniture is as solid as the day it was built — without compromising its original construction.",
    icon: "tools",
  },
  {
    slug: "reupholstery",
    title: "Reupholstery Coordination",
    summary:
      "Sensitive re-covering that respects period style and original silhouette.",
    description:
      "We coordinate with trusted upholstery partners to replace tired fabric and padding, selecting materials and techniques that complement the piece's era and your home.",
    icon: "fabric",
  },
  {
    slug: "cleaning-preservation",
    title: "Cleaning & Preservation",
    summary:
      "Gentle, reversible care that protects pieces for generations to come.",
    description:
      "Specialist cleaning, waxing, and conservation treatments remove grime and stabilise finishes — preserving patina and protecting against further deterioration.",
    icon: "leaf",
  },
  {
    slug: "custom-finishes",
    title: "Custom Finish Matching",
    summary:
      "Bespoke colour and sheen matched precisely to your existing pieces.",
    description:
      "Need a new addition to blend with a set? We mix and match stains, tones, and sheens so repaired or added elements disappear seamlessly into the whole.",
    icon: "palette",
  },
];
