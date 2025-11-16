# VS Code Configuration for Tailwind CSS

This workspace is configured to suppress CSS validation warnings for Tailwind CSS directives.

## Configuration Files

- `.vscode/settings.json` - Disables CSS validation and configures Tailwind CSS support
- `.vscode/css_custom_data.json` - Defines Tailwind CSS at-rules for VS Code's CSS language server
- `.vscode/extensions.json` - Recommends the Tailwind CSS IntelliSense extension

## If Warnings Persist

If you still see "Unknown at rule @tailwind" or "@apply" warnings:

1. **Completely restart VS Code** (close and reopen, not just reload window)
2. **Install the recommended extension**: Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
3. **Clear VS Code cache**: Close VS Code, delete `.vscode` folder (optional), and reopen
4. **Check workspace settings**: Ensure no user-level settings are overriding workspace settings

## Settings Applied

- `css.validate: false` - Disables CSS validation
- `css.lint.unknownAtRules: "ignore"` - Ignores unknown at-rules
- `css.diagnostics.enabled: false` - Disables CSS diagnostics completely
- File associations set to treat `globals.css` as Tailwind CSS

These warnings are cosmetic and do not affect functionality. Tailwind CSS will process these directives correctly during build.

