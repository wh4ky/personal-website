import * as env from "../env.ts";

document.addEventListener("DOMContentLoaded", () => {
  const githubProjectsElement = document.getElementById("projects") as HTMLDivElement;
  assemble(githubProjectsElement);
});

// Flawed repository type.
type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};

const baseURL: string = "https://api.github.com";

async function assemble(div: HTMLDivElement) {
  const headers: Headers = new Headers();
  headers.append("Accept", "application/vnd.github+json");

  // @ts-expect-error
  if (env.GITHUB_TOKEN != null) {
    console.log("Fetching data authorised with provided token!");
    // @ts-expect-error
    headers.append("Authorization", `Bearer ${env.GITHUB_TOKEN}`);
  }

  const resp = await fetch(new URL(`${baseURL}/users/wh4ky/repos`), { headers: headers });
  if (!resp.ok) {
    console.warn("Couldn't load github projects!");
    return;
  }
  const data: Array<Repository> = JSON.parse(await resp.text());

  var fragment = document.createDocumentFragment();

  for (const item of data) {
    var carouselItem: HTMLDivElement = document.createElement('div');
    var cardItem: HTMLDivElement = document.createElement('div');
    var cardBody: HTMLDivElement = document.createElement('div');

    var cardTitle: HTMLHeadingElement = document.createElement('h3');
    var projectLink: HTMLAnchorElement = document.createElement('a');

    var container: HTMLDivElement = document.createElement('div');
    var cardInfo: HTMLParagraphElement = document.createElement('p');
    var cardLang: HTMLParagraphElement = document.createElement('p');

    var cardDesc: HTMLParagraphElement = document.createElement('p');

    carouselItem.classList.add("carousel-item");

    cardItem.classList.add("card");
    cardItem.classList.add("card-xl");
    cardItem.classList.add("bg-base-200");
    cardItem.classList.add("shadow-sm");
    cardItem.classList.add("w-80");
    cardItem.classList.add("h-100");

    // Title
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("text-sm");
    cardTitle.textContent = `${item.owner.login}/`;
    projectLink.classList.add("text-primary");
    projectLink.classList.add("text-2xl");
    projectLink.href = item.html_url;
    projectLink.textContent = item.name;
    cardTitle.appendChild(projectLink);

    container.classList.add("flex");
    container.classList.add("items-end");
    container.classList.add("space-x-4");

    cardInfo.classList.add("text-xs");
    cardInfo.textContent = `licence: ${item.license ? item.license.name : "none"}`;

    cardLang.classList.add("text-xs");
    if (item.language != null) {
      var langResp = await fetch(new URL(item.languages_url), { headers: headers });
      if (!langResp.ok) {
        console.warn(`Couldn't load languages of project ${item.full_name}`);
        continue;
      }
      const langData: any = JSON.parse(await langResp.text());

      var langTotal: number = 0;
      const languageList: Array<string> = [];

      for (const language of Object.entries(langData)) {
        langTotal += Number(language[1]);
      }
      for (const language of Object.entries(langData)) {
        languageList.push(`${((Number(language[1]) / langTotal) * 100).toFixed(1)}% ${language[0]}`);
      }

      cardLang.innerHTML = languageList.join("<br />");
    }

    cardDesc.classList.add("text-lg");
    cardDesc.textContent = item.description;

    cardBody.classList.add("card-body");

    container.appendChild(cardInfo);
    container.appendChild(cardLang);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDesc);
    cardBody.appendChild(container);

    cardItem.appendChild(cardBody);
    carouselItem.appendChild(cardItem);

    fragment.appendChild(carouselItem);
  }

  div.appendChild(fragment);
}
