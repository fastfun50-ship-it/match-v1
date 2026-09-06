export const spor = [
  { key: 'sosu', label: 'SOSU' },
  { key: 'bygge', label: 'Bygge' },
  { key: 'lager', label: 'Lager' },
  { key: 'kontor', label: 'Kontor' },
  { key: 'andet', label: 'Andet' },
] as const;

export const omraader = [
  { key: 'fyn', label: 'Fyn' },
  { key: 'trekanten', label: 'Trekanten' },
  { key: 'oestjylland', label: 'Østjylland' },
  { key: 'koebenhavn', label: 'København' },
  { key: 'andet', label: 'Andet' },
] as const;

export const niveauer: Record<string, { key: string; label: string }[]> = {
  sosu: [
    { key: 'sosu_hjaelper', label: 'SOSU-hjælper' },
    { key: 'sosu_assistent', label: 'SOSU-assistent' },
    { key: 'ssa', label: 'SSA' },
    { key: 'ufaglaert_omsorg', label: 'Ufaglært i omsorg' },
  ],
  bygge: [
    { key: 'ufaglaert', label: 'Ufaglært' },
    { key: 'faglaert', label: 'Faglært' },
    { key: 'sjakbajs_formand', label: 'Sjakbajs / formand' },
  ],
  lager: [
    { key: 'ufaglaert', label: 'Ufaglært' },
    { key: 'truck', label: 'Truck' },
    { key: 'holdleder', label: 'Holdleder' },
  ],
  kontor: [
    { key: 'assistent', label: 'Assistent' },
    { key: 'bogholderi_loen', label: 'Bogholderi / løn' },
    { key: 'andet_kontor', label: 'Andet kontor' },
  ],
  andet: [],
};

export const beviser: Record<string, { key: string; label: string }[]> = {
  sosu: [
    { key: 'sosu_bevis', label: 'SOSU-bevis' },
    { key: 'medicinhaandtering', label: 'Medicinhåndtering' },
    { key: 'foerstehjaelp', label: 'Førstehjælp' },
    { key: 'koerekort', label: 'Kørekort' },
  ],
  bygge: [
    { key: 'svendebrev', label: 'Svendebrev' },
    { key: 'stillads', label: 'Stillads' },
    { key: 'asbest', label: 'Asbest' },
    { key: 'foerstehjaelp', label: 'Førstehjælp' },
    { key: 'koerekort', label: 'Kørekort' },
  ],
  lager: [
    { key: 'truckcertifikat', label: 'Truckcertifikat' },
    { key: 'hygiejne', label: 'Hygiejne' },
    { key: 'foerstehjaelp', label: 'Førstehjælp' },
  ],
  kontor: [],
  andet: [],
};

export const start = [
  { key: 'med_det_samme', label: 'Med det samme' },
  { key: 'inden_2_uger', label: 'Inden 2 uger' },
  { key: 'senere', label: 'Senere' },
] as const;

export const bevisSvar = [
  { key: 'ja', label: 'Ja' },
  { key: 'nej', label: 'Nej' },
  { key: 'under_uddannelse', label: 'Under uddannelse' },
] as const;
