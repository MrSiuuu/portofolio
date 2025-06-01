export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  longDescription?: string;
  technologies?: string[];
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

export interface Experience {
  title: string;
  company: string;
  logo: string;
  period: string;
  description: string;
  isRight?: boolean; // Pour alterner les expériences à gauche et à droite
}

export interface Tool {
  name: string;
  logo: string;
  category?: string;
}
