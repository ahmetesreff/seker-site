export const STONE_TYPES = [
  { value: "mermer", label: "Mermer" },
  { value: "granit", label: "Granit" },
  { value: "quartz", label: "Quartz" },
  { value: "porselen", label: "Porselen" },
] as const;

export const SERVICE_TYPES = [
  { value: "mutfak-tezgahi", label: "Mutfak Tezgahı" },
  { value: "banyo-tezgahi", label: "Banyo Tezgahı" },
  { value: "merdiven", label: "Merdiven" },
  { value: "pencere-balkon", label: "Pencere & Balkon" },
  { value: "somine", label: "Şömine" },
  { value: "mezar-ozel", label: "Mezar & Özel" },
  { value: "havuz", label: "Havuz" },
] as const;

export const QP_STONE = "tas";
export const QP_SERVICE = "hizmet";

export function stoneLabel(value: string): string {
  return STONE_TYPES.find((s) => s.value === value)?.label ?? value;
}

export function serviceLabel(value: string): string {
  return SERVICE_TYPES.find((s) => s.value === value)?.label ?? value;
}
