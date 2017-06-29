# Existing App Solutions For Female Refugees

## Example data

Append to `data.json` with the following `json` object.

*Note: Any missing data leave as empty string, for example `"email": ""`*

```json
{
  "name": "Ankommen",
  "tags": ["Inclusion", "Integration", "Employment"],
  "url": "https://www.ankommenapp.de",
  "presentation": "https://www.youtube.com/watch?v=Q-Vg5UXe8_g",
  "description": "The platform is the digital home for migrant women offering everything they need to create their social and professional future in Germany",
  "email": "internetredaktion@bamf.bund.de",
  "connection": "Techfugees Slack",
  "status": "live"
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploying to GitHub pages

```bash
$ ng build --prod --base-href "https://RefuTech4All.github.io/ExistingAppSolutionsForFemaleRefugees/"
$ ./node_modules/angular-cli-ghpages/bin/angular-cli-ghpages
```
