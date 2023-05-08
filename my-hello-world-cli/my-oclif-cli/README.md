oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif
$ oclif COMMAND
running command...
$ oclif (--version)
oclif/0.0.0 darwin-x64 node-v18.16.0
$ oclif --help [COMMAND]
USAGE
  $ oclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif hello PERSON`](#oclif-hello-person)
* [`oclif hello world`](#oclif-hello-world)
* [`oclif help [COMMANDS]`](#oclif-help-commands)
* [`oclif plugins`](#oclif-plugins)
* [`oclif plugins:install PLUGIN...`](#oclif-pluginsinstall-plugin)
* [`oclif plugins:inspect PLUGIN...`](#oclif-pluginsinspect-plugin)
* [`oclif plugins:install PLUGIN...`](#oclif-pluginsinstall-plugin-1)
* [`oclif plugins:link PLUGIN`](#oclif-pluginslink-plugin)
* [`oclif plugins:uninstall PLUGIN...`](#oclif-pluginsuninstall-plugin)
* [`oclif plugins:uninstall PLUGIN...`](#oclif-pluginsuninstall-plugin-1)
* [`oclif plugins:uninstall PLUGIN...`](#oclif-pluginsuninstall-plugin-2)
* [`oclif plugins update`](#oclif-plugins-update)

## `oclif hello PERSON`

Say hello

```
USAGE
  $ oclif hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/my-hello-world-cli/oclif/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oclif hello world`

Say hello world

```
USAGE
  $ oclif hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oclif hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oclif help [COMMANDS]`

Display help for oclif.

```
USAGE
  $ oclif help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `oclif plugins`

List installed plugins.

```
USAGE
  $ oclif plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `oclif plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif plugins add

EXAMPLES
  $ oclif plugins:install myplugin 

  $ oclif plugins:install https://github.com/someuser/someplugin

  $ oclif plugins:install someuser/someplugin
```

## `oclif plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif plugins:inspect myplugin
```

## `oclif plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif plugins add

EXAMPLES
  $ oclif plugins:install myplugin 

  $ oclif plugins:install https://github.com/someuser/someplugin

  $ oclif plugins:install someuser/someplugin
```

## `oclif plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif plugins:link myplugin
```

## `oclif plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif plugins unlink
  $ oclif plugins remove
```

## `oclif plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif plugins unlink
  $ oclif plugins remove
```

## `oclif plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif plugins unlink
  $ oclif plugins remove
```

## `oclif plugins update`

Update installed plugins.

```
USAGE
  $ oclif plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
