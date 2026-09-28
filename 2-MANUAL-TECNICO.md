**Autor:** Vidal De Los Santos

**Versión:** 1.0.0

**Última actualización:** 27/09/2026

[Ver Manual Técnico en el repositorio](https://github.com/VidalLeonardoDeLosSantosRincon/github-search-app/blob/master/2-MANUAL-TECNICO.md)

---
# Manual Técnico: [GitHub Search App](https://github.com/VidalLeonardoDeLosSantosRincon/github-search-app/tree/master)

## Manual Técnico
### Descripción General
Aplicación SPA (Single Page Application) desarrollada en Angular v17.3.0 que consume la REST API pública de GitHub para renderizar datos de perfiles e items de repositorios.

---
### API Utilizada
Consume **GitHub REST API v3**:

**Información del perfil:**  ``GET [https://api.github.com/users/](https://api.github.com/users/){username}``

---
### Ejemplo:

**Petición:** ``GET https://api.github.com/users/gvanrossum``

**Respuesa:**
```json
{
    "login": "gvanrossum",
    "id": 2894642,
    "node_id": "MDQ6VXNlcjI4OTQ2NDI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2894642?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gvanrossum",
    "html_url": "https://github.com/gvanrossum",
    "followers_url": "https://api.github.com/users/gvanrossum/followers",
    "following_url": "https://api.github.com/users/gvanrossum/following{/other_user}",
    "gists_url": "https://api.github.com/users/gvanrossum/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gvanrossum/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gvanrossum/subscriptions",
    "organizations_url": "https://api.github.com/users/gvanrossum/orgs",
    "repos_url": "https://api.github.com/users/gvanrossum/repos",
    "events_url": "https://api.github.com/users/gvanrossum/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gvanrossum/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Guido van Rossum",
    "company": "Microsoft",
    "blog": "https://python.org/~guido/",
    "location": "San Francisco Bay Area",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "gvanrossum",
    "public_repos": 28,
    "public_gists": 12,
    "followers": 27084,
    "following": 4,
    "created_at": "2012-11-26T18:46:40Z",
    "updated_at": "2026-09-23T02:58:26Z"
}
```
---

**Lista de repositorios:** ``GET [https://api.github.com/users/](https://api.github.com/users/){username}/repos`` (Devuelve un array de máximo 30 elementos por defecto).

---
### Ejemplo:

**Petición:** ``GET https://api.github.com/users/gvanrossum/repos``

**Respuesa:**
```json
[
  {
    "id": 17178571,
    "node_id": "MDEwOlJlcG9zaXRvcnkxNzE3ODU3MQ==",
    "name": "500lines",
    "full_name": "gvanrossum/500lines",
    "private": false,
    "owner": {
      "login": "gvanrossum",
      "id": 2894642,
      "node_id": "MDQ6VXNlcjI4OTQ2NDI=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2894642?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/gvanrossum",
      "html_url": "https://github.com/gvanrossum",
      "followers_url": "https://api.github.com/users/gvanrossum/followers",
      "following_url": "https://api.github.com/users/gvanrossum/following{/other_user}",
      "gists_url": "https://api.github.com/users/gvanrossum/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/gvanrossum/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/gvanrossum/subscriptions",
      "organizations_url": "https://api.github.com/users/gvanrossum/orgs",
      "repos_url": "https://api.github.com/users/gvanrossum/repos",
      "events_url": "https://api.github.com/users/gvanrossum/events{/privacy}",
      "received_events_url": "https://api.github.com/users/gvanrossum/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/gvanrossum/500lines",
    "description": "500 Lines or Less",
    "fork": true,
    "url": "https://api.github.com/repos/gvanrossum/500lines",
    "forks_url": "https://api.github.com/repos/gvanrossum/500lines/forks",
    "keys_url": "https://api.github.com/repos/gvanrossum/500lines/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/gvanrossum/500lines/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/gvanrossum/500lines/teams",
    "hooks_url": "https://api.github.com/repos/gvanrossum/500lines/hooks",
    "issue_events_url": "https://api.github.com/repos/gvanrossum/500lines/issues/events{/number}",
    "events_url": "https://api.github.com/repos/gvanrossum/500lines/events",
    "assignees_url": "https://api.github.com/repos/gvanrossum/500lines/assignees{/user}",
    "branches_url": "https://api.github.com/repos/gvanrossum/500lines/branches{/branch}",
    "tags_url": "https://api.github.com/repos/gvanrossum/500lines/tags",
    "blobs_url": "https://api.github.com/repos/gvanrossum/500lines/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/gvanrossum/500lines/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/gvanrossum/500lines/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/gvanrossum/500lines/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/gvanrossum/500lines/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/gvanrossum/500lines/languages",
    "stargazers_url": "https://api.github.com/repos/gvanrossum/500lines/stargazers",
    "contributors_url": "https://api.github.com/repos/gvanrossum/500lines/contributors",
    "subscribers_url": "https://api.github.com/repos/gvanrossum/500lines/subscribers",
    "subscription_url": "https://api.github.com/repos/gvanrossum/500lines/subscription",
    "commits_url": "https://api.github.com/repos/gvanrossum/500lines/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/gvanrossum/500lines/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/gvanrossum/500lines/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/gvanrossum/500lines/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/gvanrossum/500lines/contents/{+path}",
    "compare_url": "https://api.github.com/repos/gvanrossum/500lines/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/gvanrossum/500lines/merges",
    "archive_url": "https://api.github.com/repos/gvanrossum/500lines/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/gvanrossum/500lines/downloads",
    "issues_url": "https://api.github.com/repos/gvanrossum/500lines/issues{/number}",
    "pulls_url": "https://api.github.com/repos/gvanrossum/500lines/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/gvanrossum/500lines/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/gvanrossum/500lines/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/gvanrossum/500lines/labels{/name}",
    "releases_url": "https://api.github.com/repos/gvanrossum/500lines/releases{/id}",
    "deployments_url": "https://api.github.com/repos/gvanrossum/500lines/deployments",
    "created_at": "2014-02-25T15:52:58Z",
    "updated_at": "2026-07-18T06:40:07Z",
    "pushed_at": "2023-01-09T16:03:59Z",
    "git_url": "git://github.com/gvanrossum/500lines.git",
    "ssh_url": "git@github.com:gvanrossum/500lines.git",
    "clone_url": "https://github.com/gvanrossum/500lines.git",
    "svn_url": "https://github.com/gvanrossum/500lines",
    "homepage": null,
    "size": 565,
    "stargazers_count": 321,
    "watchers_count": 321,
    "language": "Python",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": false,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 54,
    "mirror_url": null,
    "archived": true,
    "disabled": false,
    "open_issues_count": 1,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "has_pull_requests": true,
    "pull_request_creation_policy": "all",
    "topics": [

    ],
    "visibility": "public",
    "forks": 54,
    "open_issues": 1,
    "watchers": 321,
    "default_branch": "master"
  }
```

## Notas 
Para más detalles sobre el proceso de instalación, favor [Ver Manual del Paquete de instalación](https://github.com/VidalLeonardoDeLosSantosRincon/github-search-app/blob/master/3-PAQUETE-DE-INSTALACION.md)

---