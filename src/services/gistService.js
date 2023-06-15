import { Octokit } from "@octokit/rest";
export const octokit = new Octokit()

export const getPublicGists = () => octokit.gists.listPublic()

export const getGistForUser = username =>  octokit.gists.listForUser({ username });