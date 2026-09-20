export type Command = {
    id: string;
    technologyId: string;
    category: string;
    title: string;
    command: string;
    description: string;
    example?: string;
    whenToUse?: string;

    tags: string[];

    tips?: string[];
    notes?: string;
    relatedCommands?: string[];
};

export const commands: Command[] = [
    // ============================================================
    // GIT — BASIC
    // ============================================================

    {
        id: "git-init",
        technologyId: "git",
        category: "Basic",
        title: "Initialize a repository",
        command: "git init",
        description:
            "Creates a new Git repository in the current directory.",
        example: "git init",
        whenToUse:
            "Use it when you want to start tracking an existing project with Git.",
        tags: ["init", "initialize", "repository", "start"],
        tips: [
            "Run this from the root folder of your project.",
            "Git creates a hidden .git directory to store repository information.",
        ],
        notes:
            "Running git init does not automatically create a GitHub repository.",
        relatedCommands: [
            "git-status",
            "git-add",
            "git-commit",
        ],
    },

    {
        id: "git-status",
        technologyId: "git",
        category: "Basic",
        title: "Check repository status",
        command: "git status",
        description:
            "Shows the current state of your Git repository, including modified, staged, and untracked files.",
        example: "git status",
        whenToUse:
            "Use it when you want to see what has changed in your project before committing.",
        tags: ["status", "changes", "repository", "files"],
        tips: [
            "Run this frequently while working.",
            "It shows which files are staged, unstaged, or untracked.",
        ],
        notes:
            "This command does not modify your files.",
        relatedCommands: [
            "git-add",
            "git-diff",
            "git-commit",
        ],
    },

    {
        id: "git-add",
        technologyId: "git",
        category: "Basic",
        title: "Stage changes",
        command: "git add <file>",
        description:
            "Adds files or changes to the staging area so they can be included in the next commit.",
        example: "git add .",
        whenToUse:
            "Use it when you are ready to prepare your changes for a commit.",
        tags: ["add", "stage", "staging", "files"],
        tips: [
            "Use git add . to stage all changes.",
            "You can specify a single file to stage only that file.",
        ],
        relatedCommands: [
            "git-status",
            "git-commit",
            "git-restore",
        ],
    },

    {
        id: "git-commit",
        technologyId: "git",
        category: "Basic",
        title: "Commit changes",
        command: 'git commit -m "<message>"',
        description:
            "Creates a new commit containing the changes currently staged in Git.",
        example:
            'git commit -m "Add login screen"',
        whenToUse:
            "Use it after staging changes when you want to save a snapshot of your work.",
        tags: ["commit", "save", "history", "changes"],
        tips: [
            "Write short and meaningful commit messages.",
            "Check git status before committing.",
        ],
        relatedCommands: [
            "git-add",
            "git-log",
            "git-push",
        ],
    },

    {
        id: "git-diff",
        technologyId: "git",
        category: "Inspection",
        title: "View unstaged changes",
        command: "git diff",
        description:
            "Shows the differences between your working files and the staged version.",
        example: "git diff",
        whenToUse:
            "Use it when you want to inspect changes before staging them.",
        tags: ["diff", "changes", "compare", "inspect"],
        relatedCommands: [
            "git-status",
            "git-add",
            "git-diff-staged",
        ],
    },

    {
        id: "git-diff-staged",
        technologyId: "git",
        category: "Inspection",
        title: "View staged changes",
        command: "git diff --staged",
        description:
            "Shows the changes currently stored in the staging area.",
        example: "git diff --staged",
        whenToUse:
            "Use it to review exactly what will be included in your next commit.",
        tags: ["diff", "staged", "changes", "review"],
        relatedCommands: [
            "git-add",
            "git-commit",
            "git-diff",
        ],
    },

    {
        id: "git-show",
        technologyId: "git",
        category: "Inspection",
        title: "Show a commit",
        command: "git show <commit>",
        description:
            "Displays information and changes associated with a specific commit.",
        example: "git show a1b2c3d",
        whenToUse:
            "Use it when you want to inspect what a particular commit changed.",
        tags: ["show", "commit", "inspect", "history"],
        relatedCommands: [
            "git-log",
            "git-diff",
        ],
    },

    // ============================================================
    // GIT — HISTORY
    // ============================================================

    {
        id: "git-log",
        technologyId: "git",
        category: "History",
        title: "View commit history",
        command: "git log",
        description:
            "Displays the commit history of the current repository.",
        example: "git log",
        whenToUse:
            "Use it when you want to inspect previous commits and their details.",
        tags: ["log", "history", "commits", "inspect"],
        relatedCommands: [
            "git-log-oneline",
            "git-show",
            "git-revert",
        ],
    },

    {
        id: "git-log-oneline",
        technologyId: "git",
        category: "History",
        title: "View compact commit history",
        command: "git log --oneline",
        description:
            "Displays commits in a compact one-line format.",
        example: "git log --oneline",
        whenToUse:
            "Use it when you want a quick overview of your repository history.",
        tags: ["log", "history", "oneline", "commits"],
        relatedCommands: [
            "git-log",
            "git-log-graph",
        ],
    },

    {
        id: "git-log-graph",
        technologyId: "git",
        category: "History",
        title: "View branch history graph",
        command: "git log --oneline --graph --all",
        description:
            "Displays a compact graphical representation of commits and branches.",
        example:
            "git log --oneline --graph --all",
        whenToUse:
            "Use it when you want to understand how branches and commits relate to each other.",
        tags: ["log", "graph", "branches", "history"],
        relatedCommands: [
            "git-log",
            "git-branch",
            "git-merge",
        ],
    },

    {
        id: "git-blame",
        technologyId: "git",
        category: "History",
        title: "See who changed each line",
        command: "git blame <file>",
        description:
            "Shows which commit and author last modified each line of a file.",
        example: "git blame src/App.tsx",
        whenToUse:
            "Use it when you need to find when and by whom a particular line was changed.",
        tags: ["blame", "history", "author", "file"],
        notes:
            "Git blame identifies the last commit that modified each line; it does not necessarily identify the original author of the code.",
        relatedCommands: [
            "git-log",
            "git-show",
        ],
    },

    // ============================================================
    // GIT — BRANCHES
    // ============================================================

    {
        id: "git-branch",
        technologyId: "git",
        category: "Branch",
        title: "List branches",
        command: "git branch",
        description:
            "Lists the local branches in the current Git repository.",
        example: "git branch",
        whenToUse:
            "Use it when you want to see your available local branches.",
        tags: ["branch", "list", "branches"],
        relatedCommands: [
            "git-switch",
            "git-branch-create",
            "git-branch-delete",
        ],
    },

    {
        id: "git-branch-create",
        technologyId: "git",
        category: "Branch",
        title: "Create a new branch",
        command: "git branch <branch-name>",
        description:
            "Creates a new Git branch without switching to it.",
        example: "git branch feature/login",
        whenToUse:
            "Use it when you want to create a branch before deciding when to switch to it.",
        tags: ["branch", "create", "feature", "new"],
        relatedCommands: [
            "git-switch",
            "git-branch-delete",
        ],
    },

    {
        id: "git-switch",
        technologyId: "git",
        category: "Branch",
        title: "Switch branches",
        command: "git switch <branch-name>",
        description:
            "Switches your working directory to another Git branch.",
        example: "git switch main",
        whenToUse:
            "Use it when you need to move between branches.",
        tags: ["switch", "branch", "change"],
        relatedCommands: [
            "git-branch",
            "git-branch-create",
            "git-merge",
        ],
    },

    {
        id: "git-switch-create",
        technologyId: "git",
        category: "Branch",
        title: "Create and switch to a branch",
        command: "git switch -c <branch-name>",
        description:
            "Creates a new branch and immediately switches your working directory to it.",
        example: "git switch -c feature/login",
        whenToUse:
            "Use it when starting a new feature or task.",
        tags: ["branch", "switch", "create", "feature"],
        tips: [
            "This is a convenient way to create and start working on a new branch.",
        ],
        relatedCommands: [
            "git-branch",
            "git-merge",
            "git-push",
        ],
    },

    {
        id: "git-branch-delete",
        technologyId: "git",
        category: "Branch",
        title: "Delete a branch",
        command: "git branch -d <branch-name>",
        description:
            "Deletes a local branch that has already been merged.",
        example: "git branch -d feature/login",
        whenToUse:
            "Use it when a completed branch is no longer needed.",
        tags: ["branch", "delete", "remove", "cleanup"],
        notes:
            "Use git branch -D when you intentionally want to force-delete an unmerged branch.",
        relatedCommands: [
            "git-branch",
            "git-merge",
        ],
    },

    {
        id: "git-merge",
        technologyId: "git",
        category: "Branch",
        title: "Merge a branch",
        command: "git merge <branch-name>",
        description:
            "Combines the changes from another branch into your current branch.",
        example: "git merge feature/login",
        whenToUse:
            "Use it when you want to bring changes from another branch into the branch you are currently on.",
        tags: ["merge", "branch", "combine", "feature"],
        tips: [
            "Check your current branch before running the merge.",
            "Resolve merge conflicts if Git reports any.",
        ],
        relatedCommands: [
            "git-switch",
            "git-branch-delete",
            "git-pull",
        ],
    },

    {
        id: "git-rebase",
        technologyId: "git",
        category: "Branch",
        title: "Rebase a branch",
        command: "git rebase <branch-name>",
        description:
            "Reapplies your branch commits on top of another branch.",
        example: "git rebase main",
        whenToUse:
            "Use it when you want to update your branch with another branch while keeping a more linear history.",
        tags: ["rebase", "branch", "history", "update"],
        notes:
            "Avoid rebasing shared commits unless you understand the consequences of rewriting history.",
        relatedCommands: [
            "git-merge",
            "git-switch",
            "git-log-graph",
        ],
    },

    // ============================================================
    // GIT — REMOTE
    // ============================================================

    {
        id: "git-clone",
        technologyId: "git",
        category: "Remote",
        title: "Clone a repository",
        command: "git clone <repository-url>",
        description:
            "Downloads a remote Git repository to your computer and creates a local copy.",
        example:
            "git clone https://github.com/user/project.git",
        whenToUse:
            "Use it when you want to start working with an existing repository.",
        tags: ["clone", "download", "repository", "remote"],
        relatedCommands: [
            "git-remote",
            "git-pull",
        ],
    },

    {
        id: "git-remote",
        technologyId: "git",
        category: "Remote",
        title: "View remote repositories",
        command: "git remote -v",
        description:
            "Shows the remote repositories connected to your local Git repository.",
        example: "git remote -v",
        whenToUse:
            "Use it when you want to check which remote repository your project is connected to.",
        tags: ["remote", "repository", "origin", "github"],
        relatedCommands: [
            "git-clone",
            "git-push",
            "git-pull",
        ],
    },

    {
        id: "git-remote-add",
        technologyId: "git",
        category: "Remote",
        title: "Add a remote repository",
        command: "git remote add origin <repository-url>",
        description:
            "Connects your local repository to a remote repository.",
        example:
            "git remote add origin https://github.com/user/project.git",
        whenToUse:
            "Use it when connecting an existing local Git project to a remote repository.",
        tags: ["remote", "add", "origin", "github"],
        relatedCommands: [
            "git-remote",
            "git-push",
        ],
    },

    {
        id: "git-fetch",
        technologyId: "git",
        category: "Remote",
        title: "Fetch remote changes",
        command: "git fetch",
        description:
            "Downloads new commits and references from a remote repository without changing your current working files.",
        example: "git fetch origin",
        whenToUse:
            "Use it when you want to inspect remote updates before integrating them.",
        tags: ["fetch", "remote", "download", "update"],
        relatedCommands: [
            "git-pull",
            "git-merge",
            "git-remote",
        ],
    },

    {
        id: "git-pull",
        technologyId: "git",
        category: "Remote",
        title: "Pull remote changes",
        command: "git pull",
        description:
            "Downloads changes from a remote repository and integrates them into your current branch.",
        example: "git pull origin main",
        whenToUse:
            "Use it when you want to update your local branch with the latest remote changes.",
        tags: ["pull", "download", "remote", "update"],
        relatedCommands: [
            "git-fetch",
            "git-push",
            "git-merge",
        ],
    },

    {
        id: "git-push",
        technologyId: "git",
        category: "Remote",
        title: "Push changes",
        command: "git push",
        description:
            "Uploads your local commits to a remote repository.",
        example: "git push origin main",
        whenToUse:
            "Use it when you want to send your committed changes to a remote repository.",
        tags: ["push", "upload", "github", "remote"],
        tips: [
            "Commit your changes before pushing.",
            "For a new branch, you can use git push -u origin <branch-name>.",
        ],
        relatedCommands: [
            "git-commit",
            "git-pull",
            "git-remote",
        ],
    },

    {
        id: "git-push-upstream",
        technologyId: "git",
        category: "Remote",
        title: "Push and set upstream",
        command: "git push -u origin <branch-name>",
        description:
            "Pushes a branch to a remote repository and sets its upstream tracking branch.",
        example:
            "git push -u origin feature/login",
        whenToUse:
            "Use it the first time you push a new local branch to a remote repository.",
        tags: ["push", "upstream", "branch", "remote"],
        relatedCommands: [
            "git-push",
            "git-switch-create",
        ],
    },

    // ============================================================
    // GIT — UNDO / RECOVERY
    // ============================================================

    {
        id: "git-restore",
        technologyId: "git",
        category: "Undo",
        title: "Discard unstaged changes",
        command: "git restore <file>",
        description:
            "Restores a file in the working directory to its last committed or staged state.",
        example: "git restore App.tsx",
        whenToUse:
            "Use it when you want to discard local changes that have not been committed.",
        tags: ["restore", "undo", "discard", "changes"],
        notes:
            "Be careful: discarded unstaged changes may not be recoverable through normal Git commands.",
        relatedCommands: [
            "git-status",
            "git-add",
            "git-reset",
        ],
    },

    {
        id: "git-restore-staged",
        technologyId: "git",
        category: "Undo",
        title: "Unstage a file",
        command: "git restore --staged <file>",
        description:
            "Removes a file from the staging area while keeping its working-directory changes.",
        example: "git restore --staged App.tsx",
        whenToUse:
            "Use it when you accidentally staged a file and want to keep its changes unstaged.",
        tags: ["restore", "unstage", "staging", "undo"],
        relatedCommands: [
            "git-add",
            "git-status",
        ],
    },

    {
        id: "git-reset",
        technologyId: "git",
        category: "Undo",
        title: "Reset to a previous state",
        command: "git reset <commit>",
        description:
            "Moves the current branch pointer to another commit.",
        example: "git reset HEAD~1",
        whenToUse:
            "Use it when you need to move the current branch back to an earlier commit.",
        tags: ["reset", "undo", "commit", "history"],
        notes:
            "Reset has different modes such as --soft, --mixed, and --hard. Be especially careful with --hard.",
        relatedCommands: [
            "git-revert",
            "git-log",
            "git-restore",
        ],
    },

    {
        id: "git-revert",
        technologyId: "git",
        category: "Undo",
        title: "Revert a commit",
        command: "git revert <commit>",
        description:
            "Creates a new commit that reverses the changes introduced by an earlier commit.",
        example: "git revert a1b2c3d",
        whenToUse:
            "Use it when you need to safely undo a previously committed change without rewriting shared history.",
        tags: ["revert", "undo", "commit", "history"],
        relatedCommands: [
            "git-reset",
            "git-log",
            "git-commit",
        ],
    },

    {
        id: "git-stash",
        technologyId: "git",
        category: "Undo",
        title: "Temporarily save changes",
        command: "git stash",
        description:
            "Temporarily stores your uncommitted changes so you can work with a clean working directory.",
        example: "git stash",
        whenToUse:
            "Use it when you need to switch tasks or branches without committing unfinished work.",
        tags: ["stash", "temporary", "changes", "save"],
        relatedCommands: [
            "git-stash-pop",
            "git-switch",
            "git-status",
        ],
    },

    {
        id: "git-stash-pop",
        technologyId: "git",
        category: "Undo",
        title: "Restore stashed changes",
        command: "git stash pop",
        description:
            "Applies the most recently stashed changes and removes that stash from the stash list.",
        example: "git stash pop",
        whenToUse:
            "Use it when you are ready to continue working on previously stashed changes.",
        tags: ["stash", "pop", "restore", "changes"],
        relatedCommands: [
            "git-stash",
            "git-status",
        ],
    },

    {
        id: "git-stash-list",
        technologyId: "git",
        category: "Undo",
        title: "List stashed changes",
        command: "git stash list",
        description:
            "Displays the saved stashes in your Git repository.",
        example: "git stash list",
        whenToUse:
            "Use it when you want to see which sets of changes you have temporarily stored.",
        tags: ["stash", "list", "changes", "temporary"],
        relatedCommands: [
            "git-stash",
            "git-stash-pop",
        ],
    },

    // ============================================================
    // GIT — TAGS
    // ============================================================

    {
        id: "git-tag-list",
        technologyId: "git",
        category: "Tags",
        title: "List tags",
        command: "git tag",
        description:
            "Lists the tags available in the repository.",
        example: "git tag",
        whenToUse:
            "Use it when you want to see release or version tags.",
        tags: ["tag", "version", "release", "list"],
        relatedCommands: [
            "git-tag-create",
            "git-push-tags",
        ],
    },

    {
        id: "git-tag-create",
        technologyId: "git",
        category: "Tags",
        title: "Create a tag",
        command: "git tag <tag-name>",
        description:
            "Creates a tag pointing to the current commit.",
        example: "git tag v1.0.0",
        whenToUse:
            "Use it when marking a specific commit as a release or important version.",
        tags: ["tag", "version", "release", "create"],
        relatedCommands: [
            "git-tag-list",
            "git-push-tags",
        ],
    },

    {
        id: "git-push-tags",
        technologyId: "git",
        category: "Tags",
        title: "Push tags to remote",
        command: "git push origin --tags",
        description:
            "Uploads local tags to a remote repository.",
        example: "git push origin --tags",
        whenToUse:
            "Use it when you want to publish your local version tags to the remote repository.",
        tags: ["tag", "push", "release", "remote"],
        relatedCommands: [
            "git-tag-create",
            "git-push",
        ],
    },

    // ============================================================
    // GIT — CONFIGURATION
    // ============================================================

    {
        id: "git-config-list",
        technologyId: "git",
        category: "Configuration",
        title: "View Git configuration",
        command: "git config --list",
        description:
            "Displays the Git configuration settings currently available.",
        example: "git config --list",
        whenToUse:
            "Use it when you want to inspect your current Git configuration.",
        tags: ["config", "configuration", "settings", "git"],
        relatedCommands: [
            "git-config-name",
            "git-config-email",
        ],
    },

    {
        id: "git-config-name",
        technologyId: "git",
        category: "Configuration",
        title: "Set Git username",
        command: 'git config --global user.name "<name>"',
        description:
            "Sets the name Git uses when creating commits on your computer.",
        example:
            'git config --global user.name "Arnob"',
        whenToUse:
            "Use it when configuring Git for the first time or changing your commit author name.",
        tags: ["config", "username", "name", "setup"],
        relatedCommands: [
            "git-config-email",
            "git-config-list",
        ],
    },

    {
        id: "git-config-email",
        technologyId: "git",
        category: "Configuration",
        title: "Set Git email",
        command: 'git config --global user.email "<email>"',
        description:
            "Sets the email address Git associates with your commits.",
        example:
            'git config --global user.email "you@example.com"',
        whenToUse:
            "Use it when configuring Git for the first time or changing your commit email.",
        tags: ["config", "email", "setup", "identity"],
        relatedCommands: [
            "git-config-name",
            "git-config-list",
        ],
    },

    // ============================================================
    // GITHUB CLI
    // ============================================================

    {
        id: "github-create-repo",
        technologyId: "github",
        category: "Repository",
        title: "Create a repository with GitHub CLI",
        command: "gh repo create",
        description:
            "Creates a new GitHub repository using the GitHub command-line interface.",
        example:
            "gh repo create my-project",
        whenToUse:
            "Use it when you want to create a GitHub repository directly from your terminal.",
        tags: [
            "repository",
            "create",
            "github",
            "repo",
            "gh",
        ],
        tips: [
            "Make sure GitHub CLI is installed and authenticated first.",
        ],
        notes:
            "The gh command belongs to GitHub CLI, not Git itself.",
        relatedCommands: [
            "git-clone",
            "git-push",
        ],
    },

    // ============================================================
    // FLUTTER
    // ============================================================

    {
        id: "flutter-run",
        technologyId: "flutter",
        category: "Run",
        title: "Run Flutter app",
        command: "flutter run",
        description:
            "Builds and runs your Flutter application on a connected device or emulator.",
        example: "flutter run",
        whenToUse:
            "Use it when you want to launch your Flutter application from the terminal.",
        tags: ["run", "launch", "start", "android", "ios"],
        relatedCommands: [
            "flutter-devices",
            "flutter-clean",
        ],
    },


    {
        id: "flutter-clean",
        technologyId: "flutter",
        category: "Project",
        title: "Clean Flutter project",
        command: "flutter clean",
        description:
            "Removes the build directory and generated build files from your Flutter project.",
        example: "flutter clean",
        whenToUse:
            "Use it when your project has stale build files or you are troubleshooting build-related problems.",
        tags: ["clean", "build", "cache", "fix"],
        relatedCommands: [
            "flutter-pub-get",
            "flutter-run",
        ],
    },

    {
        id: "flutter-pub-get",
        technologyId: "flutter",
        category: "Packages",
        title: "Get project dependencies",
        command: "flutter pub get",
        description:
            "Downloads the packages defined in your pubspec.yaml file.",
        example: "flutter pub get",
        whenToUse:
            "Use it after adding or changing dependencies in pubspec.yaml.",
        tags: [
            "package",
            "dependency",
            "pubspec",
        ],
        relatedCommands: [
            "flutter-pub-add",
            "flutter-clean",
        ],
    },

    {
        id: "flutter-pub-add",
        technologyId: "flutter",
        category: "Packages",
        title: "Add a package",
        command: "flutter pub add <package>",
        description:
            "Adds a package to your Flutter project and updates pubspec.yaml.",
        example: "flutter pub add dio",
        whenToUse:
            "Use it when you want to install a package in a Flutter project.",
        tags: [
            "package",
            "add",
            "dependency",
            "install",
        ],
        relatedCommands: [
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-build-apk",
        technologyId: "flutter",
        category: "Build",
        title: "Build Android APK",
        command: "flutter build apk",
        description:
            "Builds an Android APK from your Flutter project.",
        example:
            "flutter build apk --release",
        whenToUse:
            "Use it when you need an APK file that can be installed or distributed.",
        tags: [
            "apk",
            "android",
            "build",
            "release",
        ],
        relatedCommands: [
            "flutter-run",
            "flutter-clean",
        ],
    },

    // ============================================================
    // REACT NATIVE / EXPO
    // ============================================================

    {
        id: "rn-start",
        technologyId: "react-native",
        category: "Expo",
        title: "Start Expo",
        command: "npx expo start",
        description:
            "Starts the Expo development server and opens the development tools.",
        example: "npx expo start",
        whenToUse:
            "Use it when you want to start developing and running an Expo React Native application.",
        tags: [
            "expo",
            "start",
            "run",
            "metro",
            "development",
        ],
        relatedCommands: [
            "rn-create",
        ],
    },

    {
        id: "rn-create",
        technologyId: "react-native",
        category: "Project",
        title: "Create an Expo project",
        command:
            "npx create-expo-app@latest",
        description:
            "Creates a new React Native application using the Expo framework.",
        example:
            "npx create-expo-app@latest MyApp --template blank-typescript",
        whenToUse:
            "Use it when starting a new React Native project with Expo.",
        tags: [
            "create",
            "project",
            "expo",
            "new app",
        ],
        relatedCommands: [
            "rn-start",
            "rn-install-package",
        ],
    },

    {
        id: "rn-install-package",
        technologyId: "react-native",
        category: "Packages",
        title: "Install a package",
        command:
            "npm install <package>",
        description:
            "Installs a JavaScript package into your React Native project.",
        example: "npm install axios",
        whenToUse:
            "Use it when you need to add a JavaScript dependency to your project.",
        tags: [
            "package",
            "install",
            "npm",
            "dependency",
        ],
        relatedCommands: [
            "rn-create",
            "rn-start",
        ],
    },
    {
        id: "git-mv",
        technologyId: "git",
        category: "Basic",
        title: "Rename or move a file",
        command: "git mv <old-name> <new-name>",
        description:
            "Renames or moves a file while automatically staging the change in Git.",
        example: "git mv old-name.ts new-name.ts",
        whenToUse:
            "Use it when you want to rename or move a tracked file.",
        tags: ["move", "rename", "file", "stage"],
        relatedCommands: [
            "git-status",
            "git-add",
        ],
    },

    {
        id: "git-rm",
        technologyId: "git",
        category: "Basic",
        title: "Remove a tracked file",
        command: "git rm <file>",
        description:
            "Removes a file from the working directory and stages the deletion for the next commit.",
        example: "git rm old-file.txt",
        whenToUse:
            "Use it when you want to delete a tracked file and record the deletion in Git.",
        tags: ["remove", "delete", "file", "stage"],
        relatedCommands: [
            "git-status",
            "git-commit",
        ],
    },

    {
        id: "git-diff-commit",
        technologyId: "git",
        category: "Inspection",
        title: "Compare two commits",
        command: "git diff <commit1> <commit2>",
        description:
            "Shows the differences between two commits.",
        example: "git diff HEAD~1 HEAD",
        whenToUse:
            "Use it when you want to compare the changes introduced between two points in Git history.",
        tags: ["diff", "compare", "commits", "history"],
        relatedCommands: [
            "git-diff",
            "git-show",
            "git-log",
        ],
    },

    {
        id: "git-shortlog",
        technologyId: "git",
        category: "History",
        title: "View contributor summary",
        command: "git shortlog",
        description:
            "Summarizes commits by author and displays a readable contributor list.",
        example: "git shortlog -s -n",
        whenToUse:
            "Use it when you want a quick summary of who has contributed to a repository.",
        tags: ["shortlog", "history", "authors", "contributors"],
        relatedCommands: [
            "git-log",
            "git-blame",
        ],
    },

    {
        id: "git-branch-all",
        technologyId: "git",
        category: "Branch",
        title: "List all branches",
        command: "git branch -a",
        description:
            "Lists both local and remote-tracking branches.",
        example: "git branch -a",
        whenToUse:
            "Use it when you want to see every branch available locally and from configured remotes.",
        tags: ["branch", "list", "remote", "branches"],
        relatedCommands: [
            "git-branch",
            "git-remote",
            "git-switch",
        ],
    },

    {
        id: "git-branch-rename",
        technologyId: "git",
        category: "Branch",
        title: "Rename a branch",
        command: "git branch -m <new-name>",
        description:
            "Renames the current local branch.",
        example: "git branch -m main",
        whenToUse:
            "Use it when you want to change the name of your current branch.",
        tags: ["branch", "rename", "change", "main"],
        relatedCommands: [
            "git-branch",
            "git-push-upstream",
        ],
    },

    {
        id: "git-merge-abort",
        technologyId: "git",
        category: "Branch",
        title: "Abort a merge",
        command: "git merge --abort",
        description:
            "Stops an in-progress merge and attempts to restore the repository to its state before the merge started.",
        example: "git merge --abort",
        whenToUse:
            "Use it when you decide not to continue with a merge that is currently in progress.",
        tags: ["merge", "abort", "conflict", "undo"],
        relatedCommands: [
            "git-merge",
            "git-status",
        ],
    },

    {
        id: "git-rebase-abort",
        technologyId: "git",
        category: "Branch",
        title: "Abort a rebase",
        command: "git rebase --abort",
        description:
            "Stops an in-progress rebase and attempts to restore the branch to its previous state.",
        example: "git rebase --abort",
        whenToUse:
            "Use it when you want to cancel a rebase that is currently in progress.",
        tags: ["rebase", "abort", "undo", "conflict"],
        relatedCommands: [
            "git-rebase",
            "git-status",
        ],
    },

    {
        id: "git-fetch-all",
        technologyId: "git",
        category: "Remote",
        title: "Fetch from all remotes",
        command: "git fetch --all",
        description:
            "Downloads updates from all configured remotes without modifying your working files.",
        example: "git fetch --all",
        whenToUse:
            "Use it when your repository has multiple remotes and you want to update all remote-tracking references.",
        tags: ["fetch", "remote", "all", "update"],
        relatedCommands: [
            "git-fetch",
            "git-remote",
        ],
    },

    {
        id: "git-push-current",
        technologyId: "git",
        category: "Remote",
        title: "Push current branch",
        command: "git push origin HEAD",
        description:
            "Pushes the currently checked-out branch to the corresponding branch on the origin remote.",
        example: "git push origin HEAD",
        whenToUse:
            "Use it when you want to push the branch you are currently working on without typing its name.",
        tags: ["push", "branch", "origin", "remote"],
        relatedCommands: [
            "git-push",
            "git-push-upstream",
        ],
    },

    {
        id: "git-remote-remove",
        technologyId: "git",
        category: "Remote",
        title: "Remove a remote",
        command: "git remote remove <name>",
        description:
            "Removes a configured remote repository from the local Git repository.",
        example: "git remote remove origin",
        whenToUse:
            "Use it when a remote repository is no longer needed or its configuration should be replaced.",
        tags: ["remote", "remove", "delete", "origin"],
        relatedCommands: [
            "git-remote",
            "git-remote-add",
        ],
    },

    {
        id: "git-reset-soft",
        technologyId: "git",
        category: "Undo",
        title: "Undo commit but keep changes staged",
        command: "git reset --soft HEAD~1",
        description:
            "Moves the current branch back one commit while keeping the undone commit's changes staged.",
        example: "git reset --soft HEAD~1",
        whenToUse:
            "Use it when you want to undo the latest commit but keep its changes ready to recommit.",
        tags: ["reset", "soft", "undo", "commit"],
        relatedCommands: [
            "git-reset",
            "git-commit",
        ],
    },

    {
        id: "git-reset-hard",
        technologyId: "git",
        category: "Undo",
        title: "Reset and discard changes",
        command: "git reset --hard HEAD~1",
        description:
            "Moves the current branch back one commit and resets tracked files to that commit.",
        example: "git reset --hard HEAD~1",
        whenToUse:
            "Use it when you intentionally want to discard the latest commit and its tracked changes.",
        tags: ["reset", "hard", "undo", "discard"],
        notes:
            "Be careful: this can permanently discard uncommitted changes and rewrite local history.",
        relatedCommands: [
            "git-reset",
            "git-revert",
        ],
    },

    {
        id: "git-stash-apply",
        technologyId: "git",
        category: "Undo",
        title: "Apply stashed changes",
        command: "git stash apply",
        description:
            "Applies the most recent stash without removing it from the stash list.",
        example: "git stash apply",
        whenToUse:
            "Use it when you want to restore stashed work while keeping the stash available.",
        tags: ["stash", "apply", "restore", "changes"],
        relatedCommands: [
            "git-stash",
            "git-stash-pop",
            "git-stash-list",
        ],
    },

    {
        id: "git-stash-drop",
        technologyId: "git",
        category: "Undo",
        title: "Delete a stash",
        command: "git stash drop",
        description:
            "Deletes the most recent stash from the stash list.",
        example: "git stash drop",
        whenToUse:
            "Use it when you no longer need a saved stash.",
        tags: ["stash", "drop", "delete", "cleanup"],
        relatedCommands: [
            "git-stash-list",
            "git-stash-pop",
        ],
    },

    {
        id: "git-tag-delete",
        technologyId: "git",
        category: "Tags",
        title: "Delete a local tag",
        command: "git tag -d <tag-name>",
        description:
            "Deletes a tag from the local repository.",
        example: "git tag -d v1.0.0",
        whenToUse:
            "Use it when you want to remove a tag from your local repository.",
        tags: ["tag", "delete", "remove", "version"],
        relatedCommands: [
            "git-tag-list",
            "git-tag-create",
        ],
    },

    {
        id: "git-tag-show",
        technologyId: "git",
        category: "Tags",
        title: "Show tag information",
        command: "git show <tag-name>",
        description:
            "Displays the commit and details associated with a specific tag.",
        example: "git show v1.0.0",
        whenToUse:
            "Use it when you want to inspect which commit a tag points to and view its details.",
        tags: ["tag", "show", "version", "release"],
        relatedCommands: [
            "git-tag-list",
            "git-show",
        ],
    },

    {
        id: "git-config-global-list",
        technologyId: "git",
        category: "Configuration",
        title: "View global Git configuration",
        command: "git config --global --list",
        description:
            "Displays Git configuration settings defined globally for your user account.",
        example: "git config --global --list",
        whenToUse:
            "Use it when you want to inspect your personal Git configuration.",
        tags: ["config", "global", "settings", "configuration"],
        relatedCommands: [
            "git-config-list",
            "git-config-name",
            "git-config-email",
        ],
    },

    {
        id: "git-config-editor",
        technologyId: "git",
        category: "Configuration",
        title: "Set Git default editor",
        command: 'git config --global core.editor "<editor-command>"',
        description:
            "Sets the default text editor Git uses when it needs you to enter or edit text.",
        example:
            'git config --global core.editor "code --wait"',
        whenToUse:
            "Use it when you want Git to open your preferred editor for commit messages and other operations.",
        tags: ["config", "editor", "settings", "setup"],
        relatedCommands: [
            "git-config-list",
            "git-config-global-list",
        ],
    },


    /*FLUTTER COMMANDS */

    {
        id: "flutter-create",
        technologyId: "flutter",
        category: "Project",
        title: "Create a Flutter project",
        command: "flutter create <project-name>",
        description:
            "Creates a new Flutter project with the standard Flutter project structure.",
        example: "flutter create my_app",
        whenToUse:
            "Use it when starting a new Flutter application.",
        tags: ["create", "project", "new", "setup"],
        relatedCommands: [
            "flutter-run",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-create-platform",
        technologyId: "flutter",
        category: "Project",
        title: "Create a project with specific platforms",
        command: "flutter create --platforms=<platforms> <project-name>",
        description:
            "Creates a Flutter project configured for the specified platforms.",
        example:
            "flutter create --platforms=android,ios my_app",
        whenToUse:
            "Use it when you want to create a project with only selected platform targets.",
        tags: ["create", "platform", "android", "ios", "project"],
        relatedCommands: [
            "flutter-create",
            "flutter-run",
        ],
    },

    {
        id: "flutter-version",
        technologyId: "flutter",
        category: "Information",
        title: "Show Flutter version",
        command: "flutter --version",
        description:
            "Displays the installed Flutter SDK version and related environment information.",
        example: "flutter --version",
        whenToUse:
            "Use it when you need to check which Flutter version is installed.",
        tags: ["version", "flutter", "sdk", "information"],
        relatedCommands: [
            "flutter-doctor",
        ],
    },

    {
        id: "flutter-doctor",
        technologyId: "flutter",
        category: "Diagnostics",
        title: "Check Flutter environment",
        command: "flutter doctor",
        description:
            "Checks your Flutter development environment and reports configuration problems.",
        example: "flutter doctor",
        whenToUse:
            "Use it when setting up Flutter or troubleshooting development environment issues.",
        tags: ["doctor", "diagnostics", "setup", "environment", "fix"],
        tips: [
            "Look for entries marked with an error or warning.",
            "Run flutter doctor -v for more detailed information.",
        ],
        relatedCommands: [
            "flutter-doctor-verbose",
            "flutter-devices",
        ],
    },

    {
        id: "flutter-doctor-verbose",
        technologyId: "flutter",
        category: "Diagnostics",
        title: "Check Flutter environment in detail",
        command: "flutter doctor -v",
        description:
            "Displays detailed diagnostic information about the Flutter development environment.",
        example: "flutter doctor -v",
        whenToUse:
            "Use it when you need detailed information to diagnose Flutter setup problems.",
        tags: ["doctor", "verbose", "diagnostics", "debug", "environment"],
        relatedCommands: [
            "flutter-doctor",
            "flutter-devices",
        ],
    },

    {
        id: "flutter-devices",
        technologyId: "flutter",
        category: "Development",
        title: "List available devices",
        command: "flutter devices",
        description:
            "Lists the physical devices and emulators available to Flutter.",
        example: "flutter devices",
        whenToUse:
            "Use it when you want to check which devices Flutter can run your application on.",
        tags: ["devices", "android", "ios", "emulator", "phone"],
        relatedCommands: [
            "flutter-run",
            "flutter-emulators",
        ],
    },

    {
        id: "flutter-emulators",
        technologyId: "flutter",
        category: "Development",
        title: "List available emulators",
        command: "flutter emulators",
        description:
            "Lists the Android and other configured emulators that Flutter can interact with.",
        example: "flutter emulators",
        whenToUse:
            "Use it when you want to see which emulators are configured on your computer.",
        tags: ["emulator", "android", "devices", "list"],
        relatedCommands: [
            "flutter-emulator-launch",
            "flutter-devices",
        ],
    },

    {
        id: "flutter-emulator-launch",
        technologyId: "flutter",
        category: "Development",
        title: "Launch an emulator",
        command: "flutter emulators --launch <emulator-id>",
        description:
            "Launches a configured emulator using its Flutter emulator ID.",
        example: "flutter emulators --launch Pixel_7",
        whenToUse:
            "Use it when you want to start an available emulator from the terminal.",
        tags: ["emulator", "launch", "android", "start"],
        relatedCommands: [
            "flutter-emulators",
            "flutter-devices",
            "flutter-run",
        ],
    },

    {
        id: "flutter-run-device",
        technologyId: "flutter",
        category: "Run",
        title: "Run on a specific device",
        command: "flutter run -d <device-id>",
        description:
            "Runs the Flutter application on a specific connected device or emulator.",
        example: "flutter run -d emulator-5554",
        whenToUse:
            "Use it when multiple devices are connected and you want to choose one.",
        tags: ["run", "device", "android", "emulator", "launch"],
        relatedCommands: [
            "flutter-devices",
            "flutter-run",
        ],
    },

    {
        id: "flutter-run-release",
        technologyId: "flutter",
        category: "Run",
        title: "Run in release mode",
        command: "flutter run --release",
        description:
            "Builds and runs the Flutter application using release-mode settings.",
        example: "flutter run --release",
        whenToUse:
            "Use it when you want to test the application with release-mode behavior.",
        tags: ["run", "release", "production", "performance"],
        relatedCommands: [
            "flutter-run",
            "flutter-build-apk",
        ],
    },

    {
        id: "flutter-run-profile",
        technologyId: "flutter",
        category: "Run",
        title: "Run in profile mode",
        command: "flutter run --profile",
        description:
            "Runs the Flutter application in profile mode for performance analysis.",
        example: "flutter run --profile",
        whenToUse:
            "Use it when you want to measure application performance on a physical device.",
        tags: ["run", "profile", "performance", "debugging"],
        relatedCommands: [
            "flutter-run",
            "flutter-build-apk",
        ],
    },

    {
        id: "flutter-run-flavor",
        technologyId: "flutter",
        category: "Run",
        title: "Run a specific flavor",
        command: "flutter run --flavor <flavor>",
        description:
            "Runs the Flutter application using a configured build flavor.",
        example: "flutter run --flavor development",
        whenToUse:
            "Use it when your project has multiple environments such as development, staging, and production.",
        tags: ["run", "flavor", "development", "staging", "production"],
        relatedCommands: [
            "flutter-run",
            "flutter-build-apk",
        ],
    },

    {
        id: "flutter-analyze",
        technologyId: "flutter",
        category: "Analysis",
        title: "Analyze Flutter project",
        command: "flutter analyze",
        description:
            "Analyzes Dart source code and reports errors, warnings, and lint issues.",
        example: "flutter analyze",
        whenToUse:
            "Use it when you want to find code problems without running the application.",
        tags: ["analyze", "lint", "errors", "warnings", "dart"],
        relatedCommands: [
            "flutter-test",
            "flutter-format",
        ],
    },

    {
        id: "flutter-analyze-no-fatal-infos",
        technologyId: "flutter",
        category: "Analysis",
        title: "Analyze without failing on infos",
        command: "flutter analyze --no-fatal-infos",
        description:
            "Runs static analysis while preventing informational diagnostics from causing a failure.",
        example: "flutter analyze --no-fatal-infos",
        whenToUse:
            "Use it when running analysis in workflows where informational messages should not fail the command.",
        tags: ["analyze", "lint", "infos", "ci"],
        relatedCommands: [
            "flutter-analyze",
        ],
    },

    {
        id: "flutter-format",
        technologyId: "flutter",
        category: "Code Quality",
        title: "Format Dart code",
        command: "dart format .",
        description:
            "Formats Dart source files according to Dart's standard formatting rules.",
        example: "dart format .",
        whenToUse:
            "Use it when you want to automatically format your Dart project.",
        tags: ["format", "dart", "style", "code-quality"],
        relatedCommands: [
            "flutter-analyze",
        ],
    },

    {
        id: "flutter-format-check",
        technologyId: "flutter",
        category: "Code Quality",
        title: "Check Dart formatting",
        command: "dart format --output=none --set-exit-if-changed .",
        description:
            "Checks whether Dart files are properly formatted without changing them.",
        example:
            "dart format --output=none --set-exit-if-changed .",
        whenToUse:
            "Use it in CI or before committing when you want formatting problems to be detected automatically.",
        tags: ["format", "check", "dart", "ci", "lint"],
        relatedCommands: [
            "flutter-format",
            "flutter-analyze",
        ],
    },

    {
        id: "flutter-test",
        technologyId: "flutter",
        category: "Testing",
        title: "Run Flutter tests",
        command: "flutter test",
        description:
            "Runs the automated tests in your Flutter project.",
        example: "flutter test",
        whenToUse:
            "Use it when you want to verify that your application's tests are passing.",
        tags: ["test", "testing", "unit", "widget", "flutter"],
        relatedCommands: [
            "flutter-test-file",
            "flutter-analyze",
        ],
    },

    {
        id: "flutter-test-file",
        technologyId: "flutter",
        category: "Testing",
        title: "Run a specific test file",
        command: "flutter test <test-file>",
        description:
            "Runs tests from a specific Dart test file.",
        example: "flutter test test/widget_test.dart",
        whenToUse:
            "Use it when you only want to run tests related to a particular feature or file.",
        tags: ["test", "testing", "file", "widget", "unit"],
        relatedCommands: [
            "flutter-test",
        ],
    },

    {
        id: "flutter-test-coverage",
        technologyId: "flutter",
        category: "Testing",
        title: "Generate test coverage",
        command: "flutter test --coverage",
        description:
            "Runs Flutter tests and generates a coverage report for the tested Dart code.",
        example: "flutter test --coverage",
        whenToUse:
            "Use it when you want to measure how much of your code is covered by tests.",
        tags: ["test", "coverage", "testing", "quality"],
        relatedCommands: [
            "flutter-test",
        ],
    },

    {
        id: "flutter-pub-add-dev",
        technologyId: "flutter",
        category: "Packages",
        title: "Add a development dependency",
        command: "flutter pub add --dev <package>",
        description:
            "Adds a package as a development dependency and updates pubspec.yaml.",
        example: "flutter pub add --dev flutter_lints",
        whenToUse:
            "Use it when adding tools or packages that are only required during development or testing.",
        tags: ["package", "dev", "dependency", "install", "pubspec"],
        relatedCommands: [
            "flutter-pub-add",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-pub-remove",
        technologyId: "flutter",
        category: "Packages",
        title: "Remove a package",
        command: "flutter pub remove <package>",
        description:
            "Removes a package from your Flutter project's dependencies.",
        example: "flutter pub remove dio",
        whenToUse:
            "Use it when a package is no longer needed in your project.",
        tags: ["package", "remove", "dependency", "uninstall"],
        relatedCommands: [
            "flutter-pub-add",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-pub-outdated",
        technologyId: "flutter",
        category: "Packages",
        title: "Check outdated packages",
        command: "flutter pub outdated",
        description:
            "Shows which project dependencies have newer versions available.",
        example: "flutter pub outdated",
        whenToUse:
            "Use it when you want to check whether your dependencies can be updated.",
        tags: ["package", "outdated", "update", "dependency"],
        relatedCommands: [
            "flutter-pub-upgrade",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-pub-upgrade",
        technologyId: "flutter",
        category: "Packages",
        title: "Upgrade dependencies",
        command: "flutter pub upgrade",
        description:
            "Updates project dependencies to the newest versions allowed by the dependency constraints.",
        example: "flutter pub upgrade",
        whenToUse:
            "Use it when you want to update your project's packages within their allowed version ranges.",
        tags: ["package", "upgrade", "update", "dependency"],
        notes:
            "Check your dependency constraints and test the application after upgrading packages.",
        relatedCommands: [
            "flutter-pub-outdated",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-pub-remove-dev",
        technologyId: "flutter",
        category: "Packages",
        title: "Remove a development dependency",
        command: "flutter pub remove <package>",
        description:
            "Removes a development dependency from the Flutter project.",
        example: "flutter pub remove flutter_lints",
        whenToUse:
            "Use it when a development-only package is no longer required.",
        tags: ["package", "remove", "dev", "dependency"],
        relatedCommands: [
            "flutter-pub-add-dev",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-build-apk-debug",
        technologyId: "flutter",
        category: "Build",
        title: "Build debug APK",
        command: "flutter build apk --debug",
        description:
            "Builds a debug Android APK from the Flutter project.",
        example: "flutter build apk --debug",
        whenToUse:
            "Use it when you need a debug APK for testing.",
        tags: ["apk", "android", "build", "debug"],
        relatedCommands: [
            "flutter-build-apk",
            "flutter-run",
        ],
    },

    {
        id: "flutter-build-apk-release",
        technologyId: "flutter",
        category: "Build",
        title: "Build release APK",
        command: "flutter build apk --release",
        description:
            "Builds a release-mode Android APK optimized for distribution.",
        example: "flutter build apk --release",
        whenToUse:
            "Use it when preparing an APK for testing or distribution outside the Play Store.",
        tags: ["apk", "android", "build", "release"],
        relatedCommands: [
            "flutter-build-apk",
            "flutter-build-appbundle",
        ],
    },

    {
        id: "flutter-build-appbundle",
        technologyId: "flutter",
        category: "Build",
        title: "Build Android App Bundle",
        command: "flutter build appbundle",
        description:
            "Builds an Android App Bundle for publishing a Flutter application to Google Play.",
        example: "flutter build appbundle --release",
        whenToUse:
            "Use it when preparing an Android application for Google Play distribution.",
        tags: ["appbundle", "aab", "android", "play-store", "release"],
        relatedCommands: [
            "flutter-build-apk",
            "flutter-build-appbundle-release",
        ],
    },

    {
        id: "flutter-build-appbundle-release",
        technologyId: "flutter",
        category: "Build",
        title: "Build release App Bundle",
        command: "flutter build appbundle --release",
        description:
            "Builds a release-mode Android App Bundle for distribution through Google Play.",
        example: "flutter build appbundle --release",
        whenToUse:
            "Use it when creating the production Android App Bundle for a release.",
        tags: ["aab", "appbundle", "android", "release", "play-store"],
        relatedCommands: [
            "flutter-build-appbundle",
            "flutter-build-apk-release",
        ],
    },

    {
        id: "flutter-build-web",
        technologyId: "flutter",
        category: "Build",
        title: "Build Flutter web app",
        command: "flutter build web",
        description:
            "Builds the Flutter application for deployment on the web.",
        example: "flutter build web",
        whenToUse:
            "Use it when you want to create a production web build of your Flutter application.",
        tags: ["web", "build", "browser", "deployment"],
        relatedCommands: [
            "flutter-build-web-release",
            "flutter-run",
        ],
    },

    {
        id: "flutter-build-web-release",
        technologyId: "flutter",
        category: "Build",
        title: "Build Flutter web release",
        command: "flutter build web --release",
        description:
            "Builds an optimized release version of the Flutter web application.",
        example: "flutter build web --release",
        whenToUse:
            "Use it when preparing a Flutter web application for production deployment.",
        tags: ["web", "build", "release", "production"],
        relatedCommands: [
            "flutter-build-web",
        ],
    },

    {
        id: "flutter-build-ios",
        technologyId: "flutter",
        category: "Build",
        title: "Build iOS application",
        command: "flutter build ios",
        description:
            "Builds the Flutter application for iOS devices.",
        example: "flutter build ios --release",
        whenToUse:
            "Use it when preparing a Flutter application for iOS builds.",
        tags: ["ios", "build", "iphone", "release"],
        relatedCommands: [
            "flutter-run",
        ],
    },

    {
        id: "flutter-build-windows",
        technologyId: "flutter",
        category: "Build",
        title: "Build Windows application",
        command: "flutter build windows",
        description:
            "Builds the Flutter application for Windows desktop.",
        example: "flutter build windows",
        whenToUse:
            "Use it when creating a Windows desktop build of your Flutter application.",
        tags: ["windows", "desktop", "build", "application"],
        relatedCommands: [
            "flutter-run",
            "flutter-build-linux",
        ],
    },

    {
        id: "flutter-build-linux",
        technologyId: "flutter",
        category: "Build",
        title: "Build Linux application",
        command: "flutter build linux",
        description:
            "Builds the Flutter application for Linux desktop.",
        example: "flutter build linux",
        whenToUse:
            "Use it when creating a Linux desktop build of your Flutter application.",
        tags: ["linux", "desktop", "build", "application"],
        relatedCommands: [
            "flutter-build-windows",
            "flutter-run",
        ],
    },

    {
        id: "flutter-build-macos",
        technologyId: "flutter",
        category: "Build",
        title: "Build macOS application",
        command: "flutter build macos",
        description:
            "Builds the Flutter application for macOS desktop.",
        example: "flutter build macos",
        whenToUse:
            "Use it when creating a macOS desktop build of your Flutter application.",
        tags: ["macos", "desktop", "build", "application"],
        relatedCommands: [
            "flutter-build-ios",
            "flutter-run",
        ],
    },

    {
        id: "flutter-upgrade",
        technologyId: "flutter",
        category: "SDK",
        title: "Upgrade Flutter SDK",
        command: "flutter upgrade",
        description:
            "Updates the installed Flutter SDK to the latest available version on its current channel.",
        example: "flutter upgrade",
        whenToUse:
            "Use it when you want to update your Flutter SDK.",
        tags: ["upgrade", "flutter", "sdk", "update"],
        notes:
            "Check your project dependencies and test your applications after upgrading Flutter.",
        relatedCommands: [
            "flutter-version",
            "flutter-doctor",
        ],
    },

    {
        id: "flutter-channel",
        technologyId: "flutter",
        category: "SDK",
        title: "Show Flutter channels",
        command: "flutter channel",
        description:
            "Displays the available Flutter release channels and shows the current channel.",
        example: "flutter channel",
        whenToUse:
            "Use it when you want to see which Flutter release channel is currently selected.",
        tags: ["channel", "stable", "beta", "dev", "sdk"],
        relatedCommands: [
            "flutter-channel-stable",
            "flutter-upgrade",
        ],
    },

    {
        id: "flutter-channel-stable",
        technologyId: "flutter",
        category: "SDK",
        title: "Switch to stable channel",
        command: "flutter channel stable",
        description:
            "Switches the Flutter SDK to the stable release channel.",
        example: "flutter channel stable",
        whenToUse:
            "Use it when you want to use Flutter's stable release channel.",
        tags: ["channel", "stable", "sdk", "release"],
        relatedCommands: [
            "flutter-channel",
            "flutter-upgrade",
        ],
    },

    {
        id: "flutter-config",
        technologyId: "flutter",
        category: "Configuration",
        title: "View Flutter configuration",
        command: "flutter config",
        description:
            "Displays or modifies Flutter tool configuration settings.",
        example: "flutter config",
        whenToUse:
            "Use it when you need to inspect or configure Flutter tool settings.",
        tags: ["config", "configuration", "settings", "flutter"],
        relatedCommands: [
            "flutter-config-enable-web",
            "flutter-doctor",
        ],
    },

    {
        id: "flutter-config-enable-web",
        technologyId: "flutter",
        category: "Configuration",
        title: "Enable web support",
        command: "flutter config --enable-web",
        description:
            "Enables Flutter web support in the Flutter development environment.",
        example: "flutter config --enable-web",
        whenToUse:
            "Use it when you want to develop Flutter applications for web.",
        tags: ["config", "web", "enable", "browser"],
        relatedCommands: [
            "flutter-config",
            "flutter-build-web",
        ],
    },

    {
        id: "flutter-pub-cache-repair",
        technologyId: "flutter",
        category: "Troubleshooting",
        title: "Repair the Pub cache",
        command: "flutter pub cache repair",
        description:
            "Reinstalls packages in the local Pub system cache to help repair corrupted cached dependencies.",
        example: "flutter pub cache repair",
        whenToUse:
            "Use it when package cache problems are causing dependency or build issues.",
        tags: ["cache", "repair", "package", "dependency", "fix"],
        relatedCommands: [
            "flutter-pub-get",
            "flutter-clean",
        ],
    },

    {
        id: "flutter-pub-cache-clean",
        technologyId: "flutter",
        category: "Troubleshooting",
        title: "Clear the Pub cache",
        command: "flutter pub cache clean",
        description:
            "Removes cached Pub packages from the local package cache.",
        example: "flutter pub cache clean",
        whenToUse:
            "Use it when you need to clear cached packages before reinstalling dependencies.",
        tags: ["cache", "clean", "package", "dependency"],
        relatedCommands: [
            "flutter-pub-cache-repair",
            "flutter-pub-get",
        ],
    },

    {
        id: "flutter-symbolize",
        technologyId: "flutter",
        category: "Debugging",
        title: "Symbolize a Flutter stack trace",
        command: "flutter symbolize",
        description:
            "Converts obfuscated Flutter stack traces back into readable symbols using an appropriate symbol file.",
        example:
            "flutter symbolize -i stack_trace.txt -d app.android-arm64.symbols",
        whenToUse:
            "Use it when analyzing crash reports from an obfuscated release build.",
        tags: ["symbolize", "debugging", "crash", "stack-trace", "release"],
        relatedCommands: [
            "flutter-build-apk-release",
            "flutter-analyze",
        ],
    },

    {
        id: "flutter-install",
        technologyId: "flutter",
        category: "Run",
        title: "Install an APK on a device",
        command: "flutter install",
        description:
            "Installs the Flutter application on a connected Android device.",
        example: "flutter install",
        whenToUse:
            "Use it when you want to install the built application onto a connected device.",
        tags: ["install", "apk", "android", "device"],
        relatedCommands: [
            "flutter-build-apk",
            "flutter-devices",
        ],
    },

    {
        id: "flutter-screenshot",
        technologyId: "flutter",
        category: "Debugging",
        title: "Capture a Flutter screenshot",
        command: "flutter screenshot",
        description:
            "Captures a screenshot from a running Flutter application.",
        example: "flutter screenshot",
        whenToUse:
            "Use it when you need to capture the current screen of a running Flutter application.",
        tags: ["screenshot", "debugging", "screen", "capture"],
        relatedCommands: [
            "flutter-run",
            "flutter-devices",
        ],
    },

    {
        id: "flutter-attach",
        technologyId: "flutter",
        category: "Debugging",
        title: "Attach to a running Flutter app",
        command: "flutter attach",
        description:
            "Connects Flutter tooling to an already running Flutter application.",
        example: "flutter attach",
        whenToUse:
            "Use it when you need to connect debugging and development tools to an existing Flutter process.",
        tags: ["attach", "debug", "debugging", "running"],
        relatedCommands: [
            "flutter-run",
            "flutter-devices",
        ],
    },

    {
        id: "flutter-drive",
        technologyId: "flutter",
        category: "Testing",
        title: "Run integration tests",
        command: "flutter drive",
        description:
            "Runs Flutter integration tests using the Flutter Driver tooling.",
        example: "flutter drive --target=test_driver/app.dart",
        whenToUse:
            "Use it when working with projects that use Flutter Driver-based integration testing.",
        tags: ["drive", "integration", "test", "testing"],
        relatedCommands: [
            "flutter-test",
        ],
    },

    {
        id: "flutter-gen-l10n",
        technologyId: "flutter",
        category: "Localization",
        title: "Generate localization files",
        command: "flutter gen-l10n",
        description:
            "Generates localization source files from the project's localization configuration and ARB files.",
        example: "flutter gen-l10n",
        whenToUse:
            "Use it when your Flutter project uses generated localization resources.",
        tags: ["localization", "l10n", "i18n", "generate", "arb"],
        relatedCommands: [
            "flutter-analyze",
            "flutter-run",
        ],
    },

    {
        id: "flutter-precache",
        technologyId: "flutter",
        category: "SDK",
        title: "Download Flutter artifacts",
        command: "flutter precache",
        description:
            "Downloads Flutter engine artifacts and other cached components for supported platforms.",
        example: "flutter precache",
        whenToUse:
            "Use it when required Flutter platform artifacts are missing or need to be downloaded in advance.",
        tags: ["precache", "cache", "sdk", "artifacts"],
        relatedCommands: [
            "flutter-doctor",
            "flutter-config",
        ],
    },

    /*REACT NATIVE COMMANDS STARTS HERE*/

    {
        id: "rn-install-expo-package",
        technologyId: "react-native",
        category: "Packages",
        title: "Install an Expo-compatible package",
        command: "npx expo install <package>",
        description:
            "Installs a package using the version recommended for your Expo project.",
        example: "npx expo install expo-camera",
        whenToUse:
            "Use it when installing packages that need to match your Expo SDK version.",
        tags: [
            "package",
            "install",
            "expo",
            "dependency",
            "sdk",
        ],
        relatedCommands: [
            "rn-install-package",
            "rn-start",
        ],
    },

    {
        id: "rn-doctor",
        technologyId: "react-native",
        category: "Debugging",
        title: "Check project health",
        command: "npx expo-doctor",
        description:
            "Checks an Expo project for common configuration, dependency, and compatibility problems.",
        example: "npx expo-doctor",
        whenToUse:
            "Use it when your Expo project behaves unexpectedly or after changing dependencies.",
        tags: [
            "doctor",
            "debug",
            "check",
            "expo",
            "dependencies",
        ],
        relatedCommands: [
            "rn-start",
            "rn-install-package",
        ],
    },

    {
        id: "rn-upgrade",
        technologyId: "react-native",
        category: "Maintenance",
        title: "Upgrade Expo dependencies",
        command: "npx expo install --fix",
        description:
            "Updates Expo package versions to versions compatible with the installed Expo SDK.",
        example: "npx expo install --fix",
        whenToUse:
            "Use it when Expo reports that project dependencies are incompatible with your SDK version.",
        tags: [
            "upgrade",
            "update",
            "expo",
            "dependencies",
            "fix",
        ],
        relatedCommands: [
            "rn-doctor",
            "rn-install-expo-package",
        ],
    },

    {
        id: "rn-start-clear",
        technologyId: "react-native",
        category: "Debugging",
        title: "Start Expo with cleared cache",
        command: "npx expo start -c",
        description:
            "Starts the Expo development server while clearing the Metro bundler cache.",
        example: "npx expo start -c",
        whenToUse:
            "Use it when stale cached files are causing unexpected development problems.",
        tags: [
            "cache",
            "clear",
            "metro",
            "debug",
            "expo",
        ],
        relatedCommands: [
            "rn-start",
            "rn-doctor",
        ],
    },

    {
        id: "rn-start-android",
        technologyId: "react-native",
        category: "Run",
        title: "Run Expo on Android",
        command: "npx expo start --android",
        description:
            "Starts the Expo development server and attempts to open the project on an Android device or emulator.",
        example: "npx expo start --android",
        whenToUse:
            "Use it when you want to launch your Expo project directly on Android.",
        tags: [
            "android",
            "run",
            "expo",
            "emulator",
            "device",
        ],
        relatedCommands: [
            "rn-start",
            "rn-start-ios",
        ],
    },

    {
        id: "rn-start-ios",
        technologyId: "react-native",
        category: "Run",
        title: "Run Expo on iOS",
        command: "npx expo start --ios",
        description:
            "Starts the Expo development server and attempts to open the project on an iOS simulator.",
        example: "npx expo start --ios",
        whenToUse:
            "Use it when developing an Expo project with an available iOS simulator.",
        tags: [
            "ios",
            "run",
            "expo",
            "simulator",
            "device",
        ],
        relatedCommands: [
            "rn-start",
            "rn-start-android",
        ],
    },

    {
        id: "rn-start-web",
        technologyId: "react-native",
        category: "Run",
        title: "Run Expo on web",
        command: "npx expo start --web",
        description:
            "Starts the Expo development server and opens the project for web development.",
        example: "npx expo start --web",
        whenToUse:
            "Use it when you want to test an Expo application in a web browser.",
        tags: [
            "web",
            "browser",
            "run",
            "expo",
            "development",
        ],
        relatedCommands: [
            "rn-start",
        ],
    },

    {
        id: "rn-prebuild",
        technologyId: "react-native",
        category: "Native",
        title: "Generate native projects",
        command: "npx expo prebuild",
        description:
            "Generates the native Android and iOS project directories from an Expo project.",
        example: "npx expo prebuild",
        whenToUse:
            "Use it when you need native project files for custom native configuration or development.",
        tags: [
            "prebuild",
            "native",
            "android",
            "ios",
            "expo",
        ],
        notes:
            "Prebuild is mainly useful when working with native configuration or development builds.",
        relatedCommands: [
            "rn-run-android",
            "rn-run-ios",
        ],
    },

    {
        id: "rn-prebuild-clean",
        technologyId: "react-native",
        category: "Native",
        title: "Regenerate native projects",
        command: "npx expo prebuild --clean",
        description:
            "Deletes generated native project directories and regenerates them from the Expo configuration.",
        example: "npx expo prebuild --clean",
        whenToUse:
            "Use it when generated native project files need to be recreated from the current Expo configuration.",
        tags: [
            "prebuild",
            "clean",
            "native",
            "regenerate",
            "expo",
        ],
        notes:
            "Be careful with manual native changes because this can replace generated native files.",
        relatedCommands: [
            "rn-prebuild",
            "rn-doctor",
        ],
    },

    {
        id: "rn-run-android",
        technologyId: "react-native",
        category: "Native",
        title: "Run the Android native project",
        command: "npx expo run:android",
        description:
            "Builds and runs the Expo project as a native Android application.",
        example: "npx expo run:android",
        whenToUse:
            "Use it when you need to test native Android functionality in a development build.",
        tags: [
            "android",
            "native",
            "run",
            "build",
            "expo",
        ],
        relatedCommands: [
            "rn-prebuild",
            "rn-run-ios",
        ],
    },

    {
        id: "rn-run-ios",
        technologyId: "react-native",
        category: "Native",
        title: "Run the iOS native project",
        command: "npx expo run:ios",
        description:
            "Builds and runs the Expo project as a native iOS application.",
        example: "npx expo run:ios",
        whenToUse:
            "Use it when you need to test native iOS functionality in a development build.",
        tags: [
            "ios",
            "native",
            "run",
            "build",
            "expo",
        ],
        relatedCommands: [
            "rn-prebuild",
            "rn-run-android",
        ],
    },

    {
        id: "rn-export",
        technologyId: "react-native",
        category: "Build",
        title: "Export Expo project",
        command: "npx expo export",
        description:
            "Creates a production-ready JavaScript bundle and assets for the configured platforms.",
        example: "npx expo export",
        whenToUse:
            "Use it when you need to generate the application bundle and assets without creating a native binary.",
        tags: [
            "export",
            "build",
            "bundle",
            "production",
            "expo",
        ],
        relatedCommands: [
            "rn-start",
            "rn-build",
        ],
    },

    {
        id: "rn-build",
        technologyId: "react-native",
        category: "Build",
        title: "Create an Expo application build",
        command: "eas build",
        description:
            "Builds an Expo application using Expo Application Services.",
        example: "eas build",
        whenToUse:
            "Use it when you need an installable Android or iOS application build.",
        tags: [
            "build",
            "eas",
            "android",
            "ios",
            "release",
        ],
        notes:
            "EAS CLI and an Expo project configured for EAS are required.",
        relatedCommands: [
            "rn-build-android",
            "rn-build-ios",
        ],
    },

    {
        id: "rn-build-android",
        technologyId: "react-native",
        category: "Build",
        title: "Build Android application",
        command: "eas build --platform android",
        description:
            "Creates an Android application build using Expo Application Services.",
        example: "eas build --platform android",
        whenToUse:
            "Use it when you need an Android build of your Expo application.",
        tags: [
            "build",
            "android",
            "eas",
            "apk",
            "aab",
        ],
        relatedCommands: [
            "rn-build",
            "rn-build-ios",
        ],
    },

    {
        id: "rn-build-ios",
        technologyId: "react-native",
        category: "Build",
        title: "Build iOS application",
        command: "eas build --platform ios",
        description:
            "Creates an iOS application build using Expo Application Services.",
        example: "eas build --platform ios",
        whenToUse:
            "Use it when you need an iOS build of your Expo application.",
        tags: [
            "build",
            "ios",
            "eas",
            "application",
            "release",
        ],
        relatedCommands: [
            "rn-build",
            "rn-build-android",
        ],
    },

    {
        id: "rn-build-all",
        technologyId: "react-native",
        category: "Build",
        title: "Build for Android and iOS",
        command: "eas build --platform all",
        description:
            "Creates application builds for both Android and iOS using Expo Application Services.",
        example: "eas build --platform all",
        whenToUse:
            "Use it when you want to start builds for both supported mobile platforms.",
        tags: [
            "build",
            "android",
            "ios",
            "eas",
            "release",
        ],
        relatedCommands: [
            "rn-build",
            "rn-build-android",
            "rn-build-ios",
        ],
    },

    {
        id: "rn-update",
        technologyId: "react-native",
        category: "Deployment",
        title: "Publish an over-the-air update",
        command: "eas update",
        description:
            "Publishes JavaScript and asset updates to an Expo application using EAS Update.",
        example: "eas update --branch production",
        whenToUse:
            "Use it when you need to deliver compatible JavaScript or asset changes without creating a new native build.",
        tags: [
            "update",
            "eas",
            "deployment",
            "ota",
            "production",
        ],
        notes:
            "Over-the-air updates cannot replace changes that require a new native binary.",
        relatedCommands: [
            "rn-build",
            "rn-export",
        ],
    },

    {
        id: "rn-update-config",
        technologyId: "react-native",
        category: "Deployment",
        title: "Configure EAS Update",
        command: "eas update:configure",
        description:
            "Configures an Expo project to use EAS Update.",
        example: "eas update:configure",
        whenToUse:
            "Use it when setting up EAS Update for an Expo project.",
        tags: [
            "update",
            "configure",
            "eas",
            "deployment",
            "expo",
        ],
        relatedCommands: [
            "rn-update",
            "rn-build",
        ],
    },

    {
        id: "rn-submit",
        technologyId: "react-native",
        category: "Deployment",
        title: "Submit an application",
        command: "eas submit",
        description:
            "Submits an application build to a configured app store using Expo Application Services.",
        example: "eas submit",
        whenToUse:
            "Use it when you are ready to submit an Android or iOS build to its respective store.",
        tags: [
            "submit",
            "deployment",
            "eas",
            "store",
            "release",
        ],
        relatedCommands: [
            "rn-build",
            "rn-submit-android",
            "rn-submit-ios",
        ],
    },

    {
        id: "rn-submit-android",
        technologyId: "react-native",
        category: "Deployment",
        title: "Submit Android build",
        command: "eas submit --platform android",
        description:
            "Submits an Android build to Google Play using Expo Application Services.",
        example: "eas submit --platform android",
        whenToUse:
            "Use it when you want to submit an Android build to Google Play.",
        tags: [
            "submit",
            "android",
            "google-play",
            "eas",
            "release",
        ],
        relatedCommands: [
            "rn-build-android",
            "rn-submit",
        ],
    },

    {
        id: "rn-submit-ios",
        technologyId: "react-native",
        category: "Deployment",
        title: "Submit iOS build",
        command: "eas submit --platform ios",
        description:
            "Submits an iOS build to App Store Connect using Expo Application Services.",
        example: "eas submit --platform ios",
        whenToUse:
            "Use it when you want to submit an iOS build for App Store distribution.",
        tags: [
            "submit",
            "ios",
            "app-store",
            "eas",
            "release",
        ],
        relatedCommands: [
            "rn-build-ios",
            "rn-submit",
        ],
    },

    {
        id: "rn-login",
        technologyId: "react-native",
        category: "EAS",
        title: "Log in to Expo",
        command: "eas login",
        description:
            "Logs the Expo CLI into an Expo account for using EAS services.",
        example: "eas login",
        whenToUse:
            "Use it before performing EAS operations that require an authenticated Expo account.",
        tags: [
            "login",
            "expo",
            "eas",
            "account",
            "authentication",
        ],
        relatedCommands: [
            "rn-build",
            "rn-submit",
        ],
    },

    {
        id: "rn-whoami",
        technologyId: "react-native",
        category: "EAS",
        title: "Check Expo account",
        command: "eas whoami",
        description:
            "Shows the Expo account currently authenticated with EAS CLI.",
        example: "eas whoami",
        whenToUse:
            "Use it when you want to confirm which Expo account is currently logged in.",
        tags: [
            "account",
            "login",
            "expo",
            "eas",
            "user",
        ],
        relatedCommands: [
            "rn-login",
            "rn-build",
        ],
    },

    {
        id: "rn-init-eas",
        technologyId: "react-native",
        category: "EAS",
        title: "Configure EAS for a project",
        command: "eas init",
        description:
            "Initializes an Expo project for use with Expo Application Services.",
        example: "eas init",
        whenToUse:
            "Use it when connecting an Expo project with EAS services for the first time.",
        tags: [
            "init",
            "eas",
            "configure",
            "expo",
            "setup",
        ],
        relatedCommands: [
            "rn-login",
            "rn-build",
        ],
    },

    {
        id: "rn-eas-update-config",
        technologyId: "react-native",
        category: "EAS",
        title: "View EAS project information",
        command: "eas project:info",
        description:
            "Displays information about the EAS project associated with the current application.",
        example: "eas project:info",
        whenToUse:
            "Use it when you want to inspect the EAS project configuration and identifiers.",
        tags: [
            "eas",
            "project",
            "info",
            "configuration",
        ],
        relatedCommands: [
            "rn-init-eas",
            "rn-build",
        ],
    },

    {
        id: "rn-npm-install",
        technologyId: "react-native",
        category: "Packages",
        title: "Install project dependencies",
        command: "npm install",
        description:
            "Installs the dependencies listed in package.json.",
        example: "npm install",
        whenToUse:
            "Use it after cloning a React Native or Expo project or when dependencies need to be installed.",
        tags: [
            "npm",
            "install",
            "dependencies",
            "packages",
        ],
        relatedCommands: [
            "rn-install-package",
            "rn-start",
        ],
    },

    {
        id: "rn-npm-uninstall",
        technologyId: "react-native",
        category: "Packages",
        title: "Remove a package",
        command: "npm uninstall <package>",
        description:
            "Removes a package from the project and updates package.json.",
        example: "npm uninstall axios",
        whenToUse:
            "Use it when a package is no longer needed in your project.",
        tags: [
            "npm",
            "uninstall",
            "remove",
            "package",
            "dependency",
        ],
        relatedCommands: [
            "rn-install-package",
            "rn-npm-install",
        ],
    },

    {
        id: "rn-npm-update",
        technologyId: "react-native",
        category: "Packages",
        title: "Update npm packages",
        command: "npm update",
        description:
            "Updates installed packages according to the version ranges specified in package.json.",
        example: "npm update",
        whenToUse:
            "Use it when you want to update dependencies within their configured version ranges.",
        tags: [
            "npm",
            "update",
            "packages",
            "dependencies",
        ],
        relatedCommands: [
            "rn-npm-install",
            "rn-install-package",
        ],
    },

    {
        id: "rn-npm-outdated",
        technologyId: "react-native",
        category: "Packages",
        title: "Check outdated packages",
        command: "npm outdated",
        description:
            "Shows which installed packages have newer available versions.",
        example: "npm outdated",
        whenToUse:
            "Use it when you want to check whether project dependencies have newer versions available.",
        tags: [
            "npm",
            "outdated",
            "packages",
            "dependencies",
            "update",
        ],
        relatedCommands: [
            "rn-npm-update",
            "rn-npm-install",
        ],
    },

    {
        id: "rn-npm-list",
        technologyId: "react-native",
        category: "Packages",
        title: "List installed packages",
        command: "npm list --depth=0",
        description:
            "Displays the direct dependencies installed in the current project.",
        example: "npm list --depth=0",
        whenToUse:
            "Use it when you want to quickly inspect the packages installed directly in your project.",
        tags: [
            "npm",
            "list",
            "packages",
            "dependencies",
        ],
        relatedCommands: [
            "rn-npm-outdated",
            "rn-npm-install",
        ],
    },

    {
        id: "rn-npx-expo",
        technologyId: "react-native",
        category: "Expo",
        title: "Run an Expo command",
        command: "npx expo <command>",
        description:
            "Runs an Expo CLI command using the project-compatible Expo CLI.",
        example: "npx expo --help",
        whenToUse:
            "Use it when you need to execute an Expo CLI command without installing the CLI globally.",
        tags: [
            "expo",
            "cli",
            "command",
            "npx",
        ],
        relatedCommands: [
            "rn-start",
            "rn-doctor",
        ],
    },

    {
        id: "rn-expo-version",
        technologyId: "react-native",
        category: "Expo",
        title: "Check Expo CLI version",
        command: "npx expo --version",
        description:
            "Displays the version of the Expo CLI being used.",
        example: "npx expo --version",
        whenToUse:
            "Use it when you need to check the installed Expo CLI version.",
        tags: [
            "expo",
            "version",
            "cli",
            "check",
        ],
        relatedCommands: [
            "rn-doctor",
            "rn-start",
        ],
    },

    {
        id: "rn-expo-help",
        technologyId: "react-native",
        category: "Expo",
        title: "Show Expo command help",
        command: "npx expo --help",
        description:
            "Displays available Expo CLI commands and usage information.",
        example: "npx expo --help",
        whenToUse:
            "Use it when you want to discover available Expo CLI commands and options.",
        tags: [
            "expo",
            "help",
            "cli",
            "commands",
        ],
        relatedCommands: [
            "rn-npx-expo",
            "rn-expo-version",
        ],
    },

    {
        id: "rn-eas-help",
        technologyId: "react-native",
        category: "EAS",
        title: "Show EAS command help",
        command: "eas --help",
        description:
            "Displays available Expo Application Services CLI commands and options.",
        example: "eas --help",
        whenToUse:
            "Use it when you need to discover available EAS CLI commands.",
        tags: [
            "eas",
            "help",
            "cli",
            "commands",
        ],
        relatedCommands: [
            "rn-build",
            "rn-submit",
        ],
    },

    {
        id: "rn-eas-version",
        technologyId: "react-native",
        category: "EAS",
        title: "Check EAS CLI version",
        command: "eas --version",
        description:
            "Displays the installed EAS CLI version.",
        example: "eas --version",
        whenToUse:
            "Use it when checking which EAS CLI version is installed.",
        tags: [
            "eas",
            "version",
            "cli",
            "check",
        ],
        relatedCommands: [
            "rn-eas-help",
            "rn-login",
        ],
    },

    {
        id: "rn-start-tunnel",
        technologyId: "react-native",
        category: "Development",
        title: "Start Expo with a tunnel",
        command: "npx expo start --tunnel",
        description:
            "Starts the Expo development server using a tunnel connection.",
        example: "npx expo start --tunnel",
        whenToUse:
            "Use it when your physical device cannot connect to the development server over the local network.",
        tags: [
            "tunnel",
            "network",
            "expo",
            "device",
            "development",
        ],
        relatedCommands: [
            "rn-start",
            "rn-start-clear",
        ],
    },

    {
        id: "rn-start-lan",
        technologyId: "react-native",
        category: "Development",
        title: "Start Expo using LAN",
        command: "npx expo start --lan",
        description:
            "Starts the Expo development server using the local network.",
        example: "npx expo start --lan",
        whenToUse:
            "Use it when your development computer and physical device are connected to the same local network.",
        tags: [
            "lan",
            "network",
            "expo",
            "device",
            "development",
        ],
        relatedCommands: [
            "rn-start",
            "rn-start-tunnel",
        ],
    },

    {
        id: "rn-start-localhost",
        technologyId: "react-native",
        category: "Development",
        title: "Start Expo using localhost",
        command: "npx expo start --localhost",
        description:
            "Starts the Expo development server using a localhost connection.",
        example: "npx expo start --localhost",
        whenToUse:
            "Use it when developing locally without needing network access from another device.",
        tags: [
            "localhost",
            "expo",
            "network",
            "development",
        ],
        relatedCommands: [
            "rn-start",
            "rn-start-lan",
        ],
    },

    {
        id: "rn-config",
        technologyId: "react-native",
        category: "Configuration",
        title: "Show Expo project configuration",
        command: "npx expo config",
        description:
            "Displays the resolved Expo configuration for the current project.",
        example: "npx expo config",
        whenToUse:
            "Use it when you want to inspect the configuration Expo is actually using.",
        tags: [
            "config",
            "configuration",
            "expo",
            "settings",
        ],
        relatedCommands: [
            "rn-doctor",
            "rn-prebuild",
        ],
    },

    {
        id: "rn-install-dev-client",
        technologyId: "react-native",
        category: "Development",
        title: "Install Expo development client",
        command: "npx expo install expo-dev-client",
        description:
            "Adds Expo Dev Client to a project so custom development builds can be used.",
        example: "npx expo install expo-dev-client",
        whenToUse:
            "Use it when your project needs native modules or a custom development client instead of Expo Go.",
        tags: [
            "dev-client",
            "development",
            "native",
            "expo",
            "package",
        ],
        relatedCommands: [
            "rn-prebuild",
            "rn-run-android",
            "rn-run-ios",
        ],
    },

    {
        id: "rn-start-dev-client",
        technologyId: "react-native",
        category: "Development",
        title: "Start Expo with development client",
        command: "npx expo start --dev-client",
        description:
            "Starts the Expo development server for an installed development build.",
        example: "npx expo start --dev-client",
        whenToUse:
            "Use it when working with a custom Expo development client.",
        tags: [
            "dev-client",
            "development",
            "expo",
            "native",
        ],
        relatedCommands: [
            "rn-install-dev-client",
            "rn-run-android",
        ],
    },


    /*GITHUB COMMANDS STARTS HERE*/

    {
        id: "github-auth-login",
        technologyId: "github",
        category: "Authentication",
        title: "Log in to GitHub CLI",
        command: "gh auth login",
        description:
            "Authenticates the GitHub CLI with your GitHub account.",
        example: "gh auth login",
        whenToUse:
            "Use it when setting up GitHub CLI for the first time or switching accounts.",
        tags: ["auth", "login", "github", "account", "setup"],
        relatedCommands: [
            "github-auth-status",
            "github-auth-logout",
        ],
    },

    {
        id: "github-auth-status",
        technologyId: "github",
        category: "Authentication",
        title: "Check authentication status",
        command: "gh auth status",
        description:
            "Shows the GitHub accounts and authentication status configured in GitHub CLI.",
        example: "gh auth status",
        whenToUse:
            "Use it when you want to verify whether GitHub CLI is authenticated.",
        tags: ["auth", "status", "login", "account"],
        relatedCommands: [
            "github-auth-login",
            "github-auth-logout",
        ],
    },

    {
        id: "github-auth-logout",
        technologyId: "github",
        category: "Authentication",
        title: "Log out of GitHub CLI",
        command: "gh auth logout",
        description:
            "Logs out an authenticated GitHub account from GitHub CLI.",
        example: "gh auth logout",
        whenToUse:
            "Use it when you want to remove a GitHub account from GitHub CLI.",
        tags: ["auth", "logout", "account", "github"],
        relatedCommands: [
            "github-auth-login",
            "github-auth-status",
        ],
    },

    {
        id: "github-repo-clone",
        technologyId: "github",
        category: "Repository",
        title: "Clone a GitHub repository",
        command: "gh repo clone <repository>",
        description:
            "Clones a GitHub repository to your local computer using GitHub CLI.",
        example: "gh repo clone facebook/react",
        whenToUse:
            "Use it when you want to clone a GitHub repository directly through GitHub CLI.",
        tags: ["clone", "repository", "github", "download"],
        relatedCommands: [
            "github-repo-view",
            "github-repo-list",
        ],
    },

    {
        id: "github-repo-list",
        technologyId: "github",
        category: "Repository",
        title: "List repositories",
        command: "gh repo list",
        description:
            "Lists repositories belonging to a GitHub user or organization.",
        example: "gh repo list",
        whenToUse:
            "Use it when you want to quickly view repositories from your GitHub account.",
        tags: ["repository", "list", "repos", "github"],
        relatedCommands: [
            "github-repo-view",
            "github-repo-clone",
        ],
    },

    {
        id: "github-repo-view",
        technologyId: "github",
        category: "Repository",
        title: "View repository information",
        command: "gh repo view",
        description:
            "Displays information about a GitHub repository.",
        example: "gh repo view owner/project",
        whenToUse:
            "Use it when you want to inspect a repository from the terminal.",
        tags: ["repository", "view", "inspect", "github"],
        relatedCommands: [
            "github-repo-list",
            "github-repo-clone",
        ],
    },

    {
        id: "github-repo-fork",
        technologyId: "github",
        category: "Repository",
        title: "Fork a repository",
        command: "gh repo fork <repository>",
        description:
            "Creates a fork of a GitHub repository under your account.",
        example: "gh repo fork owner/project",
        whenToUse:
            "Use it when you want your own GitHub copy of another user's repository.",
        tags: ["fork", "repository", "github", "copy"],
        relatedCommands: [
            "github-repo-clone",
            "github-pr-create",
        ],
    },

    {
        id: "github-repo-delete",
        technologyId: "github",
        category: "Repository",
        title: "Delete a repository",
        command: "gh repo delete <repository>",
        description:
            "Deletes a GitHub repository using GitHub CLI.",
        example: "gh repo delete owner/project",
        whenToUse:
            "Use it when you intentionally need to remove a repository from GitHub.",
        tags: ["delete", "repository", "remove", "github"],
        notes:
            "Repository deletion is destructive. Make sure the repository is no longer needed before confirming.",
        relatedCommands: [
            "github-repo-view",
        ],
    },

    {
        id: "github-repo-create-private",
        technologyId: "github",
        category: "Repository",
        title: "Create a private repository",
        command: "gh repo create <name> --private",
        description:
            "Creates a new private GitHub repository.",
        example: "gh repo create my-project --private",
        whenToUse:
            "Use it when you want to create a repository that is only accessible to authorized users.",
        tags: ["create", "repository", "private", "github"],
        relatedCommands: [
            "github-create-repo",
            "github-repo-view",
        ],
    },

    {
        id: "github-repo-create-public",
        technologyId: "github",
        category: "Repository",
        title: "Create a public repository",
        command: "gh repo create <name> --public",
        description:
            "Creates a new public GitHub repository.",
        example: "gh repo create my-project --public",
        whenToUse:
            "Use it when you want to create a repository that can be publicly viewed.",
        tags: ["create", "repository", "public", "github"],
        relatedCommands: [
            "github-create-repo",
            "github-repo-view",
        ],
    },

    {
        id: "github-pr-list",
        technologyId: "github",
        category: "Pull Requests",
        title: "List pull requests",
        command: "gh pr list",
        description:
            "Lists pull requests for the current GitHub repository.",
        example: "gh pr list",
        whenToUse:
            "Use it when you want to see open pull requests from the terminal.",
        tags: ["pull request", "pr", "list", "github"],
        relatedCommands: [
            "github-pr-view",
            "github-pr-create",
        ],
    },

    {
        id: "github-pr-view",
        technologyId: "github",
        category: "Pull Requests",
        title: "View a pull request",
        command: "gh pr view <number>",
        description:
            "Displays information about a specific pull request.",
        example: "gh pr view 42",
        whenToUse:
            "Use it when you want to inspect a pull request and its discussion.",
        tags: ["pull request", "pr", "view", "inspect"],
        relatedCommands: [
            "github-pr-list",
            "github-pr-checks",
        ],
    },

    {
        id: "github-pr-create",
        technologyId: "github",
        category: "Pull Requests",
        title: "Create a pull request",
        command: "gh pr create",
        description:
            "Creates a pull request from the terminal.",
        example: "gh pr create --title \"Add login\" --body \"Adds the login screen.\"",
        whenToUse:
            "Use it when you want to submit your branch changes for review.",
        tags: ["pull request", "pr", "create", "review"],
        relatedCommands: [
            "github-pr-list",
            "github-pr-review",
        ],
    },

    {
        id: "github-pr-checks",
        technologyId: "github",
        category: "Pull Requests",
        title: "View pull request checks",
        command: "gh pr checks <number>",
        description:
            "Shows the status of automated checks associated with a pull request.",
        example: "gh pr checks 42",
        whenToUse:
            "Use it when you want to check whether CI or other automated checks have passed.",
        tags: ["pull request", "checks", "ci", "actions", "status"],
        relatedCommands: [
            "github-pr-view",
            "github-run-list",
        ],
    },

    {
        id: "github-pr-review",
        technologyId: "github",
        category: "Pull Requests",
        title: "Review a pull request",
        command: "gh pr review <number>",
        description:
            "Submits a review for a GitHub pull request.",
        example: "gh pr review 42 --approve",
        whenToUse:
            "Use it when reviewing another developer's pull request.",
        tags: ["pull request", "review", "approve", "code review"],
        relatedCommands: [
            "github-pr-view",
            "github-pr-list",
        ],
    },

    {
        id: "github-pr-merge",
        technologyId: "github",
        category: "Pull Requests",
        title: "Merge a pull request",
        command: "gh pr merge <number>",
        description:
            "Merges a pull request into its target branch.",
        example: "gh pr merge 42",
        whenToUse:
            "Use it when a pull request has been reviewed and is ready to be merged.",
        tags: ["pull request", "merge", "pr", "github"],
        relatedCommands: [
            "github-pr-view",
            "github-pr-review",
        ],
    },

    {
        id: "github-pr-close",
        technologyId: "github",
        category: "Pull Requests",
        title: "Close a pull request",
        command: "gh pr close <number>",
        description:
            "Closes an open pull request without merging it.",
        example: "gh pr close 42",
        whenToUse:
            "Use it when a pull request should no longer remain open.",
        tags: ["pull request", "close", "pr", "github"],
        relatedCommands: [
            "github-pr-list",
            "github-pr-view",
        ],
    },

    {
        id: "github-issue-list",
        technologyId: "github",
        category: "Issues",
        title: "List issues",
        command: "gh issue list",
        description:
            "Lists issues for the current GitHub repository.",
        example: "gh issue list",
        whenToUse:
            "Use it when you want to see open issues from the terminal.",
        tags: ["issue", "list", "github", "tasks"],
        relatedCommands: [
            "github-issue-view",
            "github-issue-create",
        ],
    },

    {
        id: "github-issue-view",
        technologyId: "github",
        category: "Issues",
        title: "View an issue",
        command: "gh issue view <number>",
        description:
            "Displays information about a specific GitHub issue.",
        example: "gh issue view 15",
        whenToUse:
            "Use it when you want to inspect an issue and its discussion.",
        tags: ["issue", "view", "inspect", "github"],
        relatedCommands: [
            "github-issue-list",
            "github-issue-comment",
        ],
    },

    {
        id: "github-issue-create",
        technologyId: "github",
        category: "Issues",
        title: "Create an issue",
        command: "gh issue create",
        description:
            "Creates a new GitHub issue from the terminal.",
        example: "gh issue create --title \"Fix login bug\"",
        whenToUse:
            "Use it when you want to report a bug or create a task without opening the browser.",
        tags: ["issue", "create", "bug", "task"],
        relatedCommands: [
            "github-issue-list",
            "github-issue-view",
        ],
    },

    {
        id: "github-issue-close",
        technologyId: "github",
        category: "Issues",
        title: "Close an issue",
        command: "gh issue close <number>",
        description:
            "Closes an open GitHub issue.",
        example: "gh issue close 15",
        whenToUse:
            "Use it when an issue has been resolved or is no longer needed.",
        tags: ["issue", "close", "github", "task"],
        relatedCommands: [
            "github-issue-list",
            "github-issue-view",
        ],
    },

    {
        id: "github-issue-comment",
        technologyId: "github",
        category: "Issues",
        title: "Add a comment to an issue",
        command: "gh issue comment <number>",
        description:
            "Adds a comment to an existing GitHub issue.",
        example: "gh issue comment 15 --body \"I found the cause of this bug.\"",
        whenToUse:
            "Use it when you want to provide an update or additional information on an issue.",
        tags: ["issue", "comment", "discussion", "github"],
        relatedCommands: [
            "github-issue-view",
            "github-issue-list",
        ],
    },

    {
        id: "github-release-list",
        technologyId: "github",
        category: "Releases",
        title: "List releases",
        command: "gh release list",
        description:
            "Lists releases published for a GitHub repository.",
        example: "gh release list",
        whenToUse:
            "Use it when you want to inspect published versions of a project.",
        tags: ["release", "version", "list", "github"],
        relatedCommands: [
            "github-release-view",
            "github-release-create",
        ],
    },

    {
        id: "github-release-view",
        technologyId: "github",
        category: "Releases",
        title: "View a release",
        command: "gh release view <tag>",
        description:
            "Displays information about a specific GitHub release.",
        example: "gh release view v1.0.0",
        whenToUse:
            "Use it when you want to inspect a release and its assets.",
        tags: ["release", "version", "view", "github"],
        relatedCommands: [
            "github-release-list",
            "github-release-download",
        ],
    },

    {
        id: "github-release-create",
        technologyId: "github",
        category: "Releases",
        title: "Create a release",
        command: "gh release create <tag>",
        description:
            "Creates and publishes a new GitHub release.",
        example: "gh release create v1.0.0",
        whenToUse:
            "Use it when you want to publish a new version of your project.",
        tags: ["release", "version", "publish", "github"],
        relatedCommands: [
            "github-release-list",
            "github-release-upload",
        ],
    },

    {
        id: "github-release-upload",
        technologyId: "github",
        category: "Releases",
        title: "Upload release assets",
        command: "gh release upload <tag> <file>",
        description:
            "Uploads one or more files as assets attached to a GitHub release.",
        example: "gh release upload v1.0.0 app-release.apk",
        whenToUse:
            "Use it when you want to attach downloadable files to an existing release.",
        tags: ["release", "upload", "asset", "apk", "file"],
        relatedCommands: [
            "github-release-create",
            "github-release-download",
        ],
    },

    {
        id: "github-release-download",
        technologyId: "github",
        category: "Releases",
        title: "Download release assets",
        command: "gh release download <tag>",
        description:
            "Downloads assets from a GitHub release.",
        example: "gh release download v1.0.0",
        whenToUse:
            "Use it when you want to download files attached to a release.",
        tags: ["release", "download", "asset", "file"],
        relatedCommands: [
            "github-release-view",
            "github-release-list",
        ],
    },

    {
        id: "github-run-list",
        technologyId: "github",
        category: "Actions",
        title: "List workflow runs",
        command: "gh run list",
        description:
            "Lists GitHub Actions workflow runs for a repository.",
        example: "gh run list",
        whenToUse:
            "Use it when you want to inspect recent CI/CD workflow runs.",
        tags: ["actions", "workflow", "ci", "cd", "runs"],
        relatedCommands: [
            "github-run-view",
            "github-run-watch",
        ],
    },

    {
        id: "github-run-view",
        technologyId: "github",
        category: "Actions",
        title: "View a workflow run",
        command: "gh run view <run-id>",
        description:
            "Displays details about a specific GitHub Actions workflow run.",
        example: "gh run view 123456789",
        whenToUse:
            "Use it when you want to inspect the result and details of a workflow run.",
        tags: ["actions", "workflow", "run", "ci", "inspect"],
        relatedCommands: [
            "github-run-list",
            "github-run-watch",
        ],
    },

    {
        id: "github-run-watch",
        technologyId: "github",
        category: "Actions",
        title: "Watch a workflow run",
        command: "gh run watch <run-id>",
        description:
            "Monitors a GitHub Actions workflow run until it completes.",
        example: "gh run watch 123456789",
        whenToUse:
            "Use it when you want to follow a running workflow directly from the terminal.",
        tags: ["actions", "workflow", "watch", "ci", "run"],
        relatedCommands: [
            "github-run-list",
            "github-run-view",
        ],
    },

    {
        id: "github-workflow-list",
        technologyId: "github",
        category: "Actions",
        title: "List workflows",
        command: "gh workflow list",
        description:
            "Lists GitHub Actions workflows configured in a repository.",
        example: "gh workflow list",
        whenToUse:
            "Use it when you want to see the workflows available in a repository.",
        tags: ["workflow", "actions", "list", "ci"],
        relatedCommands: [
            "github-workflow-run",
            "github-run-list",
        ],
    },

    {
        id: "github-workflow-run",
        technologyId: "github",
        category: "Actions",
        title: "Run a workflow",
        command: "gh workflow run <workflow>",
        description:
            "Manually triggers a GitHub Actions workflow.",
        example: "gh workflow run deploy.yml",
        whenToUse:
            "Use it when a workflow supports manual execution and you want to trigger it from the terminal.",
        tags: ["workflow", "actions", "run", "deploy", "ci"],
        relatedCommands: [
            "github-workflow-list",
            "github-run-list",
        ],
    },

    {
        id: "github-search-repos",
        technologyId: "github",
        category: "Search",
        title: "Search repositories",
        command: "gh search repos <query>",
        description:
            "Searches GitHub repositories using a text query.",
        example: "gh search repos flutter weather app",
        whenToUse:
            "Use it when you want to discover GitHub repositories matching specific keywords.",
        tags: ["search", "repository", "find", "github"],
        relatedCommands: [
            "github-search-code",
            "github-search-issues",
        ],
    },

    {
        id: "github-search-code",
        technologyId: "github",
        category: "Search",
        title: "Search code",
        command: "gh search code <query>",
        description:
            "Searches publicly available GitHub code using a search query.",
        example: "gh search code \"Firebase.initializeApp\"",
        whenToUse:
            "Use it when you want to find code examples or implementations across GitHub.",
        tags: ["search", "code", "find", "github"],
        relatedCommands: [
            "github-search-repos",
            "github-search-issues",
        ],
    },

    {
        id: "github-search-issues",
        technologyId: "github",
        category: "Search",
        title: "Search issues",
        command: "gh search issues <query>",
        description:
            "Searches GitHub issues matching a search query.",
        example: "gh search issues \"login bug\"",
        whenToUse:
            "Use it when you want to find existing discussions, bugs, or tasks on GitHub.",
        tags: ["search", "issues", "bug", "find", "github"],
        relatedCommands: [
            "github-issue-list",
            "github-search-repos",
        ],
    },

    {
        id: "github-gist-create",
        technologyId: "github",
        category: "Gists",
        title: "Create a gist",
        command: "gh gist create <file>",
        description:
            "Creates a GitHub gist from a local file.",
        example: "gh gist create script.py",
        whenToUse:
            "Use it when you want to quickly share a code file or text snippet through GitHub Gists.",
        tags: ["gist", "create", "share", "snippet"],
        relatedCommands: [
            "github-gist-list",
            "github-gist-view",
        ],
    },

    {
        id: "github-gist-list",
        technologyId: "github",
        category: "Gists",
        title: "List gists",
        command: "gh gist list",
        description:
            "Lists your GitHub Gists from the terminal.",
        example: "gh gist list",
        whenToUse:
            "Use it when you want to see the gists associated with your account.",
        tags: ["gist", "list", "github", "snippets"],
        relatedCommands: [
            "github-gist-view",
            "github-gist-create",
        ],
    },

    {
        id: "github-gist-view",
        technologyId: "github",
        category: "Gists",
        title: "View a gist",
        command: "gh gist view <gist-id>",
        description:
            "Displays the contents and information of a GitHub Gist.",
        example: "gh gist view abc123",
        whenToUse:
            "Use it when you want to inspect a gist from the terminal.",
        tags: ["gist", "view", "inspect", "github"],
        relatedCommands: [
            "github-gist-list",
            "github-gist-create",
        ],
    },

    {
        id: "github-label-list",
        technologyId: "github",
        category: "Repository",
        title: "List repository labels",
        command: "gh label list",
        description:
            "Lists labels available in the current GitHub repository.",
        example: "gh label list",
        whenToUse:
            "Use it when you want to inspect the labels used for organizing issues and pull requests.",
        tags: ["label", "issues", "repository", "list"],
        relatedCommands: [
            "github-issue-list",
            "github-pr-list",
        ],
    },

    {
        id: "github-status",
        technologyId: "github",
        category: "Repository",
        title: "Check repository status",
        command: "gh status",
        description:
            "Shows an overview of your GitHub activity and repository-related information.",
        example: "gh status",
        whenToUse:
            "Use it when you want a quick overview of pull requests, issues, and notifications related to your repositories.",
        tags: ["status", "github", "activity", "notifications"],
        relatedCommands: [
            "github-pr-list",
            "github-issue-list",
        ],
    },
];
