export type MatchableProfile = {
  id: string;
  expertise: string[];
  country: string;
  role_type: string;
};

export type MatchableProject = {
  id: string;
  needed_capabilities: string[];
  mission_area: string;
  owner_id: string;
};

/**
 * MR Match scoring: how well a member's capabilities meet a project's needs.
 * 10 points per matched capability, plus signals for mission area and country.
 */
export function matchScore(project: MatchableProject, profile: MatchableProfile): number {
  const expertise = profile.expertise.map((e) => e.toLowerCase());
  const needed = project.needed_capabilities.map((c) => c.toLowerCase());
  const overlap = needed.filter((need) => expertise.includes(need));

  let score = overlap.length * 10;
  if (expertise.includes(project.mission_area.toLowerCase())) score += 8;
  if (profile.role_type === "clinician" && needed.includes("clinical trials")) score += 4;
  if (profile.role_type === "investor" && needed.includes("funding")) score += 4;
  return score;
}

export function matchedCapabilities(project: MatchableProject, profile: MatchableProfile): string[] {
  const expertise = profile.expertise.map((e) => e.toLowerCase());
  return project.needed_capabilities.filter((c) => expertise.includes(c.toLowerCase()));
}
