ccops
=================

corecraft ops cli


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ccops.svg)](https://npmjs.org/package/ccops)
[![Downloads/week](https://img.shields.io/npm/dw/ccops.svg)](https://npmjs.org/package/ccops)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ccops
$ ccops COMMAND
running command...
$ ccops (--version)
ccops/0.0.0 darwin-x64 node-v24.3.0
$ ccops --help [COMMAND]
USAGE
  $ ccops COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ccops help [COMMAND]`](#ccops-help-command)
* [`ccops plugins`](#ccops-plugins)
* [`ccops plugins add PLUGIN`](#ccops-plugins-add-plugin)
* [`ccops plugins:inspect PLUGIN...`](#ccops-pluginsinspect-plugin)
* [`ccops plugins install PLUGIN`](#ccops-plugins-install-plugin)
* [`ccops plugins link PATH`](#ccops-plugins-link-path)
* [`ccops plugins remove [PLUGIN]`](#ccops-plugins-remove-plugin)
* [`ccops plugins reset`](#ccops-plugins-reset)
* [`ccops plugins uninstall [PLUGIN]`](#ccops-plugins-uninstall-plugin)
* [`ccops plugins unlink [PLUGIN]`](#ccops-plugins-unlink-plugin)
* [`ccops plugins update`](#ccops-plugins-update)

## `ccops help [COMMAND]`

Display help for ccops.

```
USAGE
  $ ccops help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ccops.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.29/src/commands/help.ts)_

## `ccops plugins`

List installed plugins.

```
USAGE
  $ ccops plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ccops plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/index.ts)_

## `ccops plugins add PLUGIN`

Installs a plugin into ccops.

```
USAGE
  $ ccops plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ccops.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CCOPS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CCOPS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ccops plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ccops plugins add myplugin

  Install a plugin from a github url.

    $ ccops plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ccops plugins add someuser/someplugin
```

## `ccops plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ccops plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ccops plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/inspect.ts)_

## `ccops plugins install PLUGIN`

Installs a plugin into ccops.

```
USAGE
  $ ccops plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ccops.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CCOPS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CCOPS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ccops plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ccops plugins install myplugin

  Install a plugin from a github url.

    $ ccops plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ccops plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/install.ts)_

## `ccops plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ ccops plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ccops plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/link.ts)_

## `ccops plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ccops plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ccops plugins unlink
  $ ccops plugins remove

EXAMPLES
  $ ccops plugins remove myplugin
```

## `ccops plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ ccops plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/reset.ts)_

## `ccops plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ccops plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ccops plugins unlink
  $ ccops plugins remove

EXAMPLES
  $ ccops plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/uninstall.ts)_

## `ccops plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ccops plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ccops plugins unlink
  $ ccops plugins remove

EXAMPLES
  $ ccops plugins unlink myplugin
```

## `ccops plugins update`

Update installed plugins.

```
USAGE
  $ ccops plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.42/src/commands/plugins/update.ts)_
<!-- commandsstop -->
