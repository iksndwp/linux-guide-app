export interface Distro {
  id: string;
  name: string;
  packageManager: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Family {
  id: string;
  name: string;
  distros: Distro[];
}

export const mockFamilies: Family[] = [
  {
    id: 'debian',
    name: 'Debian Family',
    distros: [
      { id: 'd1', name: 'Ubuntu', packageManager: 'APT', difficulty: 'Beginner' },
      { id: 'd2', name: 'Linux Mint', packageManager: 'APT', difficulty: 'Beginner' },
      { id: 'd3', name: 'Debian', packageManager: 'APT', difficulty: 'Intermediate' },
      { id: 'd4', name: 'Pop!_OS', packageManager: 'APT', difficulty: 'Beginner' },
    ]
  },
  {
    id: 'redhat',
    name: 'Red Hat Family',
    distros: [
      { id: 'r1', name: 'Fedora', packageManager: 'DNF', difficulty: 'Intermediate' },
      { id: 'r2', name: 'Rocky Linux', packageManager: 'DNF', difficulty: 'Advanced' },
      { id: 'r3', name: 'AlmaLinux', packageManager: 'DNF', difficulty: 'Advanced' },
    ]
  },
  {
    id: 'arch',
    name: 'Arch Family',
    distros: [
      { id: 'a1', name: 'Arch Linux', packageManager: 'Pacman', difficulty: 'Advanced' },
      { id: 'a2', name: 'Manjaro', packageManager: 'Pacman', difficulty: 'Beginner' },
      { id: 'a3', name: 'EndeavourOS', packageManager: 'Pacman', difficulty: 'Intermediate' },
    ]
  }
];

export const libraryStats = {
  distros: 10,
  families: 3,
  beginnerFriendly: 4,
};
