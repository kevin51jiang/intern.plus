<h3>
    <img alt="Tugboat logo" src="./src/assets/img/logo.png" width="30" />
    Tugboat
</h3>

tugga tugga choo choo

### Design

Check out [the mocks](https://www.figma.com/file/FyfrbCpoSGAeY3eTROqPx5/Tugboat) on Figma! You can also watch a [timelapse of the design process](https://youtu.be/qe5OSFoVCmA) on YouTube.

### Development guidelines

This project follows a (trunk based development)[https://trunkbaseddevelopment.com/] style. Branches are split off from the `master` branch for features, fixes, and all other development. The `release` branch contains production code that must always be kept in a go-live state.

##### Branch naming

Branches are prefixed with the following codes to denote their purpose:

- `feat[-XX]/`: A larger feature or enhancement for the site.
- `fix[-XX]/`: A fix or patch for bugs or errors.
- `chore[-XX]/`: Development on aspects with no production changes (documentation, refactoring, style).

Branch names contain the issue number on which the development efforts are focused, if any.

##### Commits into `master`

When branches are merged back into `master`, they must be tagged with one of `major|minor|patch`, following semver rules. This allows for more context when browsing and is also used by CI when deploying.
