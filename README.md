## IIT Goa's own Alumni Cell website:

Live on https://iitgoa.ac.in/alumnicell

### Creating a PR

In general, all PRs should be made against the `main` branch to update the edge version of the docs. If you are making a change that also affects released versions, indicate which release branches to update in your PR so a website maintainer can backport your changes.

If you are making a change that is specific to a single released version of documentation, make a PR against that branch (`release-X`). For example, if you are fixing something specific to v2.1.0 you should make a PR against the release-2.1.0 branch only. If you are fixing something that impacts v2.1.0 docs and all future versions, you should make the PR against the `main` branch so the change can also be backported to the v2.1.0 docs.

## Run the Alumni Cell website locally

### Step 1: Clone project

```sh
git clone git@github.com:Kushagra0214/alumnicell.git
cd alumnicell
```

## Step 2: Install npm dependencies

```sh
npm i
```

## Step 3: Run Alumni Cell in server mode

```sh
make serve
```

This starts up the local Hugo server on http://localhost:8080. As you make changes, the site refreshes automatically in your browser.